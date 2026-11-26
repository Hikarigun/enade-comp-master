import React, { useMemo } from 'react';
import katex from 'katex';

interface RichTextProps {
  content: string;
  className?: string;
}

function renderLatex(expr: string, displayMode: boolean): string {
  try {
    return katex.renderToString(expr.trim(), {
      displayMode,
      throwOnError: false,
      strict: false,
      trust: false,
    });
  } catch {
    return expr;
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function renderInline(text: string): string {
  // 1. Protect inline code `...`
  const codeTokens: string[] = [];
  let processed = text.replace(/`([^`]+)`/g, (_m, code) => {
    const idx = codeTokens.length;
    codeTokens.push(
      `<code class="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-indigo-700 dark:text-indigo-300 text-[0.88em] font-mono border border-slate-200 dark:border-slate-700">${escapeHtml(code)}</code>`
    );
    return `\u0000CODE${idx}\u0000`;
  });

  // 2. Protect inline math $...$ (avoid matching Brazilian currency like R$ 10,00 without breaking math like $R$)
  const mathTokens: string[] = [];
  processed = processed.replace(/(^|[^$\\])R\$(?=\s*\d)/g, '$1\u0000BRL\u0000');

  processed = processed.replace(/\$([^$\n]+?)\$/g, (_m, expr) => {
    // Avoid accidental math on plain numbers or empty
    if (!expr.trim()) return _m;
    const idx = mathTokens.length;
    mathTokens.push(renderLatex(expr, false));
    return `\u0000MATH${idx}\u0000`;
  });

  // Escape HTML on remaining prose
  processed = escapeHtml(processed);

  // Restore R$
  processed = processed.replace(/\u0000BRL\u0000/g, 'R$');

  // Bold **...**
  processed = processed.replace(/\*\*([^*]+?)\*\*/g, '<strong class="font-semibold text-slate-900 dark:text-slate-100">$1</strong>');
  // Italic *...*
  processed = processed.replace(/(?<!\*)\*([^*\n]+?)\*(?!\*)/g, '<em class="italic">$1</em>');

  // Restore math and inline code
  processed = processed.replace(/\u0000MATH(\d+)\u0000/g, (_m, i) => mathTokens[Number(i)]);
  processed = processed.replace(/\u0000CODE(\d+)\u0000/g, (_m, i) => codeTokens[Number(i)]);

  return processed;
}

type Block =
  | { type: 'code'; lang: string; code: string }
  | { type: 'math'; expr: string }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'heading'; level: number; text: string }
  | { type: 'quote'; lines: string[] }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'hr' }
  | { type: 'paragraph'; text: string };

function parseBlocks(raw: string): Block[] {
  const lines = raw.replace(/\r\n/g, '\n').split('\n');
  const blocks: Block[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!trimmed) {
      i++;
      continue;
    }

    // Fenced code block
    if (trimmed.startsWith('```')) {
      const lang = trimmed.slice(3).trim() || 'text';
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      if (i < lines.length) i++;
      blocks.push({ type: 'code', lang, code: codeLines.join('\n') });
      continue;
    }

    // Display math block $$...$$
    if (trimmed.startsWith('$$')) {
      if (trimmed.endsWith('$$') && trimmed.length > 4) {
        blocks.push({ type: 'math', expr: trimmed.slice(2, -2) });
        i++;
        continue;
      }
      const mathLines: string[] = [trimmed.slice(2)];
      i++;
      while (i < lines.length && !lines[i].trim().endsWith('$$')) {
        mathLines.push(lines[i]);
        i++;
      }
      if (i < lines.length) {
        mathLines.push(lines[i].trim().slice(0, -2));
        i++;
      }
      blocks.push({ type: 'math', expr: mathLines.join('\n') });
      continue;
    }

    // Horizontal rule
    if (/^(-{3,}|\*{3,})$/.test(trimmed)) {
      blocks.push({ type: 'hr' });
      i++;
      continue;
    }

    // Heading
    const headingMatch = trimmed.match(/^(#{1,4})\s+(.+)$/);
    if (headingMatch) {
      blocks.push({ type: 'heading', level: headingMatch[1].length, text: headingMatch[2] });
      i++;
      continue;
    }

    // Markdown table
    if (trimmed.includes('|') && i + 1 < lines.length && /^\s*\|?[\s:-]+\|[\s|:-]*$/.test(lines[i + 1])) {
      const splitRow = (r: string) =>
        r
          .trim()
          .replace(/^\|/, '')
          .replace(/\|$/, '')
          .split('|')
          .map((c) => c.trim());
      const headers = splitRow(line);
      i += 2;
      const rows: string[][] = [];
      while (i < lines.length && lines[i].trim().includes('|') && lines[i].trim() !== '') {
        rows.push(splitRow(lines[i]));
        i++;
      }
      blocks.push({ type: 'table', headers, rows });
      continue;
    }

    // Blockquote
    if (trimmed.startsWith('>')) {
      const qLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('>')) {
        qLines.push(lines[i].trim().replace(/^>\s?/, ''));
        i++;
      }
      blocks.push({ type: 'quote', lines: qLines });
      continue;
    }

    // Unordered list
    if (/^[-*•]\s+/.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length && /^[-*•]\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^[-*•]\s+/, ''));
        i++;
      }
      blocks.push({ type: 'ul', items });
      continue;
    }

    // Ordered list (also Roman numerals like I., II., III., IV., V.)
    if (/^(\d+\.|[IVX]+\.)\s+/.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length && /^(\d+\.|[IVX]+\.)\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim());
        i++;
      }
      blocks.push({ type: 'ol', items });
      continue;
    }

    // Regular paragraph (merge consecutive plain lines)
    const pLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== '' &&
      !lines[i].trim().startsWith('```') &&
      !lines[i].trim().startsWith('$$') &&
      !lines[i].trim().startsWith('>') &&
      !/^#{1,4}\s+/.test(lines[i].trim()) &&
      !/^[-*•]\s+/.test(lines[i].trim()) &&
      !/^(\d+\.|[IVX]+\.)\s+/.test(lines[i].trim()) &&
      !(lines[i].trim().includes('|') && i + 1 < lines.length && /^\s*\|?[\s:-]+\|[\s|:-]*$/.test(lines[i + 1]))
    ) {
      pLines.push(lines[i].trim());
      i++;
    }
    if (pLines.length > 0) {
      blocks.push({ type: 'paragraph', text: pLines.join(' ') });
    }
  }

  return blocks;
}

export const RichText: React.FC<RichTextProps> = ({ content, className = '' }) => {
  const blocks = useMemo(() => parseBlocks(content || ''), [content]);

  return (
    <div className={`space-y-3 leading-relaxed text-slate-700 dark:text-slate-300 ${className}`}>
      {blocks.map((block, idx) => {
        switch (block.type) {
          case 'code':
            return (
              <div key={idx} className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-950 text-slate-100 my-3 shadow-sm">
                <div className="flex items-center justify-between px-3.5 py-1.5 bg-slate-900 border-b border-slate-800 text-xs text-slate-400 font-mono uppercase tracking-wider">
                  <span>{block.lang}</span>
                </div>
                <pre className="p-4 overflow-x-auto text-[13px] leading-relaxed font-mono">
                  <code>{block.code}</code>
                </pre>
              </div>
            );
          case 'math':
            return (
              <div
                key={idx}
                className="my-3 py-2 px-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/70 overflow-x-auto text-center"
                dangerouslySetInnerHTML={{ __html: renderLatex(block.expr, true) }}
              />
            );
          case 'table':
            return (
              <div key={idx} className="overflow-x-auto my-3 rounded-xl border border-slate-200 dark:border-slate-700">
                <table className="w-full text-sm text-left border-collapse">
                  <thead className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                    <tr>
                      {block.headers.map((h, hi) => (
                        <th
                          key={hi}
                          className="px-3.5 py-2.5 font-semibold border-b border-slate-200 dark:border-slate-700"
                          dangerouslySetInnerHTML={{ __html: renderInline(h) }}
                        />
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-slate-900/50">
                    {block.rows.map((row, ri) => (
                      <tr key={ri} className="hover:bg-slate-50/70 dark:hover:bg-slate-800/40">
                        {row.map((cell, ci) => (
                          <td
                            key={ci}
                            className="px-3.5 py-2 text-slate-700 dark:text-slate-300"
                            dangerouslySetInnerHTML={{ __html: renderInline(cell) }}
                          />
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case 'heading': {
            const Tag = block.level === 1 ? 'h2' : block.level === 2 ? 'h3' : 'h4';
            const cls =
              block.level <= 2
                ? 'text-lg font-bold text-slate-900 dark:text-white mt-4 mb-1'
                : 'text-base font-semibold text-slate-900 dark:text-slate-100 mt-3 mb-1';
            return <Tag key={idx} className={cls} dangerouslySetInnerHTML={{ __html: renderInline(block.text) }} />;
          }
          case 'quote':
            return (
              <blockquote
                key={idx}
                className="border-l-4 border-indigo-500 pl-4 py-1.5 my-2 bg-indigo-50/50 dark:bg-indigo-950/30 rounded-r-lg text-slate-700 dark:text-slate-300 italic space-y-1"
              >
                {block.lines.map((l, li) => (
                  <p key={li} dangerouslySetInnerHTML={{ __html: renderInline(l) }} />
                ))}
              </blockquote>
            );
          case 'ul':
            return (
              <ul key={idx} className="list-disc pl-5 space-y-1.5">
                {block.items.map((item, ii) => (
                  <li key={ii} dangerouslySetInnerHTML={{ __html: renderInline(item) }} />
                ))}
              </ul>
            );
          case 'ol':
            return (
              <div key={idx} className="space-y-2 pl-2">
                {block.items.map((item, ii) => {
                  const match = item.match(/^(\d+\.|[IVX]+\.)\s+([\s\S]*)$/);
                  if (match) {
                    return (
                      <div key={ii} className="flex gap-2.5 items-start">
                        <span className="font-bold text-indigo-600 dark:text-indigo-400 shrink-0 min-w-[2rem]">
                          {match[1]}
                        </span>
                        <span dangerouslySetInnerHTML={{ __html: renderInline(match[2]) }} />
                      </div>
                    );
                  }
                  return <p key={ii} dangerouslySetInnerHTML={{ __html: renderInline(item) }} />;
                })}
              </div>
            );
          case 'hr':
            return <hr key={idx} className="border-slate-200 dark:border-slate-700 my-3" />;
          case 'paragraph':
          default:
            return <p key={idx} dangerouslySetInnerHTML={{ __html: renderInline(block.text) }} />;
        }
      })}
    </div>
  );
};

export const InlineRichText: React.FC<{ content: string; className?: string }> = ({ content, className = '' }) => {
  const html = useMemo(() => renderInline(content || ''), [content]);
  return <span className={className} dangerouslySetInnerHTML={{ __html: html }} />;
};

export const LatexBlock: React.FC<{ latex: string; display?: boolean; className?: string }> = ({
  latex,
  display = true,
  className = '',
}) => {
  const html = useMemo(() => renderLatex(latex, display), [latex, display]);
  return <span className={className} dangerouslySetInnerHTML={{ __html: html }} />;
};
