import React, { useState, useMemo } from 'react';
import { Search, Printer, Sigma, Filter } from 'lucide-react';
import { FORMULAS } from '../data/formulas';
import { DISCIPLINES, DISCIPLINE_MAP } from '../data/disciplines';
import type { DisciplineId } from '../types/enade';
import { LatexBlock, InlineRichText } from '../components/RichText';

export const FormulasPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [selectedDisc, setSelectedDisc] = useState<DisciplineId | 'all'>('all');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return FORMULAS.filter((f) => {
      if (selectedDisc !== 'all' && f.discipline !== selectedDisc) return false;
      if (!q) return true;
      return (
        f.title.toLowerCase().includes(q) ||
        f.whenToUse.toLowerCase().includes(q) ||
        f.variables.toLowerCase().includes(q) ||
        (f.example || '').toLowerCase().includes(q) ||
        DISCIPLINE_MAP[f.discipline].name.toLowerCase().includes(q)
      );
    });
  }, [query, selectedDisc]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">
            <Sigma className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
            Folha de Fórmulas & Cheat Sheets
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Todas as equações, teoremas e regras de ouro cobradas no ENADE de Engenharia da Computação.
          </p>
        </div>
        <button
          type="button"
          onClick={() => window.print()}
          className="px-4 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-semibold hover:opacity-90 transition flex items-center gap-2 self-start cursor-pointer"
        >
          <Printer className="w-4 h-4" /> Imprimir / PDF
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar fórmula, teorema ou palavra-chave (ex: Nyquist, Dijkstra, Lagrange, ADC, RMS, CIDR)..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          <Filter className="w-4 h-4 text-slate-400 shrink-0" />
          <button
            type="button"
            onClick={() => setSelectedDisc('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold shrink-0 transition cursor-pointer ${
              selectedDisc === 'all'
                ? 'bg-indigo-600 text-white'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            Todas ({FORMULAS.length})
          </button>
          {DISCIPLINES.map((d) => {
            const count = FORMULAS.filter((f) => f.discipline === d.id).length;
            if (count === 0) return null;
            return (
              <button
                key={d.id}
                type="button"
                onClick={() => setSelectedDisc(d.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold shrink-0 transition cursor-pointer ${
                  selectedDisc === d.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {d.shortName} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Formula Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {filtered.map((item) => {
          const disc = DISCIPLINE_MAP[item.discipline];
          return (
            <div
              key={item.id}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 flex flex-col gap-3 shadow-sm hover:border-indigo-300 dark:hover:border-indigo-700 transition"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-bold text-slate-900 dark:text-white text-base leading-snug">
                  {item.title}
                </h3>
                <span
                  className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold shrink-0"
                  style={{ backgroundColor: `${disc.color}18`, color: disc.color }}
                >
                  {disc.shortName}
                </span>
              </div>

              <div className="py-3 px-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 overflow-x-auto text-center text-sm text-slate-900 dark:text-slate-100">
                <LatexBlock latex={item.latex} display className="block" />
              </div>

              <div className="text-xs text-slate-600 dark:text-slate-400 space-y-1.5">
                <p>
                  <strong className="text-slate-800 dark:text-slate-200">Variáveis:</strong> {item.variables}
                </p>
                <p>
                  <strong className="text-indigo-700 dark:text-indigo-400">Quando usar no ENADE:</strong>{' '}
                  <InlineRichText content={item.whenToUse} />
                </p>
                {item.example && (
                  <div className="mt-2 p-2.5 rounded-lg bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/70 dark:border-emerald-800/60 text-emerald-900 dark:text-emerald-200">
                    <strong>Exemplo rápido:</strong> <InlineRichText content={item.example} />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
          Nenhuma fórmula encontrada para "{query}".
        </div>
      )}
    </div>
  );
};
