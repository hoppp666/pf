import { useEffect, useState } from "react";

const HERO_VIDEOS = [
  "https://github.com/hoppp666/2/raw/refs/heads/main/0bfd786d6badb0cd2d73cfb50dd221e2bb3b6879.mp4",
  "https://github.com/hoppp666/2/raw/refs/heads/main/2b5f1dce15d7be820a22bef3ed82a67023874f4b.mp4?raw=1",
  "https://github.com/hoppp666/2/raw/refs/heads/main/31e7b5c8488be2f3e62e71d4119b5815b7c7566e.mp4?raw=1",
  "https://github.com/hoppp666/2/raw/refs/heads/main/6499564d014a61a05732e9c406339647d56bbff4.mp4?raw=1",
  "https://github.com/hoppp666/2/raw/refs/heads/main/67d46779fce4c2efb95ab1f005119c50019eca54.mp4?raw=1",
];

const SOCIAL_IMAGES = [
  "https://github.com/hoppp666/2/raw/refs/heads/main/01-10.webp",
  "https://github.com/hoppp666/2/raw/refs/heads/main/01-2.webp",
  "https://github.com/hoppp666/2/raw/refs/heads/main/01-3.webp",
  "https://github.com/hoppp666/2/raw/refs/heads/main/01-4.webp",
  "https://github.com/hoppp666/2/raw/refs/heads/main/01-5.webp",
  "https://github.com/hoppp666/2/raw/refs/heads/main/01-6.webp",
  "https://github.com/hoppp666/2/raw/refs/heads/main/01-7.webp",
  "https://github.com/hoppp666/2/raw/refs/heads/main/01-8.webp",
];

const GRAPHIC_IMAGES = [
  "https://github.com/hoppp666/2/raw/refs/heads/main/0620.webp",
  "https://github.com/hoppp666/2/raw/refs/heads/main/0619.webp",
  "https://github.com/hoppp666/2/raw/refs/heads/main/0618.webp",
  "https://github.com/hoppp666/2/raw/refs/heads/main/0617.webp",
  "https://github.com/hoppp666/2/raw/refs/heads/main/06-18.webp",
  "https://github.com/hoppp666/2/raw/refs/heads/main/06-16.webp",
  "https://github.com/hoppp666/2/raw/refs/heads/main/06-15.webp",
  "https://github.com/hoppp666/2/raw/refs/heads/main/05-14.webp",
  "https://github.com/hoppp666/2/raw/refs/heads/main/04.webp",
  "https://github.com/hoppp666/2/raw/refs/heads/main/04-9.webp",
  "https://github.com/hoppp666/2/raw/refs/heads/main/04-8.webp",
  "https://github.com/hoppp666/2/raw/refs/heads/main/04-7.webp",
  "https://github.com/hoppp666/2/raw/refs/heads/main/04-6.webp",
  "https://github.com/hoppp666/2/raw/refs/heads/main/04-5.webp",
  "https://github.com/hoppp666/2/raw/refs/heads/main/04-4.webp",
  "https://github.com/hoppp666/2/raw/refs/heads/main/04-3.webp",
  "https://github.com/hoppp666/2/raw/refs/heads/main/04-2.webp",
  "https://github.com/hoppp666/2/raw/refs/heads/main/04-13.webp",
  "https://github.com/hoppp666/2/raw/refs/heads/main/04-12.webp",
  "https://github.com/hoppp666/2/raw/refs/heads/main/04-11.webp",
  "https://github.com/hoppp666/2/raw/refs/heads/main/04-10.webp",
  "https://github.com/hoppp666/2/raw/refs/heads/main/03.webp",
];

const QR_CODE =
  "https://github.com/hoppp666/2/raw/refs/heads/main/qrcode_t.me.png";

function useGsapReveal() {
  useEffect(() => {
    const gsapGlobal = (window as any).gsap;
    if (!gsapGlobal || !gsapGlobal.utils?.toArray) return;

    const elements = gsapGlobal.utils.toArray("[data-reveal]") as HTMLElement[];

    elements.forEach((el: HTMLElement, index: number) => {
      gsapGlobal.fromTo(
        el,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          delay: index * 0.08,
          ease: "power3.out",
        }
      );
    });
  }, []);
}

function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8"
      data-reveal
    >
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-[2.75rem] bg-gradient-to-b from-white/6 via-sky-500/5 to-transparent opacity-80 ring-1 ring-white/5 backdrop-blur-3xl" />
      <div className="relative rounded-[2.5rem] border border-white/10 bg-slate-950/60 p-8 shadow-[0_40px_120px_rgba(15,23,42,0.85)] sm:p-10 lg:p-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-4 max-w-xl">
            <p className="inline-flex items-center rounded-full bg-sky-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-sky-200/80 ring-1 ring-inset ring-sky-400/40">
              {eyebrow}
            </p>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            {description ? (
              <p className="max-w-2xl text-sm text-slate-300/80 sm:text-base">
                {description}
              </p>
            ) : null}
          </div>
        </div>
        <div className="mt-10 lg:mt-12">{children}</div>
      </div>
    </section>
  );
}

function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_VIDEOS.length);
    }, 9000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-[90vh] max-w-6xl flex-col px-4 pb-20 pt-28 sm:px-6 lg:flex-row lg:items-center lg:gap-12 lg:px-8"
      data-reveal
    >
      <div className="pointer-events-none absolute -inset-x-40 -top-32 -z-20 h-[420px] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.6),transparent_60%),radial-gradient(circle_at_10%_80%,rgba(59,130,246,0.55),transparent_55%),radial-gradient(circle_at_90%_20%,rgba(14,165,233,0.6),transparent_55%)] opacity-90" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950" />

      <div className="relative z-10 max-w-xl space-y-8">
        <p className="inline-flex items-center gap-2 rounded-full bg-sky-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-sky-200/90 ring-1 ring-inset ring-sky-500/60">
          Graphic & Motion Designer
          <span className="h-1 w-1 rounded-full bg-sky-300" />
          Available for projects
        </p>
        <div className="space-y-4">
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Visuals that
            <span className="bg-gradient-to-r from-sky-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
              {" "}
              sell & hook attention
            </span>
          </h1>
          <p className="text-pretty text-sm text-slate-300/90 sm:text-base">
            Hi, I’m Dmitry — a graphic designer crafting bold visuals for brands,
            creators and products. Motion, social media, AI-powered concepts and
            clean branding that feels premium and "scroll-stopping".
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2 rounded-2xl border border-sky-400/40 bg-sky-400/5 p-4 text-sm text-slate-100 shadow-[0_18px_60px_rgba(8,47,73,0.9)]">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-200/80">
              Core directions
            </p>
            <ul className="space-y-1.5 text-xs text-slate-100/90 sm:text-[13px]">
              <li>• Product cards for marketplaces with motion accents</li>
              <li>• Full social media suites (YouTube, VK & more)</li>
              <li>• Ad banners, thumbnails & promo key visuals</li>
              <li>• AI-driven imagery & concept art</li>
            </ul>
          </div>
          <div className="space-y-2 rounded-2xl border border-indigo-400/40 bg-indigo-400/5 p-4 text-sm text-slate-100 shadow-[0_18px_60px_rgba(30,64,175,0.9)]">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-100/80">
              Plus
            </p>
            <ul className="space-y-1.5 text-xs text-slate-100/90 sm:text-[13px]">
              <li>• Logos, avatars, business cards & certificates</li>
              <li>• Custom illustrations & editorial graphics</li>
              <li>• Video editing: intros, motion reveals, loops</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-5">
          <a
            href="https://t.me/vetrovdigital"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-400 via-cyan-400 to-indigo-400 px-7 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_60px_rgba(56,189,248,0.75)] transition hover:translate-y-0.5 hover:shadow-[0_22px_80px_rgba(59,130,246,0.9)]"
          >
            Let’s discuss your project
            <span className="text-base">↗</span>
          </a>
          <div className="flex items-center gap-3 text-xs text-slate-300/80">
            <div className="h-7 w-7 animate-pulse rounded-full bg-emerald-400/80 shadow-[0_0_28px_rgba(52,211,153,0.9)]" />
            <p>
              Average delivery 24–72 hours
              <span className="hidden sm:inline"> · Concept → final assets</span>
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-12 w-full max-w-xl shrink-0 lg:mt-0 lg:max-w-[460px]">
        <div className="pointer-events-none absolute -inset-10 -z-10 rounded-[2.5rem] border border-sky-500/40 bg-gradient-to-tr from-sky-500/35 via-cyan-400/20 to-indigo-500/40 opacity-80 blur-3xl" />

        <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-slate-900/80 p-3 shadow-[0_30px_110px_rgba(15,23,42,1)]">
          <div className="flex items-center justify-between rounded-2xl bg-slate-900/95 px-4 py-3">
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-500/10 text-sky-300">
                ▶
              </span>
              <div>
                <p className="font-medium text-slate-50">Highlight reel</p>
                <p className="text-[11px] text-slate-400">Real client projects · no stock</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              {HERO_VIDEOS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Show video ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    activeIndex === idx
                      ? "w-5 bg-sky-300"
                      : "w-1.5 bg-slate-600 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="mt-3 grid gap-3 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
            <div className="relative overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/90">
              <video
                key={HERO_VIDEOS[activeIndex]}
                src={HERO_VIDEOS[activeIndex]}
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            </div>
            <div className="flex flex-col gap-3">
              <div className="relative flex-1 overflow-hidden rounded-2xl border border-sky-500/40 bg-gradient-to-br from-sky-500/15 via-sky-400/5 to-slate-900/95 p-4 text-xs text-sky-50">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-200/80">
                  Scan to chat
                </p>
                <p className="mt-1 text-xs text-sky-50/90">
                  Point your camera at the QR to jump straight into Telegram and
                  drop a brief or references.
                </p>
                <img
                  src={QR_CODE}
                  alt="Telegram QR code"
                  className="pointer-events-none absolute bottom-2 right-2 h-20 w-20 rounded-xl bg-slate-950/60 p-2 shadow-[0_18px_50px_rgba(8,47,73,0.9)]"
                  loading="lazy"
                />
              </div>
              <div className="grid grid-cols-3 gap-2 text-[11px] text-slate-200/80">
                <div className="rounded-xl border border-slate-700/60 bg-slate-900/90 px-3 py-2">
                  <p className="text-[10px] font-semibold text-slate-400">
                    Expertise
                  </p>
                  <p>Graphics · Motion · AI</p>
                </div>
                <div className="rounded-xl border border-slate-700/60 bg-slate-900/90 px-3 py-2">
                  <p className="text-[10px] font-semibold text-slate-400">
                    Platforms
                  </p>
                  <p>Marketplaces, YouTube, VK, Ads</p>
                </div>
                <div className="rounded-xl border border-slate-700/60 bg-slate-900/90 px-3 py-2">
                  <p className="text-[10px] font-semibold text-slate-400">
                    Focus
                  </p>
                  <p>Conversion & storytelling</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GallerySection({
  id,
  eyebrow,
  title,
  description,
  images,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  images: string[];
}) {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <SectionShell id={id} eyebrow={eyebrow} title={title} description={description}>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((src, idx) => (
          <button
            key={src}
            type="button"
            onClick={() => setActiveImage(src)}
            className="group relative overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/80 shadow-[0_20px_70px_rgba(15,23,42,0.9)] transition hover:-translate-y-1 hover:border-sky-400/70 hover:shadow-[0_30px_90px_rgba(56,189,248,0.65)]"
          >
            <div className="aspect-[4/5] w-full overflow-hidden bg-slate-900">
              <img
                src={src}
                alt="Social media design preview by Dmitry"
                className="h-full w-full transform object-cover transition duration-700 group-hover:scale-105 group-hover:brightness-110"
                loading="lazy"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between px-3 pb-3 text-[11px] text-slate-200/90">
              <span className="rounded-full bg-slate-950/70 px-2 py-1 text-[10px] font-medium text-sky-200/90 ring-1 ring-sky-500/40">
                {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
              </span>
              <span className="flex items-center gap-1 rounded-full bg-slate-950/70 px-2 py-1 text-[10px] text-slate-200">
                View full
                <span className="text-xs">↗</span>
              </span>
            </div>
          </button>
        ))}
      </div>

      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 px-4 py-8 backdrop-blur"
          onClick={() => setActiveImage(null)}
        >
          <button
            type="button"
            className="absolute right-5 top-5 rounded-full bg-slate-900/90 px-3 py-1 text-xs text-slate-200 shadow-lg ring-1 ring-slate-600/80"
            onClick={() => setActiveImage(null)}
          >
            Close
          </button>
          <div
            className="max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-700/80 bg-slate-950/90 p-3 shadow-[0_40px_120px_rgba(0,0,0,1)]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeImage}
              alt="Full-size preview"
              className="max-h-[80vh] w-full object-contain"
            />
          </div>
        </div>
      )}
    </SectionShell>
  );
}

function AboutProcessSection() {
  const items = [
    {
      title: "Discovery & moodboard",
      body: "Quick call or chat, style references, competitors and key goals. I assemble a moodboard and visual direction that feels on-brand.",
    },
    {
      title: "Concepts & motion tests",
      body: "Several concepts with different storytelling angles: clean, bold, cinematic. Motion tests for hooks and transitions where needed.",
    },
    {
      title: "Polish & exports",
      body: "Pixel-perfect typography, hierarchy tuned for conversion and readability. Final exports for every platform and format you need.",
    },
  ];

  return (
    <SectionShell
      id="workflow"
      eyebrow="How we work together"
      title="From idea to scroll-stopping creative"
      description="A compact process built for speed: you get strong visuals without endless calls and revisions. Clear structure, deadlines and deliverables for every project."
    >
      <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div className="space-y-4">
          {items.map((item, idx) => (
            <div
              key={item.title}
              className="relative overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/90 p-5 text-sm text-slate-200/90 shadow-[0_22px_80px_rgba(15,23,42,0.95)]"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-sky-500/10 via-transparent to-indigo-500/0" />
              <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                Step {idx + 1}
              </p>
              <h3 className="text-base font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-1 text-xs text-slate-300/90 sm:text-[13px]">
                {item.body}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-between gap-6 rounded-2xl border border-sky-500/40 bg-gradient-to-br from-sky-500/20 via-sky-500/5 to-slate-950/90 p-6 text-sm text-slate-50 shadow-[0_26px_100px_rgba(56,189,248,0.7)]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-sky-100/80">
              What I do in detail
            </p>
            <h3 className="mt-2 text-lg font-semibold">
              Graphic design that blends performance & aesthetics
            </h3>
            <ul className="mt-3 space-y-1.5 text-xs text-sky-50/95 sm:text-[13px]">
              <li>• Product cards that make your marketplace listings feel premium and dynamic.</li>
              <li>• Full packs for social media: covers, thumbnails, feed systems and highlight visuals.</li>
              <li>• Campaign banners, previews and ad creatives optimized for clicks and retention.</li>
              <li>• Neural network (AI) workflows to speed up concepting without losing uniqueness.</li>
              <li>• Logos, avatars, business cards, certificates and illustration sets.</li>
              <li>• Video editing: intros, animated logos, overlays, seamless loops.</li>
            </ul>
          </div>
          <a
            href="https://t.me/vetrovdigital"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-between gap-3 rounded-2xl bg-slate-950/80 px-4 py-3 text-xs text-sky-100 ring-1 ring-sky-400/60 transition hover:bg-slate-950"
          >
            <span>
              Share your brief in Telegram
              <span className="block text-[11px] text-sky-200/80">
                Send products, niche and deadlines — I’ll suggest 2–3 visual routes.
              </span>
            </span>
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-400 text-slate-950 shadow-[0_0_20px_rgba(56,189,248,0.9)]">
              ↗
            </span>
          </a>
        </div>
      </div>
    </SectionShell>
  );
}

function FooterSection() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/95">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 py-10 text-center sm:flex-row sm:px-6 lg:px-8">
        <div className="space-y-1 text-sm text-slate-300/90">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
            Let’s talk
          </p>
          <h2 className="text-lg font-semibold text-white sm:text-xl">
            Обсудим ваш проект? / Ready to discuss your project?
          </h2>
          <p className="text-xs text-slate-400">
            Send a message with links and goals — I’ll answer with ideas, timing
            and cost.
          </p>
        </div>
        <a
          href="https://t.me/vetrovdigital"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-400 via-cyan-400 to-indigo-400 px-8 py-3 text-sm font-semibold text-slate-950 shadow-[0_22px_80px_rgba(56,189,248,0.85)] transition hover:translate-y-0.5 hover:shadow-[0_26px_110px_rgba(59,130,246,0.9)]"
        >
          Discuss on Telegram
          <span className="text-base">↗</span>
        </a>
      </div>
    </footer>
  );
}

export function App() {
  useGsapReveal();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 via-cyan-400 to-indigo-400 shadow-[0_0_25px_rgba(56,189,248,0.9)]">
              <span className="text-sm font-semibold text-slate-950">D</span>
            </div>
            <div className="leading-tight">
              <p className="text-xs font-semibold text-slate-100">
                Dmitry
              </p>
              <p className="text-[11px] text-slate-400">Graphic & Motion Designer</p>
            </div>
          </div>
          <nav className="hidden items-center gap-5 text-[11px] text-slate-300 sm:flex">
            <a href="#top" className="hover:text-sky-200">
              Reel
            </a>
            <a href="#social" className="hover:text-sky-200">
              Social Media
            </a>
            <a href="#graphics" className="hover:text-sky-200">
              Graphics
            </a>
            <a href="#workflow" className="hover:text-sky-200">
              Workflow
            </a>
          </nav>
          <a
            href="https://t.me/vetrovdigital"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-slate-900/80 px-3 py-1.5 text-[11px] font-medium text-sky-100 ring-1 ring-sky-500/60 transition hover:bg-slate-900"
          >
            Telegram ↗
          </a>
        </div>
      </header>

      <main className="pt-16 pb-16">
        <HeroSection />
        <GallerySection
          id="social"
          eyebrow="Social platforms & channels"
          title="Social media designs that push viewers to click"
          description="YouTube covers, VK communities and other social formats built to stand out in feeds. Consistent systems of covers, avatars and promo blocks so your brand feels like a single story everywhere."
          images={SOCIAL_IMAGES}
        />
        <GallerySection
          id="graphics"
          eyebrow="Brand & promo visuals"
          title="Graphic systems for products, launches and brands"
          description="Promo graphics, hero images, illustrations and concept art for launches, sales and content. Blue-gradient, tech, bold or minimal — the style adapts to your story, not the other way around."
          images={GRAPHIC_IMAGES}
        />
        <AboutProcessSection />
      </main>

      <FooterSection />
    </div>
  );
}
