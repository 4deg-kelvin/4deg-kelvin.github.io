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

export default function Skyrunners() {
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
              June 2025 – Present
            </span>
            {["ROS2", "Isaac SLAM", "Jetson Orin", "ArduPilot", "Visual-SLAM"].map(tag => (
              <span key={tag} style={{ fontSize: "0.75rem", fontWeight: 500, color: C.forestMid, backgroundColor: C.tagBg, padding: "0.2rem 0.625rem", borderRadius: "2px" }}>
                {tag}
              </span>
            ))}
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 600, color: C.forestDark, lineHeight: 1.15, marginBottom: "0.75rem", letterSpacing: "-0.01em" }}>
            Skyrunners — Autonomy &amp; Navigation Lead
          </h1>
          <p style={{ fontSize: "1rem", color: C.mutedText, marginBottom: 0 }}>
            Stanford Robotics Center · Stanford, CA
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
          Leading autonomy and navigation for Stanford Robotics Center&apos;s Skyrunners team — building the full perception,
          SLAM, and flight control stack for a campus food delivery drone.
        </div>

        {/* Prose */}
        <div style={{ fontSize: "1rem", lineHeight: 1.85, color: C.dimText }}>

          <ProseHeading>Visual-SLAM &amp; Perception</ProseHeading>
          <p style={{ marginBottom: "1.25rem" }}>
            The core navigation system is built around both sparse and dense outdoor{" "}
            <strong style={{ color: C.bodyText }}>Visual-SLAM</strong>, running on an embedded{" "}
            <strong style={{ color: C.bodyText }}>NVIDIA Jetson Orin GPU</strong> using{" "}
            <strong style={{ color: C.bodyText }}>Isaac ROS</strong> and{" "}
            <strong style={{ color: C.bodyText }}>Isaac SLAM</strong>. Stereo vision provides depth estimation, while{" "}
            <strong style={{ color: C.bodyText }}>nvBlox</strong> handles real-time 3D environment reconstruction for
            obstacle-aware navigation. PyTorch and OpenCV are used for additional perception processing in the pipeline.
          </p>
          <p style={{ marginBottom: "1.25rem" }}>
            For indoor environments, I&apos;m working with an{" "}
            <strong style={{ color: C.bodyText }}>OAK-D camera</strong> to explore SLAM, object detection, and object
            avoidance — targeting tighter spaces where GPS is unavailable and dense reconstruction is critical.
          </p>

          <ProseHeading>Hardware Integration</ProseHeading>
          <p style={{ marginBottom: "1.25rem" }}>
            I wired and configured the Jetson Orin to communicate with a{" "}
            <strong style={{ color: C.bodyText }}>Pixhawk 6c</strong> flight controller, establishing a{" "}
            <strong style={{ color: C.bodyText }}>ROS2</strong> communication layer between the two. This integration
            allows the autonomy stack to issue navigation commands directly to the flight controller, enabling
            closed-loop autonomous flight.
          </p>

          <ProseHeading>Waypoint Navigation &amp; Simulation</ProseHeading>
          <p style={{ marginBottom: "1.25rem" }}>
            Drone waypoint navigation is being developed using{" "}
            <strong style={{ color: C.bodyText }}>ArduPilot</strong> and{" "}
            <strong style={{ color: C.bodyText }}>MAVLink</strong>, with flight plans designed and simulated in{" "}
            <strong style={{ color: C.bodyText }}>Mission Planner</strong> before deployment. This simulation-first
            workflow allows safe iteration on routing logic and failsafe behavior prior to physical flight tests.
          </p>

          <ProseHeading>Research Direction</ProseHeading>
          <p>
            I&apos;m exploring training a custom SLAM and navigation model using{" "}
            <strong style={{ color: C.bodyText }}>Genie</strong> (Google DeepMind&apos;s world model) as a synthetic
            data generator. The goal is to reduce reliance on real-world data collection for training perception models
            by leveraging generative world models to simulate diverse outdoor environments at scale.
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

