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

export default function EdwardsLifesciences() {
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
            {["PyTorch", "Amazon Bedrock", "RAG", "Snowflake", "PubMedBERT"].map(tag => (
              <span key={tag} style={{ fontSize: "0.75rem", fontWeight: 500, color: C.forestMid, backgroundColor: C.tagBg, padding: "0.2rem 0.625rem", borderRadius: "2px" }}>
                {tag}
              </span>
            ))}
            <span style={{ fontSize: "0.75rem", fontWeight: 500, color: "#B84A1F", backgroundColor: "#FAE0D4", padding: "0.2rem 0.625rem", borderRadius: "2px", fontStyle: "italic" }}>
              proprietary
            </span>
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 600, color: C.forestDark, lineHeight: 1.15, marginBottom: "0.75rem", letterSpacing: "-0.01em" }}>
            Edwards Lifesciences
          </h1>
          <p style={{ fontSize: "1rem", color: C.mutedText }}>
            Data Science / AI Software Engineer · June 2024 – Present · Stanford, CA
          </p>
        </div>

        {/* NDA notice */}
        <div style={{
          backgroundColor: C.cardBg,
          border: `1px solid ${C.borderLight}`,
          borderLeft: `3px solid #C4501A`,
          borderRadius: "3px",
          padding: "1rem 1.25rem",
          marginBottom: "2.75rem",
          fontSize: "0.9rem",
          color: C.dimText,
        }}>
          This role is subject to an NDA. Descriptions are intentionally high-level.
        </div>

        {/* Prose */}
        <div style={{ fontSize: "1rem", lineHeight: 1.85, color: C.dimText }}>

          <ProseHeading>Heart Condition Prediction Pipeline</ProseHeading>
          <p style={{ marginBottom: "1.25rem" }}>
            Led a 5-member team designing and training an ML pipeline to predict a common heart condition using a{" "}
            <strong style={{ color: C.bodyText }}>CNN-Transformer hybrid with ResNet-50 and squeeze-and-excitation blocks</strong>,
            implemented in PyTorch. The model was trained on massive open-source clinical datasets and the methods were
            published in a machine learning for healthcare journal as part of the PhysioNet Challenge.
            The team placed{" "}
            <strong style={{ color: C.bodyText }}>2nd out of 100+ global academic and industry research teams</strong>.
          </p>

          <ProseHeading>Medical Coding Application</ProseHeading>
          <p style={{ marginBottom: "1.25rem" }}>
            Led development of a production medical coding application using{" "}
            <strong style={{ color: C.bodyText }}>Amazon Bedrock</strong>, deployed across all business units.
            The system is projected to deliver{" "}
            <strong style={{ color: C.bodyText }}>over $1M in annual savings</strong> and reduced manual coding
            time by <strong style={{ color: C.bodyText }}>70%</strong>.
          </p>

          <ProseHeading>AI Semantic Search</ProseHeading>
          <p>
            Engineered an AI-powered semantic search system using{" "}
            <strong style={{ color: C.bodyText }}>PubMedBERT embeddings</strong> and a{" "}
            <strong style={{ color: C.bodyText }}>RAG architecture</strong> integrated with{" "}
            <strong style={{ color: C.bodyText }}>Snowflake Data Cloud</strong>. The system leverages Llama 3,
            HuggingFace, LLM2Vec, and Snowflake APIs to process and retrieve relevant patient data at scale.
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
