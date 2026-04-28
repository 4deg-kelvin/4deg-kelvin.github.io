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

export default function Physionet2025() {
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
              Sept 2025
            </span>
            {["ECG", "Transformers", "Medical AI", "CinC 2025"].map(tag => (
              <span key={tag} style={{ fontSize: "0.75rem", fontWeight: 500, color: C.forestMid, backgroundColor: C.tagBg, padding: "0.2rem 0.625rem", borderRadius: "2px" }}>
                {tag}
              </span>
            ))}
            <span style={{ fontSize: "0.75rem", fontWeight: 600, color: C.forestMid, backgroundColor: C.tagBg, padding: "0.2rem 0.625rem", borderRadius: "2px" }}>
              🏆 2nd / 100+ teams
            </span>
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 600, color: C.forestDark, lineHeight: 1.15, marginBottom: "0.75rem", letterSpacing: "-0.01em" }}>
            PhysioNet Challenge 2025
          </h1>
          <p style={{ fontSize: "1.125rem", color: C.dimText, lineHeight: 1.7 }}>
            Finetuning foundational ECG models for multi-disease detection — ranked 2nd out of 100+ global teams.
          </p>
        </div>

        {/* Achievement banner */}
        <div style={{
          backgroundColor: C.cardBg,
          border: `1px solid ${C.borderLight}`,
          borderLeft: `3px solid ${C.forestMid}`,
          borderRadius: "3px",
          padding: "1rem 1.25rem",
          marginBottom: "2.75rem",
          fontSize: "0.9rem",
          color: C.dimText,
        }}>
          <strong style={{ color: C.forestDark }}>First-authored paper</strong> published in Computing in Cardiology 2025 (CinC2025-416).
          Ranked <strong style={{ color: C.forestDark }}>2nd out of 100+ global academic and industry research teams</strong> in the hackathon phase.
        </div>

        {/* Prose */}
        <div style={{ fontSize: "1rem", lineHeight: 1.85, color: C.dimText }}>

          <ProseHeading>Project Overview</ProseHeading>
          <p style={{ marginBottom: "1.25rem" }}>
            As first author, I led the development of an approach to finetune{" "}
            <strong style={{ color: C.bodyText }}>foundational electrocardiogram (ECG) models</strong> for disease
            detection as part of the PhysioNet 2025 Challenge. The task required adapting large pre-trained cardiac
            models to classify multiple heart conditions from raw ECG signals.
          </p>

          <ProseHeading>Approach</ProseHeading>
          <p style={{ marginBottom: "1.25rem" }}>
            I experimented with two custom architectures: a{" "}
            <strong style={{ color: C.bodyText }}>transformer-CNN hybrid</strong> and a{" "}
            <strong style={{ color: C.bodyText }}>masked autoencoder</strong> for ECG signal encoding. Both
            approaches were evaluated for their ability to capture temporal and morphological features from ECG waveforms.
          </p>
          <p style={{ marginBottom: "1.25rem" }}>
            The dataset comprised over{" "}
            <strong style={{ color: C.bodyText }}>800,000 ECG records</strong>. A thorough exploratory data
            analysis (EDA) was conducted to identify key feature correlations and guide preprocessing decisions
            prior to model training.
          </p>

          <ProseHeading>Publication</ProseHeading>
          <p>
            The paper was accepted to{" "}
            <strong style={{ color: C.bodyText }}>Computing in Cardiology 2025</strong> (CinC2025-416), presented
            at the conference and published in the proceedings. This is a continuation of my work on clinical ECG
            AI following the 2024 PhysioNet Challenge.
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
