import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Mail, ExternalLink, FileText } from "lucide-react"

// ─────────────────────────────────────────────────────────────────────────────
//  SITE DATA
//  Edit these arrays to add/update content. Each section pulls from its list.
// ─────────────────────────────────────────────────────────────────────────────

type Project = {
  title: string
  description: string
  tags: string[]
  href?: string
  note?: string
}

const projectCategories: { category: string; projects: Project[] }[] = [
  {
    category: "Drones / UAV",
    projects: [
      {
        title: "Skyrunners — Autonomy & Navigation Lead",
        description:
          "Building Visual-SLAM, autonomous navigation, and flight systems for Stanford Robotics Center's campus food delivery drone.",
        tags: ["ROS2", "Isaac SLAM", "Jetson Orin", "ArduPilot", "Visual-SLAM"],
        href: "/projects/skyrunners",
      },
      {
        title: "Stanford Multi-Robot Systems Lab",
        description:
          "Researching Gaussian Splatting for scene reconstruction to train RL policies for autonomous UAVs, plus world models for augmenting drone training data.",
        tags: ["Gaussian Splatting", "RL", "World Models", "UAV"],
        href: "/projects/multi-robot-systems-lab",
      },
      // Add more drone/UAV projects here ↓
    ],
  },
  {
    category: "Medical",
    projects: [
      {
        title: "Edwards Lifesciences — AI/ML Engineer",
        description:
          "ML pipeline for heart condition prediction, Amazon Bedrock medical coding app ($1M+ annual savings), and PubMedBERT RAG semantic search — all in production across enterprise business units.",
        tags: ["PyTorch", "Amazon Bedrock", "RAG", "Snowflake"],
        href: "/projects/edwards-lifesciences",
        note: "proprietary",
      },
      {
        title: "PhysioNet 2025 — 2nd Place",
        description:
          "First-authored paper finetuning foundational ECG models for disease detection. Ranked 2nd out of 100+ global teams.",
        tags: ["ECG", "Transformers", "Medical AI", "CinC 2025"],
        href: "/projects/physionet-2025",
      },
      {
        title: "TreeHacks 2025 — 1st Place",
        description:
          "Won Stanford's largest hackathon ($15K prize) by building a portable ECG device with a from-scratch CNN-Transformer for real-time heart disease detection in 48 hours.",
        tags: ["Hackathon", "CNN-Transformer", "ECG", "InfluxDB"],
        href: "/projects/treehacks-2025",
      },
      {
        title: "PhysioNet Challenge 2024 — Finalist",
        description:
          "Finetuned a computer vision transformer to deskew paper ECG images for digitization. Published in Computing in Cardiology 2024.",
        tags: ["Computer Vision", "Medical AI", "CinC 2024"],
        href: "/projects/physionet",
      },
    ],
  },
  {
    category: "Other",
    projects: [
      {
        title: "Concept Representations in LLM Latent Spaces",
        description:
          "Exploring whether contemporary language models can identify and extract context-dependent conceptual aspects from embeddings, using polysemous words and sentence clustering.",
        tags: ["NLP", "Research", "PyTorch"],
        href: "/projects/concept-representation",
      },
    ],
  },
]

const publications: {
  title: string
  venue: string
  year: string
  status?: string
  href?: string
}[] = [
  {
    title: "Foundational ECG Model Finetuning for Disease Detection",
    venue: "Computing in Cardiology 2025 (CinC2025-416)",
    year: "2025",
    status: "1st Author · 2nd Place",
  },
  {
    title:
      "Fusion of Deep Learning and Rule-Based Techniques for Enhanced Paper-Based ECG Digitization",
    venue: "Computing in Cardiology 2024 (CinC.2024.495)",
    year: "2024",
    status: "Published",
  },
  {
    title:
      "Diving Under the Hood: Exploring LLM Conceptual Understanding Through Latent Embeddings",
    venue: "CS 224N, Stanford University",
    year: "2024",
    status: "Preprint",
    href: "https://web.stanford.edu/class/cs224n/project.html",
  },
]

const achievements: {
  title: string
  description?: string
  year: string
}[] = [
  {
    title: "PhysioNet 2025 — 2nd Place (2nd / 100+ teams)",
    description: "First-authored paper in Computing in Cardiology 2025 on finetuning foundational ECG models for disease detection.",
    year: "2025",
  },
  {
    title: "TreeHacks 2025 — 1st Place, Most Crazy Use of AI",
    description: "Won Stanford's largest collegiate hackathon (1,000 hackers, 270 teams), earning $15,000 prize for a portable real-time ECG device built in 48 hours.",
    year: "2025",
  },
  {
    title: "PhysioNet / Computing in Cardiology Challenge 2024 — Finalist",
    description: "Published paper (CinC.2024.495) on ECG image digitization using computer vision.",
    year: "2024",
  },
  {
    title: "Stanford NLP Group",
    description: "1 of only 25 undergrads invited into the prestigious group comprising top Stanford NLP faculty and PhDs; attended invite-only weekly seminars.",
    year: "2024",
  },
  {
    title: "Eagle Scout — Boy Scouts of America",
    description: "Top rank in Scouting, achieved by fewer than 6% of Scouts.",
    year: "",
  },
  // Add more achievements here ↓
]

const groups: {
  name: string
  role: string
  description: string
  href?: string
  year?: string
}[] = [
  {
    name: "Stanford UAV Club — Skyrunners",
    role: "Autonomy Lead",
    description: "Leading autonomy and navigation for the campus food delivery drone at the Stanford Robotics Center.",
    href: "https://stanforduav.org",
    year: "2025 – Present",
  },
  {
    name: "Stanford NLP Group",
    role: "Undergraduate Researcher",
    description: "1 of 25 undergrads in the group comprising top Stanford NLP faculty and PhDs; attending invite-only weekly seminars on cutting-edge NLP research.",
    year: "2024 – Present",
  },
  {
    name: "Boy Scouts of America",
    role: "Eagle Scout",
    description: "Highest rank in Scouting, achieved by fewer than 6% of Scouts.",
  },
]

// ─────────────────────────────────────────────────────────────────────────────
//  PALETTE  (keep colours here so they're easy to tweak)
// ─────────────────────────────────────────────────────────────────────────────
const C = {
  pageBg:      "#F5EDD6",
  sectionAlt:  "#EDE4C4",
  cardBg:      "#FAF5E8",
  border:      "#C8B98A",
  borderLight: "#DDD0A8",
  forestDark:  "#1F3B16",
  forestMid:   "#3D6B30",
  forestLight: "#5E8F50",
  tagBg:       "#D8EAD0",
  amber:       "#C4A05A",
  amberDark:   "#8B6914",
  bodyText:    "#3C3226",
  mutedText:   "#7A6E5F",
  dimText:     "#5A4E3C",
} as const

// ─────────────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div style={{ backgroundColor: C.pageBg, color: C.bodyText, fontFamily: "'DM Sans', sans-serif", minHeight: "100vh" }}>

      {/* ── NAV ────────────────────────────────────────────────────── */}
      <header
        style={{
          backgroundColor: C.sectionAlt,
          borderBottom: `1px solid ${C.border}`,
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 1.5rem", height: 56, display: "flex", alignItems: "center" }}>
          <span style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.3125rem",
            fontWeight: 600,
            color: C.forestDark,
            letterSpacing: "0.04em",
          }}>
            KN
          </span>
          <nav style={{ marginLeft: "auto", display: "flex", gap: "1.75rem" }}>
            {(["About", "Projects", "Publications", "Achievements", "Groups", "Contact"] as const).map((label) => (
              <Link
                key={label}
                href={`#${label.toLowerCase()}`}
                className="nav-link"
                style={{ fontSize: "0.875rem", color: C.forestMid, textDecoration: "none", fontWeight: 500 }}
              >
                {label}
              </Link>
            ))}
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="nav-link"
              style={{ fontSize: "0.875rem", color: C.amberDark, textDecoration: "none", fontWeight: 500 }}
            >
              CV ↗
            </a>
          </nav>
        </div>
      </header>

      <main style={{ maxWidth: 900, margin: "0 auto", padding: "0 1.5rem" }}>

        {/* ── HERO ──────────────────────────────────────────────────── */}
        <section style={{ padding: "5rem 0 4.5rem" }}>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "3.5rem", flexWrap: "wrap-reverse" }}>

            {/* Text */}
            <div style={{ flex: "1 1 320px" }}>
              <p
                className="site-fade-in"
                style={{ fontSize: "0.8125rem", letterSpacing: "0.12em", textTransform: "uppercase", color: C.forestLight, marginBottom: "0.75rem", fontWeight: 600 }}
              >
                NLP Developer &amp; Researcher
              </p>
              <h1
                className="site-fade-in site-fade-in-delay-1"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2.75rem, 6vw, 4.25rem)",
                  fontWeight: 600,
                  lineHeight: 1.08,
                  color: C.forestDark,
                  marginBottom: "1.25rem",
                  letterSpacing: "-0.01em",
                }}
              >
                Kelvin Nguyen
              </h1>
              <p
                className="site-fade-in site-fade-in-delay-2"
                style={{ fontSize: "1.0625rem", lineHeight: 1.75, color: C.dimText, maxWidth: 480, marginBottom: "2rem" }}
              >
                CS + Math at Stanford. I do research in the NLP and Multi-Robot Systems labs, build medical AI at Edwards Lifesciences, and lead autonomy on a campus food delivery drone. Also a Snoopy fan.
              </p>
              <div className="site-fade-in site-fade-in-delay-3" style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "0.4rem",
                    fontSize: "0.875rem", fontWeight: 600,
                    color: C.pageBg, backgroundColor: C.forestDark,
                    padding: "0.5625rem 1.375rem",
                    borderRadius: "2px",
                    textDecoration: "none",
                    letterSpacing: "0.02em",
                    transition: "background-color 0.15s",
                  }}
                >
                  <FileText size={14} />
                  Download CV
                </a>
                <div style={{ display: "flex", gap: "0.875rem" }}>
                  <a href="mailto:kelvinknguyen@stanford.edu" title="Email" style={{ color: C.forestMid, transition: "color 0.15s" }}>
                    <Mail size={19} />
                  </a>
                  <a href="https://linkedin.com/in/kelvinknguyen27" target="_blank" rel="noreferrer" title="LinkedIn" style={{ color: C.forestMid }}>
                    <Linkedin size={19} />
                  </a>
                  <a href="https://github.com/4deg-kelvin" target="_blank" rel="noreferrer" title="GitHub" style={{ color: C.forestMid }}>
                    <Github size={19} />
                  </a>
                </div>
              </div>
            </div>

            {/* Photo */}
            <div className="site-fade-in site-fade-in-delay-1" style={{ flexShrink: 0 }}>
              <div style={{
                width: 168, height: 168,
                borderRadius: "50%",
                overflow: "hidden",
                border: `3px solid ${C.border}`,
                boxShadow: `5px 5px 0 ${C.amber}`,
              }}>
                <Image
                  src="/profile.jpg"
                  alt="Kelvin Nguyen"
                  width={336}
                  height={336}
                  priority
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </div>
        </section>

        <hr style={{ borderColor: C.border, borderTopWidth: 1 }} />

        {/* ── ABOUT ─────────────────────────────────────────────────── */}
        <section id="about" style={{ padding: "4rem 0" }}>
          <SectionHeading>About</SectionHeading>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.85, color: C.dimText, maxWidth: 620 }}>
            I&apos;m an undergraduate Computer Science student at{" "}
            <strong style={{ color: C.bodyText, fontWeight: 600 }}>Stanford University</strong> and a part-time data science/AI developer at{" "}
            <strong style={{ color: C.bodyText, fontWeight: 600 }}>Edwards Lifesciences</strong>.
            My research focuses on concept representations in LLM latent spaces — examining how language models encode meaning
            through polysemous word embeddings. I also build AI-driven clinical platforms that connect machine learning systems to
            enterprise medical data.
          </p>
          <p style={{ fontSize: "0.875rem", color: C.mutedText, marginTop: "0.875rem" }}>
            🎄 Stanford University · Snoopy Enthusiast
          </p>
        </section>

        <hr style={{ borderColor: C.border, borderTopWidth: 1 }} />

        {/* ── PROJECTS ──────────────────────────────────────────────── */}
        <section id="projects" style={{ padding: "4rem 0" }}>
          <SectionHeading>Projects</SectionHeading>
          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            {projectCategories.map(({ category, projects }) => (
              <div key={category}>
                {/* Category label */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", marginBottom: "1.125rem" }}>
                  <span style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: C.amber,
                  }}>
                    {category}
                  </span>
                  <div style={{ flex: 1, height: 1, backgroundColor: C.borderLight }} />
                </div>

                {projects.length === 0 ? (
                  <p style={{ fontSize: "0.875rem", color: C.mutedText, fontStyle: "italic" }}>
                    Coming soon.
                  </p>
                ) : (
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
                    gap: "1.125rem",
                  }}>
                    {projects.map((project) => (
                      <div
                        key={project.title}
                        className="project-card"
                        style={{
                          backgroundColor: C.cardBg,
                          border: `1px solid ${C.borderLight}`,
                          borderRadius: "3px",
                          padding: "1.5rem",
                        }}
                      >
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.75rem", marginBottom: "0.75rem" }}>
                          <h3 style={{
                            fontFamily: "'Cormorant Garamond', serif",
                            fontSize: "1.1875rem",
                            fontWeight: 600,
                            color: C.forestDark,
                            lineHeight: 1.3,
                          }}>
                            {project.title}
                            {project.note === "proprietary" && (
                              <span style={{ fontSize: "0.75rem", color: "#B84A1F", fontFamily: "inherit", fontStyle: "italic", marginLeft: "0.4rem" }}>
                                (proprietary)
                              </span>
                            )}
                          </h3>
                          {project.href && (
                            <Link href={project.href} style={{ color: C.forestMid, flexShrink: 0, marginTop: "3px" }}>
                              <ExternalLink size={13} />
                            </Link>
                          )}
                        </div>
                        <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: C.dimText, marginBottom: "1.125rem" }}>
                          {project.description}
                        </p>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              style={{
                                fontSize: "0.75rem",
                                fontWeight: 500,
                                color: C.forestMid,
                                backgroundColor: C.tagBg,
                                padding: "0.2rem 0.625rem",
                                borderRadius: "2px",
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <hr style={{ borderColor: C.border, borderTopWidth: 1 }} />

        {/* ── PUBLICATIONS ──────────────────────────────────────────── */}
        <section id="publications" style={{ padding: "4rem 0" }}>
          <SectionHeading>Publications</SectionHeading>
          <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {publications.map((pub, i) => (
              <li key={i} style={{ display: "flex", gap: "1.375rem", marginBottom: i < publications.length - 1 ? "2rem" : 0 }}>
                <span style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  color: C.amber,
                  minWidth: "1.75rem",
                  paddingTop: "1px",
                  flexShrink: 0,
                }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  {pub.href ? (
                    <a href={pub.href} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                      <h3 className="pub-title-link" style={{ fontSize: "1rem", fontWeight: 500, color: C.forestDark, lineHeight: 1.5, marginBottom: "0.375rem" }}>
                        &ldquo;{pub.title}&rdquo;
                      </h3>
                    </a>
                  ) : (
                    <h3 style={{ fontSize: "1rem", fontWeight: 500, color: C.forestDark, lineHeight: 1.5, marginBottom: "0.375rem" }}>
                      &ldquo;{pub.title}&rdquo;
                    </h3>
                  )}
                  <p style={{ fontSize: "0.875rem", color: C.mutedText }}>
                    {pub.status && (
                      <span style={{
                        color: pub.status === "Accepted" ? C.forestMid : C.amberDark,
                        fontWeight: 600,
                        marginRight: "0.5rem",
                      }}>
                        [{pub.status}]
                      </span>
                    )}
                    {pub.venue} &middot; {pub.year}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <hr style={{ borderColor: C.border, borderTopWidth: 1 }} />

        {/* ── ACHIEVEMENTS ──────────────────────────────────────────── */}
        <section id="achievements" style={{ padding: "4rem 0" }}>
          <SectionHeading>Achievements</SectionHeading>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {achievements.map((item, i) => (
              <li key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", marginBottom: i < achievements.length - 1 ? "1.5rem" : 0 }}>
                <span style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: C.forestLight,
                  backgroundColor: C.tagBg,
                  padding: "0.25rem 0.625rem",
                  borderRadius: "2px",
                  flexShrink: 0,
                  marginTop: "2px",
                  letterSpacing: "0.02em",
                }}>
                  {item.year}
                </span>
                <div>
                  <p style={{ fontSize: "1rem", fontWeight: 500, color: C.bodyText, lineHeight: 1.45 }}>
                    {item.title}
                  </p>
                  {item.description && (
                    <p style={{ fontSize: "0.875rem", color: C.mutedText, marginTop: "0.25rem" }}>
                      {item.description}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>

        <hr style={{ borderColor: C.border, borderTopWidth: 1 }} />

        {/* ── GROUPS ────────────────────────────────────────────────── */}
        <section id="groups" style={{ padding: "4rem 0" }}>
          <SectionHeading>Groups</SectionHeading>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {groups.map((group) => (
              <li key={group.name} style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                <div style={{
                  width: 6, height: 6, borderRadius: "50%",
                  backgroundColor: C.amber,
                  flexShrink: 0, marginTop: "0.5rem",
                }} />
                <div>
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "0.625rem", marginBottom: "0.25rem" }}>
                    {group.href ? (
                      <a href={group.href} target="_blank" rel="noreferrer" style={{ fontSize: "1rem", fontWeight: 600, color: C.forestDark, textDecoration: "none", borderBottom: `1px solid ${C.borderLight}` }}>
                        {group.name}
                      </a>
                    ) : (
                      <span style={{ fontSize: "1rem", fontWeight: 600, color: C.forestDark }}>{group.name}</span>
                    )}
                    <span style={{ fontSize: "0.875rem", color: C.amber, fontWeight: 500 }}>{group.role}</span>
                    {group.year && (
                      <span style={{ fontSize: "0.8125rem", color: C.mutedText }}>{group.year}</span>
                    )}
                  </div>
                  <p style={{ fontSize: "0.9rem", color: C.dimText, lineHeight: 1.65 }}>
                    {group.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <hr style={{ borderColor: C.border, borderTopWidth: 1 }} />

        {/* ── CONTACT ───────────────────────────────────────────────── */}
        <section id="contact" style={{ padding: "4rem 0 5rem" }}>
          <SectionHeading>Contact</SectionHeading>
          <p style={{ fontSize: "1.0625rem", color: C.dimText, marginBottom: "1.75rem", maxWidth: 480, lineHeight: 1.7 }}>
            Open to research collaborations, internship conversations, and connecting with fellow builders.
          </p>
          <a
            href="mailto:kelvinknguyen@stanford.edu"
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              fontSize: "0.9375rem", color: C.forestMid, fontWeight: 500,
              textDecoration: "none",
              borderBottom: `1px solid ${C.borderLight}`,
              paddingBottom: "1px",
              transition: "color 0.15s",
            }}
          >
            <Mail size={16} />
            kelvinknguyen@stanford.edu
          </a>
          <div style={{ display: "flex", gap: "1rem", marginTop: "1.25rem" }}>
            <a href="https://linkedin.com/in/kelvinknguyen27" target="_blank" rel="noreferrer" title="LinkedIn" style={{ color: C.mutedText, transition: "color 0.15s" }}>
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/4deg-kelvin" target="_blank" rel="noreferrer" title="GitHub" style={{ color: C.mutedText, transition: "color 0.15s" }}>
              <Github size={20} />
            </a>
          </div>
        </section>

      </main>

      {/* ── FOOTER ────────────────────────────────────────────────── */}
      <footer style={{
        backgroundColor: C.sectionAlt,
        borderTop: `1px solid ${C.border}`,
        padding: "1.5rem",
        textAlign: "center",
      }}>
        <p style={{ fontSize: "0.8125rem", color: C.mutedText }}>
          © {new Date().getFullYear()} Kelvin Nguyen
        </p>
      </footer>

    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
//  Shared sub-components
// ─────────────────────────────────────────────────────────────────────────────

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: "clamp(1.625rem, 3vw, 2rem)",
      fontWeight: 600,
      color: "#1F3B16",
      marginBottom: "1.75rem",
      letterSpacing: "-0.01em",
    }}>
      {children}
    </h2>
  )
}
