import { ArrowLeft } from "lucide-react"
import Link from "next/link"

const C = {
  pageBg:     "#F5EDD6",
  sectionAlt: "#EDE4C4",
  cardBg:     "#FAF5E8",
  border:     "#C8B98A",
  forestDark: "#1F3B16",
  forestMid:  "#3D6B30",
  amber:      "#C4A05A",
  bodyText:   "#3C3226",
  dimText:    "#5A4E3C",
  mutedText:  "#7A6E5F",
  tagBg:      "#D8EAD0",
}

export default function Physionet() {
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
            {["Computer Vision", "Medical AI", "CinC 2024"].map(tag => (
              <span key={tag} style={{ fontSize: "0.75rem", fontWeight: 500, color: C.forestMid, backgroundColor: C.tagBg, padding: "0.2rem 0.625rem", borderRadius: "2px" }}>
                {tag}
              </span>
            ))}
            <span style={{ fontSize: "0.75rem", fontWeight: 600, color: C.forestMid, backgroundColor: C.tagBg, padding: "0.2rem 0.625rem", borderRadius: "2px" }}>
              🏆 Finalist
            </span>
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 600, color: C.forestDark, lineHeight: 1.15, marginBottom: "1rem", letterSpacing: "-0.01em" }}>
            Physionet Challenge 2024
          </h1>
          <p style={{ fontSize: "1.125rem", color: C.dimText, lineHeight: 1.7 }}>
            Training computer vision transformers to deskew paper ECG images for digitization.
          </p>
        </div>

        {/* Achievement badge */}
        <div style={{
          backgroundColor: C.cardBg,
          border: `1px solid ${C.border}`,
          borderLeft: `3px solid ${C.forestMid}`,
          borderRadius: "3px",
          padding: "1rem 1.25rem",
          marginBottom: "2.5rem",
          fontSize: "0.9rem",
          color: C.dimText,
        }}>
          <strong style={{ color: C.forestDark }}>Best Preprint Award</strong> — Computing in Cardiology 2024. Paper presented at conference, accepted for publication.
        </div>

        {/* Prose */}
        <div style={{ fontSize: "1rem", lineHeight: 1.85, color: C.dimText }}>
          <ProseHeading>Project Overview</ProseHeading>
          <p style={{ marginBottom: "1.5rem" }}>
            As part of the Physionet 2024 Challenge, I competed alongside 4 other members from Edwards Lifesciences to develop
            a computer vision pipeline to convert paper ECGs into digital format. My specific task was to build a pipeline to
            deskew scanned ECG images as a preprocessing step.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            I finetuned a <strong style={{ color: C.bodyText }}>computer vision transformer model</strong> on synthetically generated
            scans of ECG images. The model was trained locally on a GPU, then dockerized and deployed to the Physionet challenge servers.
            Due to resource constraints at inference time, the model was not used in the final submission pipeline; however, it achieved{" "}
            <strong style={{ color: C.bodyText }}>90% accuracy</strong> and was explored as a potential improvement over the rule-based
            deskewing method used in the published paper.
          </p>

          <ProseHeading>Publication</ProseHeading>
          <p>
            Our paper,{" "}
            <em>&ldquo;Fusion of Deep Learning and Rule-Based Techniques for Enhanced Paper-Based ECG Digitization&rdquo;</em>,
            was accepted to the <strong style={{ color: C.bodyText }}>Computing in Cardiology 2024 Conference</strong> and awarded{" "}
            <strong style={{ color: C.bodyText }}>Best Preprint</strong>. It details the full development of our digitization
            pipeline and was presented at the conference.
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
