import { ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

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

export default function ConceptualRepresentation() {
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
            {["NLP", "Research", "PyTorch"].map(tag => (
              <span key={tag} style={{ fontSize: "0.75rem", fontWeight: 500, color: C.forestMid, backgroundColor: C.tagBg, padding: "0.2rem 0.625rem", borderRadius: "2px" }}>
                {tag}
              </span>
            ))}
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 600, color: C.forestDark, lineHeight: 1.15, marginBottom: "1rem", letterSpacing: "-0.01em" }}>
            Concepts in LLM Latent Representations
          </h1>
          <p style={{ fontSize: "1.125rem", color: C.dimText, lineHeight: 1.7, marginBottom: "1.5rem" }}>
            Exploring how word vectors in a latent space represent concepts and their relationships across context.
          </p>
          <a
            href="https://web.stanford.edu/class/cs224n/final-reports/256984984.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.375rem", fontSize: "0.875rem", fontWeight: 600, color: C.forestMid, textDecoration: "none", borderBottom: `1px solid ${C.border}`, paddingBottom: "1px" }}
          >
            <ExternalLink size={14} />
            Read the Paper
          </a>
        </div>

        {/* Figure */}
        <div style={{ margin: "2.5rem 0", textAlign: "center" }}>
          <div style={{ display: "inline-block", border: `1px solid ${C.border}`, borderRadius: "3px", overflow: "hidden", backgroundColor: C.cardBg, padding: "1rem" }}>
            <Image
              src="/concept-flowchart.png"
              alt="Concept representation flowchart"
              width={600}
              height={600}
              quality={100}
              style={{ maxWidth: "100%", height: "auto", display: "block" }}
            />
          </div>
          <p style={{ fontSize: "0.8125rem", color: C.mutedText, marginTop: "0.625rem", fontStyle: "italic" }}>
            Flowchart overview of the concept extraction pipeline.
          </p>
        </div>

        {/* Prose */}
        <div style={{ fontSize: "1rem", lineHeight: 1.85, color: C.dimText }}>
          <ProseHeading>Project Overview</ProseHeading>
          <p style={{ marginBottom: "1.5rem" }}>
            This ongoing project explores whether contemporary language models can identify and extract different context-dependent
            aspects of concepts from their embeddings, using polysemous words and clustering sentences containing those words.
            The results show that language models can encode and describe context-specific conceptual aspects, while also
            demonstrating an ability to understand and evaluate conceptual cohesiveness in sentence clusters.
          </p>

          <ProseHeading>Abstract</ProseHeading>
          <p style={{ marginBottom: "1.5rem", fontStyle: "italic", color: C.mutedText, borderLeft: `3px solid ${C.border}`, paddingLeft: "1.25rem" }}>
            Concepts form the mental representations of words, and are used for high-level thinking, reasoning, and decision making,
            representing a core difference between humans and contemporary large language models (LLMs), which are trained at the token-level.
            While work has been conducted to evaluate LLMs' conceptual understanding and to endow them with conceptual awareness, this work
            has mainly worked on prompting models, and not their latent embedding spaces. Yet, concepts have been encoded in embeddings for
            years: early embedding methods such as word2vec encoded certain conceptual relationships (ex: hypernym-hyponym), as apparent in
            the parallelogram rule.
            <br /><br />
            Therefore, I explore whether a contemporary model can identify and extract different aspects of in-context concepts from their
            embeddings. To do that, I take very polysemous words, cluster different sentences containing each word, and use an LLM to describe
            embeddings. Results show that the LLM can encode context-dependent aspects of concepts in its embeddings, can determine the
            highlighted aspect of a word in context, and can understand if a cluster of sentences is conceptually cohesive.
          </p>

          <ProseHeading>Progress</ProseHeading>
          <p style={{ marginBottom: "1.5rem" }}>
            This project was presented as part of my CS 224N (Natural Language Processing with Deep Learning) class, advised by
            Stanford NLP postdoc Chen Shani. Preliminary results are detailed in the linked paper.
          </p>

          <ProseHeading>Future Directions</ProseHeading>
          <p>
            In the coming months, I plan to work with Chen and her advisor Dan Jurafsky to develop the paper towards a formal publication,
            while also refining some of the methods, using a larger corpus, and potentially updating from Llama 2 to Llama 3.1.
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
