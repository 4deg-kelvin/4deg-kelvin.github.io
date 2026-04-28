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

export default function MultiRobotSystemsLab() {
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
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem", flexWrap: "wrap" }}>
            <span style={{ fontSize: "0.8125rem", fontWeight: 600, color: C.forestLight, backgroundColor: C.tagBg, padding: "0.25rem 0.625rem", borderRadius: "2px", letterSpacing: "0.02em" }}>
              Undergraduate Researcher
            </span>
            {["Gaussian Splatting", "RL", "World Models", "UAV"].map(tag => (
              <span key={tag} style={{ fontSize: "0.75rem", fontWeight: 500, color: C.forestMid, backgroundColor: C.tagBg, padding: "0.2rem 0.625rem", borderRadius: "2px" }}>
                {tag}
              </span>
            ))}
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 600, color: C.forestDark, lineHeight: 1.15, marginBottom: "0.75rem", letterSpacing: "-0.01em" }}>
            Stanford Multi-Robot Systems Lab
          </h1>
          <p style={{ fontSize: "1rem", color: C.mutedText, marginBottom: 0 }}>
            Stanford University · Stanford, CA
          </p>
        </div>

        {/* Role summary card */}
        <div style={{
          backgroundColor: C.cardBg,
          border: `1px solid ${C.borderLight}`,
          borderLeft: `3px solid ${C.forestMid}`,
          borderRadius: "3px",
          padding: "1.25rem 1.5rem",
          marginBottom: "2.75rem",
          fontSize: "1rem",
          lineHeight: 1.75,
          color: C.dimText,
        }}>
          Undergraduate researcher exploring how generative scene representations and world models can power
          data-efficient training of autonomous UAV policies.
        </div>

        {/* Prose */}
        <div style={{ fontSize: "1rem", lineHeight: 1.85, color: C.dimText }}>

          <ProseHeading>Gaussian Splatting for RL Policy Training</ProseHeading>
          <p style={{ marginBottom: "1.25rem" }}>
            I&apos;m researching the use of{" "}
            <strong style={{ color: C.bodyText }}>3D Gaussian Splatting</strong> to reconstruct real-world scenes
            into photorealistic, differentiable environments that can be flown through in simulation. These
            reconstructions act as training environments for{" "}
            <strong style={{ color: C.bodyText }}>reinforcement learning policies</strong> controlling autonomous
            UAVs — bridging the gap between cheap simulation and the visual fidelity needed for real-world transfer.
          </p>
          <p style={{ marginBottom: "1.25rem" }}>
            The aim is to make policy training scale to environments that would be expensive, dangerous, or
            impossible to collect at scale in the real world, while preserving enough perceptual realism that the
            learned policies remain useful when deployed on physical drones.
          </p>

          <ProseHeading>World Models for Training Data Augmentation</ProseHeading>
          <p>
            In parallel, I&apos;m working with{" "}
            <strong style={{ color: C.bodyText }}>generative world models</strong> to augment UAV training data —
            using them to synthesize diverse flight trajectories, weather conditions, and scene variations that
            expand coverage beyond what real flight data can provide. The goal is to use these generated rollouts
            to improve the robustness and generalization of perception and control models for autonomous drones.
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
