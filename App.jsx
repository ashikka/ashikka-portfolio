import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Instagram } from 'lucide-react';
import './App.css';

const projects = [
  {
    emoji: '⚔️',
    title: 'Model Kombat',
    desc: 'A live cybersecurity agent benchmark pairing frontier models against each other, themed after Mortal Kombat.',
    venue: '🥇 1st place — OpenAI Codex Hackathon (Apr 2026)',
    links: [
      { label: 'GitHub', url: 'https://github.com/Model-Combat/model-combat' },
      { label: 'Twitter', url: 'https://x.com/AshikkaG/status/2045051846285488384?s=20' },
    ],
  },
  {
    emoji: '🃏',
    title: 'openflip',
    desc: 'A personal pocket red-teaming agent — probes LLMs for jailbreaks, prompt injection, and unsafe outputs from your terminal.',
    venue: '🥈 2nd place — Opencode Buildathon (Apr 2026)',
    links: [
      { label: 'Site', url: 'https://openflip.io/' },
      { label: 'GitHub', url: 'https://github.com/ashikka/openflip' },
      { label: 'Twitter', url: 'https://x.com/AshikkaG/status/2046461104524804122?s=20' },
    ],
  },
  {
    emoji: '📰',
    title: 'Ping Newsletter',
    desc: 'AI-powered daily tech news digest on Cloudflare Workers + Llama 3.1. Multi-source ingestion, LLM-as-a-judge ranking, and a chat assistant for content analysis.',
    venue: 'Personal project',
    links: [
      { label: 'Site', url: 'https://pingreads.com' },
      { label: 'Twitter', url: 'https://x.com/AshikkaG/status/2042561868766810158?s=20' },
    ],
  },
  {
    emoji: '🔌',
    title: 'hardware-bench',
    desc: 'A benchmark for hardware-aware code generation — evaluates how well LLMs reason about embedded constraints, datasheets, and low-level interfaces.',
    venue: 'Personal project',
    links: [{ label: 'GitHub', url: 'https://github.com/ashikka/hardware-bench' }],
  },
  {
    emoji: '🔗',
    title: 'Peer Review',
    desc: 'Decentralized academic publishing on Chainlink — off-chain verification of researcher profiles via Google Scholar.',
    venue: '🏆 "First Runner Up" — Netapp Women Innovathon',
    links: [{ label: 'GitHub', url: 'https://github.com/ashikka/peer-review-chainlink' }],
  },
  {
    emoji: '⛳',
    title: 'golf-it',
    desc: 'A code golf platform — show off your code-fu by solving problems in the fewest characters possible.',
    venue: '🏆 Best Project — MLH Orientation Hack',
    links: [
      { label: 'Site', url: 'https://golfit.ashikka.tech' },
      { label: 'GitHub', url: 'https://github.com/ashikka/golf-it' },
    ],
  },
];

const writing = [
  {
    title: 'Building a Benchmark for Product Image Search',
    desc: 'Grading every product in a catalogue against 96 queries, then putting eight models and four retrievers through the same harness to see where one-shot retrieval breaks.',
    date: 'August 2026',
    url: '/blog/fashion-search-benchmark/',
  },
  {
    title: 'Your LLM Judge Is Just One More Model to Test',
    desc: 'Why an off-the-shelf LLM judge needs calibration and tuning like any other model — and how to treat evaluation as a feedback loop.',
    date: 'July 2026',
    url: 'https://blog.rapidflare.ai/blog/llm-judge-untested-model/',
  },
  {
    title: 'A Practical Framework for Evaluating AI Agents',
    desc: 'Building eval cases from assertions, traits, and distractors so you learn not just whether an agent passes, but why and where it breaks.',
    date: 'June 2026',
    url: 'https://blog.rapidflare.ai/blog/designing-eval-cases/',
  },
  {
    title: 'Building LLM Autocomplete for Electronics Agents',
    desc: 'How we shipped fast, accurate inline autocomplete for technical product search at Rapidflare.',
    date: 'March 2026',
    url: 'https://blog.rapidflare.ai/blog/building-llm-autocomplete-for-electronics-agents/',
  },
  {
    title: 'Apple’s Bold Gamble with Apple Vision Pro',
    desc: 'Smart move or risky misstep — a product-strategy dissection of Apple’s entry into spatial computing.',
    date: 'Aug 2023',
    url: 'https://ashikka.medium.com/apples-bold-gamble-with-apple-vision-pro-a-smart-move-or-a-risky-misstep-22-aug-2023-3810287f',
  },
  {
    title: 'Unlocking the Power of LLMs: The Art of Prompt Engineering',
    desc: 'A practical guide to demystifying prompt engineering and the patterns that consistently work.',
    date: 'Apr 2023',
    url: 'https://ashikka.medium.com/unlocking-the-power-of-llms-the-art-of-prompt-engineering-2-april-2023-3810287f',
  },
  {
    title: 'Do a Bug Bounty with me',
    desc: 'A practical walkthrough of finding and validating a real bug bounty issue using mobile app analysis tools.',
    date: 'Jan 2022',
    url: 'https://ashikka.medium.com/oversimplified-bug-bounty-bad5ac87d947?postPublishedType=repub',
  },
  {
    title: 'Monetizing Twitter The Right Way',
    desc: 'A product case study on what Twitter’s pitch missed and what alternatives could actually work.',
    date: 'Jul 2023',
    url: 'https://ashikka.medium.com/product-case-study-monetizing-twitter-the-right-way-4-july-2023-e6308007204b',
  },
  {
    title: 'Elevating Social Features on Spotify',
    desc: 'A case study on how Spotify could drive reach and retention with new social-listening features.',
    date: 'Jun 2023',
    url: 'https://ashikka.medium.com/product-case-study-elevating-social-features-on-spotify-13-june-2023-3810287f',
  },
];

const reels = [
  'https://www.instagram.com/reel/DVXsCRAETHj/',
  'https://www.instagram.com/reel/DV0LMYYkdyT/',
  'https://www.instagram.com/reel/DWVjjYvEVdZ/',
];

const talks = [
  {
    title: 'How We Got Into A Unicorn’s Private Codebase',
    desc: 'A conference talk with Arshit Jain on a security research finding — how a misconfiguration exposed a unicorn startup’s private repo.',
    venue: 'YouTube',
    url: 'https://www.youtube.com/watch?v=-r5PEEKaoTs',
  },
];

const community = [
  {
    emoji: '🚀',
    title: 'devspace — VIT’s flagship hackathon',
    desc: 'Helped organize devspace as Vice President of CSI VIT — 3,000+ participants, brought on sponsors like GoComet, Experion, symbal.ai, ran the full ops from logistics to judging.',
    links: [{ label: 'Devpost', url: 'https://devspace-2022.devpost.com/' }],
  },
  {
    emoji: '🚩',
    title: 'csictf — global CTF',
    desc: 'Ran the infrastructure for csictf, one of the largest student-run CTFs — 1,700+ teams worldwide.',
    links: [{ label: 'CTFtime', url: 'https://ctftime.org/event/1081' }],
  },
  {
    emoji: '🛠️',
    title: 'Internal hackathon at Motorq',
    desc: 'Organized Motorq’s internal hackathon — set the theme, ran logistics, coordinated judging across teams.',
    links: [{ label: 'LinkedIn', url: 'https://www.linkedin.com/posts/ashikka-gupta_gratitude-newbeginnings-productmanagement-ugcPost-7270019754461933568-URAE' }],
  },
  {
    emoji: '🎤',
    title: 'Workshops & talks',
    desc: 'Hosted regular tech workshops at CSI VIT and spoke at a few hackathons on building, security research, and LLMs.',
  },
  {
    emoji: '💡',
    title: 'Women in Tech - Bangalore Chapter / GrowthX',
    desc: 'Active member — workshops, mentorship, and community-building for women in tech across India.',
  },
];

const achievements = [
  { date: 'Apr 2026', emoji: '🥇', text: '1st place — OpenAI Codex Hackathon (3,000 applicants, top 100 builders). Built Model Kombat.' },
  { date: 'Apr 2026', emoji: '🥈', text: '2nd place — Opencode Buildathon India (5000 applicants, top 100 builders). Built openflip.' },
  { date: 'Dec 2025', emoji: '📜', text: 'Filed 2 provisional patents under Rapidflare.' },
  { date: 'May 2023', emoji: '🏆', text: 'Chainlink Spring 2023 Hackathon — "Top Quality Projects" (14,000+ registrants, 498 projects).' },
  { date: 'Oct 2022', emoji: '🥇', text: '1st place — BugeDex Bug Bounty Competition.' },
  { date: 'Jun 2022', emoji: '🥈', text: 'NetApp Women Innovathon — 1st Runner Up (3,500 applicants, 900 teams). ₹1.5L cash prize.' },
  { date: 'Jul 2022', emoji: '🎓', text: 'Mitacs Globalink Research — 1 of 283 from 30,000 applicants globally (<1%) for IoT research at UBC Vancouver.' },
  { date: '2020', emoji: '🏆', text: 'Best Project — MLH Orientation Hack. Built golf-it.' },
];

const navItems = [
  { id: 'projects', label: 'Projects' },
  { id: 'writing', label: 'Writing' },
  { id: 'talks', label: 'Talks' },
  { id: 'community', label: 'Community' },
];

function pickY() {
  const yMin = 80;
  const yMax = Math.max(yMin + 100, (typeof window !== 'undefined' ? window.innerHeight : 800) - 100);
  return yMin + Math.random() * (yMax - yMin);
}

function Wanderer() {
  const x = useMotionValue(-80);
  const [yPos, setYPos] = useState(pickY);
  const [hovered, setHovered] = useState(false);
  const [started, setStarted] = useState(false);
  const closeTimer = useRef(null);
  const openCard = () => {
    if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null; }
    setHovered(true);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setHovered(false), 150);
  };
  const ctrlRef = useRef(null);
  const offTimerRef = useRef(null);
  const traverseRef = useRef(null);
  const pausedRef = useRef(false);
  const pendingRef = useRef(false);

  useEffect(() => () => closeTimer.current && clearTimeout(closeTimer.current), []);

  // initial delay before the wanderer starts drifting
  useEffect(() => {
    const delay = 3500 + Math.random() * 2500;
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!started) return undefined;
    let cancelled = false;

    const traverse = () => {
      if (cancelled) return;
      if (pausedRef.current) { pendingRef.current = true; return; }
      setYPos(pickY());
      const goingRight = Math.random() > 0.5;
      const offLeft = -80;
      const offRight = window.innerWidth + 80;
      const from = goingRight ? offLeft : offRight;
      const to = goingRight ? offRight : offLeft;
      const speed = 70;
      x.set(from);
      const c = animate(x, to, {
        duration: Math.abs(to - from) / speed,
        ease: 'linear',
        onComplete: () => {
          if (cancelled) return;
          if (pausedRef.current) { pendingRef.current = true; return; }
          offTimerRef.current = setTimeout(traverse, 1500 + Math.random() * 2500);
        },
      });
      ctrlRef.current = c;
    };
    traverseRef.current = traverse;
    traverse();

    return () => {
      cancelled = true;
      if (ctrlRef.current && typeof ctrlRef.current.stop === 'function') ctrlRef.current.stop();
      if (offTimerRef.current) clearTimeout(offTimerRef.current);
    };
  }, [started, x]);

  // pause on hover, resume on un-hover
  useEffect(() => {
    if (hovered) {
      pausedRef.current = true;
      if (ctrlRef.current && typeof ctrlRef.current.pause === 'function') {
        ctrlRef.current.pause();
      }
      if (offTimerRef.current) {
        clearTimeout(offTimerRef.current);
        offTimerRef.current = null;
        pendingRef.current = true;
      }
    } else {
      pausedRef.current = false;
      if (ctrlRef.current && typeof ctrlRef.current.play === 'function') {
        ctrlRef.current.play();
      }
      if (pendingRef.current) {
        pendingRef.current = false;
        if (traverseRef.current) traverseRef.current();
      }
    }
  }, [hovered]);

  return (
    <motion.div
      className="wanderer"
      style={{ x, y: yPos }}
    >
      <button
        type="button"
        className="wanderer-btn"
        aria-label="About the cherry blossom"
        onMouseEnter={openCard}
        onMouseLeave={scheduleClose}
        onFocus={openCard}
        onBlur={scheduleClose}
      >
        🌸
      </button>
      {hovered && (
        <div
          className="wanderer-card"
          onMouseEnter={openCard}
          onMouseLeave={scheduleClose}
        >
          <p className="wanderer-name">Sakura</p>
          <p className="wanderer-desc">A symbol of impermanence — beautiful, brief, and worth showing up for.</p>
          <a href="https://en.wikipedia.org/wiki/Cherry_blossom" target="_blank" rel="noopener noreferrer">
            Wikipedia ↗
          </a>
        </div>
      )}
    </motion.div>
  );
}

function ReelEmbed({ url }) {
  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={`${url.replace(/\/$/, '')}/?utm_source=ig_embed&utm_campaign=loading`}
      data-instgrm-version="14"
      style={{
        background: '#FFF',
        border: 0,
        borderRadius: '3px',
        boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
        margin: '1px',
        maxWidth: '540px',
        minWidth: '326px',
        padding: 0,
        width: 'calc(100% - 2px)',
      }}
    />
  );
}

function App() {
  const [showAllWriting, setShowAllWriting] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const visibleWriting = showAllWriting ? writing : writing.slice(0, 3);
  const visibleProjects = showAllProjects ? projects : projects.slice(0, 3);

  useEffect(() => {
    const reprocess = () => window.instgrm && window.instgrm.Embeds.process();

    // IG's per-embed fetch is flaky; if one blockquote isn't converted to an
    // iframe, retry process() a few times until they all are.
    const allProcessed = () => {
      const blocks = document.querySelectorAll('blockquote.instagram-media');
      if (blocks.length === 0) return false;
      return Array.from(blocks).every((b) => b.querySelector('iframe'));
    };

    let cancelled = false;
    const delays = [0, 500, 1500, 3000, 6000];
    const tick = (i) => {
      if (cancelled) return;
      reprocess();
      if (allProcessed() || i >= delays.length - 1) return;
      setTimeout(() => tick(i + 1), delays[i + 1]);
    };

    if (document.querySelector('script[src="https://www.instagram.com/embed.js"]')) {
      tick(0);
    } else {
      const s = document.createElement('script');
      s.src = 'https://www.instagram.com/embed.js';
      s.async = true;
      s.onload = () => tick(0);
      document.body.appendChild(s);
    }

    return () => { cancelled = true; };
  }, []);

  return (
    <div className="page">
      <Wanderer />

      <nav className="topnav">
        {navItems.map((n) => (
          <a key={n.id} href={`#${n.id}`}>{n.label}</a>
        ))}
      </nav>

      <main className="container">
        <header className="hero">
          <img className="avatar" src="/avatar.jpg" alt="Ashikka Gupta" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
          <h1>Hi, I'm Ashikka</h1>
          <p className="tagline">Founding Engineer @ Rapidflare · ex-PM @ Motorq</p>
          <p className="bio">
            At <a href="https://rapidflare.ai" target="_blank" rel="noopener noreferrer">Rapidflare</a>, I’m a founding engineer
            building AI agents and the eval infrastructure that keeps them reliable. Previously at Motorq, I was
            the youngest PM in company history, where I launched fleet analytics products.
            (yes, I am a product manager turned engineer)
          </p>
          <div className="socials">
            <a href="mailto:ashikagupta28@gmail.com" aria-label="Email"><Mail size={18} strokeWidth={1.75} /></a>
            <a href="https://github.com/ashikka" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={18} strokeWidth={1.75} /></a>
            <a href="https://linkedin.com/in/ashikka-gupta" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={18} strokeWidth={1.75} /></a>
            <a href="https://www.instagram.com/ashikka.talks/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={18} strokeWidth={1.75} /></a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><Twitter size={18} strokeWidth={1.75} /></a>
          </div>
        </header>

        <section id="projects">
          <h2>Projects</h2>
          <div className="cards">
            {visibleProjects.map((p) => (
              <article className="card" key={p.title}>
                <div className="card-icon"><span>{p.emoji}</span></div>
                <div className="card-body">
                  <h3>{p.title}</h3>
                  <p className="card-desc">{p.desc}</p>
                  <p className="card-venue">{p.venue}</p>
                  {p.links.length > 0 && (
                    <div className="card-links">
                      {p.links.map((l) => (
                        <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" className="pill">
                          {l.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
          {projects.length > 3 && (
            <div className="view-more-wrap">
              <button className="view-more" onClick={() => setShowAllProjects((v) => !v)}>
                {showAllProjects ? 'Show Less' : 'View More'}
              </button>
            </div>
          )}
        </section>

        <section id="writing">
          <h2>Writing</h2>
          <ul className="entry-list">
            {visibleWriting.map((w) => (
              <li key={w.url}>
                <a
                  href={w.url}
                  {...(w.url.startsWith('/')
                    ? {}
                    : { target: '_blank', rel: 'noopener noreferrer' })}
                  className="entry-title"
                >
                  {w.title}
                </a>
                {w.desc && <p className="entry-desc">{w.desc}</p>}
                <p className="entry-date">{w.date}</p>
              </li>
            ))}
          </ul>
          {writing.length > 3 && (
            <div className="view-more-wrap">
              <button className="view-more" onClick={() => setShowAllWriting((v) => !v)}>
                {showAllWriting ? 'Show Less' : 'View More'}
              </button>
            </div>
          )}
        </section>

        <section id="talks">
          <h2>Talks &amp; Conferences</h2>

          <h3 className="subhead">Short-form on tech</h3>
          <p className="section-note">
            I post bite-sized videos breaking down AI, building, and startup life — usually whatever
            I’m nerding out about that week. Full feed on{' '}
            <a href="https://www.instagram.com/ashikka.talks/" target="_blank" rel="noopener noreferrer">@ashikka.talks</a>.
          </p>
          <div className="reel-grid">
            {reels.map((url) => (
              <ReelEmbed key={url} url={url} />
            ))}
          </div>
          <h3 className="subhead" style={{ marginTop: '2.5rem' }}>Talks &amp; conferences</h3>
          <p className="section-note">
            I have given some talks on security research and building with LLMs. More to come.
          </p>
          <div className="yt-grid">
            <div className="yt-frame">
              <iframe
                src="https://www.youtube.com/embed/-r5PEEKaoTs"
                title="How We Got Into A Unicorn’s Private Codebase"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <figure className="yt-frame yt-photo">
              <img src="/amd-malaysia.jpg" alt="Representing Rapidflare at AMD conference, Malaysia" />
              <figcaption>Representing Rapidflare at AMD’s conference in Malaysia — showcasing our AI agents to enterprise customers.</figcaption>
            </figure>
          </div>
        </section>

        <section id="community">
          <h2 style={{ marginTop: '3rem' }}>Achievements</h2>
          <ul className="ach-list">
            {achievements.map((a, i) => (
              <li key={i}>
                <span className="ach-emoji">{a.emoji}</span>
                <span className="ach-text">{a.text}</span>
                <span className="ach-date">{a.date}</span>
              </li>
            ))}
          </ul>
        </section>
        <section>

          <h2>Community & Events</h2>
          <div className="cards">
            {community.map((c) => (
              <article className="card" key={c.title}>
                <div className="card-icon"><span>{c.emoji}</span></div>
                <div className="card-body">
                  <h3>{c.title}</h3>
                  <p className="card-desc">{c.desc}</p>
                  {c.links && c.links.length > 0 && (
                    <div className="card-links">
                      {c.links.map((l) => (
                        <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" className="pill">
                          {l.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <footer>
          <p>© 2026 Ashikka Gupta</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
