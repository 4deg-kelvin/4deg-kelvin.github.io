import { ArrowLeft } from "lucide-react"
import Link from "next/link"

const C = {
  pageBg:     "#F5EDD6",
  sectionAlt: "#EDE4C4",
  cardBg:     "#FAF5E8",
  border:     "#C8B98A",
  borderLight:"#DDD0A8",
  forestDark: "#1F3B16",
  forestMid:  "#3D6B30",
  forestLight:"#5E8F50",
  amber:      "#C4A05A",
  bodyText:   "#3C3226",
  dimText:    "#5A4E3C",
  mutedText:  "#7A6E5F",
  tagBg:      "#D8EAD0",
}

export default function TreeHacks2025() {
  return (
    <div style={{ backgroundColor: C.pageBg, color: C.bodyText, fontFamily: "'DM Sans', sans-serif", minHeight: "100vh" }}>

      {/* NAV */}
      <header style={{ backgroundColor: C.sectionAlt, borderBottom: `1px solid ${C.border}`, position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 1.5rem", height: 56, display: "flex", alignItems: "center" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", fontWeight: 500, color: C.forestMid, textDecoration: "none" }}>
            <ArrowLeft size={16} />
            Back
          </Link>
          <span style={{ marginLeft: "auto", fontFamily: "'Cormorant Garamond', serif", fontSize: "1.125rem", fontWeight: 600, color: C.forestDark, letterSpacing: "0.04em" }}>
            KN
          </span>
        </div>
      </header>

      <main style={{ maxWidth: 760, margin: "0 auto", padding: "3.5rem 1.5rem 5rem" }}>

        {/* Header */}
        <div style={{ marginBottom: "2.5rem" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem", marginBottom: "1rem" }}>
            <span style={{ fontSize: "0.8125rem", fontWeight: 600, color: C.forestLight, backgroundColor: C.tagBg, padding: "0.25rem 0.625rem", borderRadius: "2px" }}>
              Feb 2025 · 48 hours
            </span>
            {["CNN-Transformer", "ECG", "InfluxDB", "Embedded"].map(tag => (
              <span key={tag} style={{ fontSize: "0.75rem", fontWeight: 500, color: C.forestMid, backgroundColor: C.tagBg, padding: "0.2rem 0.625rem", borderRadius: "2px" }}>
                {tag}
              </span>
            ))}
            <span style={{ fontSize: "0.75rem", fontWeight: 600, color: C.forestMid, backgroundColor: C.tagBg, padding: "0.2rem 0.625rem", borderRadius: "2px" }}>
              🏆 1st Place · $15,000
            </span>
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 600, color: C.forestDark, lineHeight: 1.15, marginBottom: "0.75rem", letterSpacing: "-0.01em" }}>
            TreeHacks 2025
          </h1>
          <p style={{ fontSize: "1.125rem", color: C.dimText, lineHeight: 1.7 }}>
            Most Crazy Use of AI — 1st place out of 1,000 hackers and 270 teams at Stanford&apos;s largest collegiate hackathon.
          </p>
        </div>

        {/* Award banner */}
        <div style={{
          backgroundColor: C.cardBg,
          border: `1px solid ${C.borderLight}`,
          borderLeft: `3px solid ${C.amber}`,
          borderRadius: "3px",
          padding: "1rem 1.25rem",
          marginBottom: "2.75rem",
          fontSize: "0.9rem",
          color: C.dimText,
        }}>
          <strong style={{ color: C.forestDark }}>1st Place Overall · Most Crazy Use of AI</strong> — $15,000 prize.
          Built entirely in 48 hours at Stanford&apos;s TreeHacks 2025.
        </div>

        {/* Prose */}
        <div style={{ fontSize: "1rem", lineHeight: 1.85, color: C.dimText }}>

          <ProseHeading>The Project</ProseHeading>
          <p style={{ marginBottom: "1.25rem" }}>
            In 48 hours, I built a <strong style={{ color: C.bodyText }}>portable ECG device</strong> capable of
            real-time heart disease detection. The device captures raw ECG signals from a physical sensor and streams
            them to an onboard model for inference — no cloud required for the core detection loop.
          </p>

          <ProseHeading>The Model</ProseHeading>
          <p style={{ marginBottom: "1.25rem" }}>
            I trained a <strong style={{ color: C.bodyText }}>CNN-Transformer model from scratch</strong> to classify
            cardiac conditions directly from raw ECG waveforms. The architecture combines convolutional layers for
            local feature extraction with a transformer encoder for capturing longer-range temporal dependencies in
            the signal — a design informed by my prior PhysioNet work.
          </p>

          <ProseHeading>Hardware &amp; Communication</ProseHeading>
          <p>
            The device communicates over HTTP using{" "}
            <strong style={{ color: C.bodyText }}>InfluxDB</strong> for time-series data transport, allowing
            real-time streaming of ECG readings from the physical sensor to the inference pipeline. The end-to-end
            system — hardware, firmware, model, and communication layer — was built and demonstrated within the
            hackathon window.
          </p>

        </div>
      </main>

      <footer style={{ backgroundColor: C.sectionAlt, borderTop: `1px solid ${C.border}`, padding: "1.5rem", textAlign: "center" }}>
        <p style={{ fontSize: "0.8125rem", color: C.mutedText }}>© {new Date().getFullYear()} Kelvin Nguyen</p>
      </footer>
    </div>
  )
}

function ProseHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: "1.5rem",
      fontWeight: 600,
      color: "#1F3B16",
      marginTop: "2.25rem",
      marginBottom: "0.875rem",
      letterSpacing: "-0.01em",
    }}>
      {children}
    </h2>
  )
}
