import { useMemo, useState } from 'react';

const REBATE_MAP = {
  forex: 6.5, // $ per lot
  metals: 4.0,
  indices: 2.5,
  crypto: 1.2,
};

export default function RebateCalculator() {
  const [instrument, setInstrument] = useState('forex');
  const [volume, setVolume] = useState('10');

  const rebatePerLot = REBATE_MAP[instrument];

  const estimated = useMemo(() => {
    const lots = parseFloat(volume || '0');
    return Math.max(0, lots) * rebatePerLot;
  }, [volume, rebatePerLot]);

  const handleClaim = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());
    alert(`Rebate claim submitted!\nAccount: ${data.accountId}\nEmail: ${data.email}\nVolume: ${data.claimVolume} lots`);
    e.currentTarget.reset();
  };

  return (
    <section id="rebates" className="py-16 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-slate-900">Rebate Calculator</h2>
            <p className="mt-1 text-sm text-slate-600">Estimate how much cash-back you can earn from your trading activity.</p>
            <div className="mt-6 grid gap-4">
              <label className="grid gap-2">
                <span className="text-sm text-slate-600">Instrument</span>
                <select
                  value={instrument}
                  onChange={(e) => setInstrument(e.target.value)}
                  className="rounded-lg border border-slate-300 px-3 py-2 text-slate-900 focus:ring-2 focus:ring-slate-900"
                >
                  <option value="forex">Forex</option>
                  <option value="metals">Metals</option>
                  <option value="indices">Indices</option>
                  <option value="crypto">Crypto</option>
                </select>
              </label>

              <label className="grid gap-2">
                <span className="text-sm text-slate-600">Trade Volume (lots)</span>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={volume}
                  onChange={(e) => setVolume(e.target.value)}
                  className="rounded-lg border border-slate-300 px-3 py-2 text-slate-900 focus:ring-2 focus:ring-slate-900"
                />
              </label>

              <div className="mt-2 rounded-lg bg-slate-50 border border-slate-200 p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">Rebate per lot</span>
                  <span className="font-medium text-slate-900">${rebatePerLot.toFixed(2)}</span>
                </div>
                <div className="mt-2 flex items-center justify-between text-sm">
                  <span className="text-slate-600">Estimated total rebate</span>
                  <span className="text-lg font-semibold text-slate-900">${estimated.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleClaim} className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-slate-900">Rebate Claim Form</h2>
            <p className="mt-1 text-sm text-slate-600">Submit your trading account details to receive your cashback.</p>

            <div className="mt-6 grid gap-4">
              <label className="grid gap-2">
                <span className="text-sm text-slate-600">Trading Account ID</span>
                <input name="accountId" required className="rounded-lg border border-slate-300 px-3 py-2" placeholder="e.g. 12345678" />
              </label>

              <label className="grid gap-2">
                <span className="text-sm text-slate-600">Email</span>
                <input name="email" type="email" required className="rounded-lg border border-slate-300 px-3 py-2" placeholder="you@example.com" />
              </label>

              <div className="grid grid-cols-2 gap-4">
                <label className="grid gap-2">
                  <span className="text-sm text-slate-600">Instrument</span>
                  <select name="claimInstrument" className="rounded-lg border border-slate-300 px-3 py-2">
                    <option>Forex</option>
                    <option>Metals</option>
                    <option>Indices</option>
                    <option>Crypto</option>
                  </select>
                </label>
                <label className="grid gap-2">
                  <span className="text-sm text-slate-600">Volume (lots)</span>
                  <input name="claimVolume" type="number" min="0" step="0.01" required className="rounded-lg border border-slate-300 px-3 py-2" placeholder="10.00" />
                </label>
              </div>

              <label className="flex items-center gap-3 text-sm">
                <input type="checkbox" required className="h-4 w-4 rounded border-slate-300" />
                I confirm the trades are closed and agree to the rebate terms.
              </label>

              <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:bg-slate-800">
                Submit Claim
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
