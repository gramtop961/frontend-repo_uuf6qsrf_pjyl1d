import { useState } from 'react';

const MENU_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'markets', label: 'Markets' },
  { id: 'rebates', label: 'Rebates' },
  { id: 'partners', label: 'Partners' },
  { id: 'copytrading', label: 'Copy Trading' },
  { id: 'education', label: 'Education' },
  { id: 'promotions', label: 'Promotions' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'support', label: 'Support' },
  { id: 'about', label: 'About' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/60 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500" />
            <span className="font-semibold text-slate-900 text-lg">FlamesTrade</span>
          </div>

          <nav className="hidden lg:flex items-center gap-6 text-sm text-slate-700">
            {MENU_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="hover:text-slate-900 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a href="#rebates" className="ml-4 inline-flex items-center rounded-lg bg-slate-900 text-white px-4 py-2 text-sm hover:bg-slate-800">Start Trading</a>
          </nav>

          <button
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:bg-slate-100"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              {open ? (
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 11-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
              ) : (
                <path fillRule="evenodd" d="M3.75 5.25a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zm0 6a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zm0 6a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z" clipRule="evenodd" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="lg:hidden mt-3 grid gap-2 pb-4">
            {MENU_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="w-full text-left px-3 py-2 rounded-md hover:bg-slate-100 text-slate-700"
              >
                {item.label}
              </button>
            ))}
            <a href="#rebates" className="mt-2 inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-4 py-2 text-sm hover:bg-slate-800">Start Trading</a>
          </div>
        )}
      </div>
    </header>
  );
}
