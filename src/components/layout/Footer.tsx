export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100">
          <div className="w-6 h-6 bg-accent rounded flex items-center justify-center font-bold text-bg-dark text-xs">D</div>
          <span className="font-display font-bold text-sm tracking-tight uppercase">Dhruv Patil.</span>
        </div>

        <div className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Dhruv Patil.
        </div>

        <div className="flex items-center gap-8 text-sm font-medium text-slate-400">
          <a href="https://github.com/DhruvPatil123" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/dhruv-patil-3816043b7" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="https://x.com/DhruvPatil_18" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
