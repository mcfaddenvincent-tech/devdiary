import Link from "next/link";

const features = [
  {
    label: "Track progress",
    description:
      "Log what you built, what you learned, and what's blocking you — every session.",
  },
  {
    label: "Share publicly",
    description:
      "Every project gets a public URL. Let the world follow your journey as you ship.",
  },
  {
    label: "Build in the open",
    description:
      "The best way to learn is to document. Prove your work. Own your process.",
  },
];

const exampleEntry = {
  project: "devdiary.so",
  slug: "week-1-foundation",
  date: "Mar 26, 2026",
  title: "Week 1 — Foundation",
  built: "Scaffolded Next.js, connected Supabase, deployed to Vercel.",
  learned: "Vercel auto-deploys on every push. Environment variables live in the dashboard.",
  blockers: "Need to replace the default landing page.",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a] text-[#ededed]">
      {/* Navbar */}
      <nav className="border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <span className="font-mono text-sm tracking-widest text-[#c8f04a] uppercase">
          DevDiary
        </span>
        <div className="flex items-center gap-6">
          <Link
            href="/login"
            className="font-mono text-sm text-[#a1a1aa] hover:text-[#ededed] transition-colors"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="font-mono text-sm bg-[#c8f04a] text-[#0a0a0a] px-4 py-1.5 hover:bg-[#d4f76b] transition-colors"
          >
            Sign up
          </Link>
        </div>
      </nav>

      <main className="flex flex-col flex-1">
        {/* Hero */}
        <section className="px-6 py-24 max-w-4xl mx-auto w-full">
          <p className="font-mono text-xs tracking-widest text-[#c8f04a] uppercase mb-6">
            Build in public
          </p>
          <h1 className="font-[family-name:var(--font-instrument-serif)] text-5xl sm:text-7xl leading-tight text-[#ededed] mb-6">
            Document your build.
            <br />
            Ship in public.
          </h1>
          <p className="font-sans text-lg text-[#a1a1aa] max-w-xl mb-10 leading-relaxed">
            DevDiary is a structured journaling platform for developers.
            Document what you build, what you learn, and what's blocking
            you — then share it with the world.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 bg-[#c8f04a] text-[#0a0a0a] font-mono text-sm px-6 py-3 hover:bg-[#d4f76b] transition-colors"
          >
            Start your diary →
          </Link>
        </section>

        {/* Feature cards */}
        <section className="px-6 pb-24 max-w-4xl mx-auto w-full">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px border border-white/10 bg-white/10">
            {features.map((f) => (
              <div key={f.label} className="bg-[#0a0a0a] p-8">
                <p className="font-mono text-xs tracking-widest text-[#c8f04a] uppercase mb-3">
                  {f.label}
                </p>
                <p className="text-sm text-[#a1a1aa] leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Example entry preview */}
        <section className="px-6 pb-32 max-w-4xl mx-auto w-full">
          <p className="font-mono text-xs tracking-widest text-[#a1a1aa] uppercase mb-6">
            Example entry
          </p>
          <div className="border border-white/10 p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-[#c8f04a]">
                  {exampleEntry.project}
                </span>
                <span className="text-white/20">/</span>
                <span className="font-mono text-xs text-[#a1a1aa]">
                  {exampleEntry.slug}
                </span>
              </div>
              <span className="font-mono text-xs text-[#3f3f3f]">
                {exampleEntry.date}
              </span>
            </div>
            <h3 className="font-[family-name:var(--font-instrument-serif)] text-2xl text-[#ededed] mb-6">
              {exampleEntry.title}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <p className="font-mono text-xs tracking-widest text-[#c8f04a] uppercase mb-2">
                  What I built
                </p>
                <p className="text-sm text-[#a1a1aa] leading-relaxed">
                  {exampleEntry.built}
                </p>
              </div>
              <div>
                <p className="font-mono text-xs tracking-widest text-[#c8f04a] uppercase mb-2">
                  What I learned
                </p>
                <p className="text-sm text-[#a1a1aa] leading-relaxed">
                  {exampleEntry.learned}
                </p>
              </div>
              <div>
                <p className="font-mono text-xs tracking-widest text-[#c8f04a] uppercase mb-2">
                  Blockers
                </p>
                <p className="text-sm text-[#a1a1aa] leading-relaxed">
                  {exampleEntry.blockers}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-6 flex items-center justify-between">
        <span className="font-mono text-xs text-[#3f3f3f]">
          DevDiary.so
        </span>
        <span className="font-mono text-xs text-[#3f3f3f]">
          Build in public.
        </span>
      </footer>
    </div>
  );
}
