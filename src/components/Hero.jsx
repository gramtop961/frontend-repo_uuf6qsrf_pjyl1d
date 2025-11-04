export default function Hero() {
  return (
    <section id="home" className="pt-24 sm:pt-28 pb-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
              Live spreads from 0.0 pips • Instant rebates
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
              Elegant Trading & Rebate Platform
            </h1>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              Trade forex, commodities, and indices with institutional-grade pricing. Earn automatic cash rebates on every lot you trade.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#rebates" className="inline-flex items-center rounded-lg bg-slate-900 text-white px-5 py-3 text-sm font-medium hover:bg-slate-800">Calculate Rebates</a>
              <a href="#partners" className="inline-flex items-center rounded-lg border border-slate-300 bg-white text-slate-900 px-5 py-3 text-sm font-medium hover:bg-slate-50">Become a Partner</a>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-6">
              <div>
                <dt className="text-xs text-slate-500">Average Rebate</dt>
                <dd className="text-lg font-semibold text-slate-900">$6.5/lot</dd>
              </div>
              <div>
                <dt className="text-xs text-slate-500">Execution</dt>
                <dd className="text-lg font-semibold text-slate-900">&lt; 20 ms</dd>
              </div>
              <div>
                <dt className="text-xs text-slate-500">Pairs</dt>
                <dd className="text-lg font-semibold text-slate-900">60+</dd>
              </div>
            </dl>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-tr from-indigo-600/20 via-cyan-400/20 to-emerald-400/20 border border-slate-200 overflow-hidden">
              <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 opacity-40">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div key={i} className="border border-white/30" />
                ))}
              </div>
              <div className="absolute inset-0 p-6 flex items-end justify-between">
                <div className="space-y-2">
                  <div className="h-2 w-40 rounded bg-white/60" />
                  <div className="h-2 w-24 rounded bg-white/60" />
                </div>
                <div className="h-10 w-10 rounded-full bg-white/70" />
              </div>
            </div>
            <p className="mt-3 text-xs text-slate-500">Visualized orderbook and price grid preview</p>
          </div>
        </div>
      </div>
    </section>
  );
}
