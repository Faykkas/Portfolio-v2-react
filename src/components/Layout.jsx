import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-[color:var(--text)]">
      {/* Fond : grain + traits très légers */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        {/* Grain */}
        <div className="absolute inset-0 opacity-[0.05] [background-image:radial-gradient(rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:22px_22px]" />
        {/* Washi gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(14,165,233,0.10)_0%,transparent_60%),radial-gradient(40%_40%_at_90%_20%,rgba(244,63,94,0.08)_0%,transparent_60%)]" />
        {/* Trait “encre” très discret */}
        <div className="absolute left-1/2 top-[-160px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[color:var(--text)]/[0.06]
 blur-3xl" />
      </div>

      <Navbar />
      <main className="mx-auto w-full max-w-6xl px-5">{children}</main>
      <Footer />
    </div>
  );
}
