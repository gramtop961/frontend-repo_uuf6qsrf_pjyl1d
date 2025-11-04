export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} FlamesTrade. All rights reserved.</p>
          <div className="flex items-center gap-5 text-sm text-slate-600">
            <a href="#support" className="hover:text-slate-900">Support</a>
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
            <a href="#" className="hover:text-slate-900">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
