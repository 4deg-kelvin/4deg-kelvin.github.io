// import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ConceptualRepresentation() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black font-inter">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-sky-100">
        <Link className="flex items-center justify-center text-sky-600 hover:text-sky-700" href="/">
          <ArrowLeft className="h-6 w-6 mr-2" />
          Back to Home
        </Link>
      </header>
      <main className="flex-1 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-sky-900 mb-4">
            Concepts in Latent Representations
          </h1>
          <p className="text-xl text-sky-800 mb-8">
            Exploring how word vectors in a latent space represent concepts and their relationships
          </p>
          <div className="flex justify-center">
            <Image
                src="/concept-flowchart.png"
                alt="Kelvin Nguyen"
                layout="intrinsic"
                width={600}
                height={600}
                quality={100}
                objectFit="cover"
              />
          </div>
          <div className="flex justify-center">
            <Link 
              className="flex items-center justify-center text-sky-600 hover:text-sky-700" 
              href="https://web.stanford.edu/class/cs224n/final-reports/256984984.pdf"
              target="_blank" 
              rel="noopener noreferrer" >
              <h2 className="text-3xl italic underline font-bold hover:text-sky-600 hover:underline tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-sky-900 mb-4"> Paper Link</h2>
            </Link>
          </div>
          <div className="prose max-w-none text-sky-700">
            <h2 className="text-2xl font-semibold text-sky-800 mt-8 mb-4">Project Overview</h2>
            <p>
                This ongoing project explores whether contemporary language models can identify and extract different context-dependent aspects of concepts from their embeddings, using polysemous words and clustering sentences containing those words. 
                  The results show that language models can encode and describe context-specific conceptual aspects, while also 
                  demonstrating an ability to understand and evaluate conceptual cohesiveness in sentence clusters.
            </p>
            <h2 className="text-2xl font-semibold text-sky-800 mt-8 mb-4 ">Abstract</h2>
            <p className="italic">
            Concepts form the mental representations of words, and are used for high-level
            thinking, reasoning, and decision making, representing a core difference between
            humans and contemporary large language models (LLMs), which are trained at
            the token-level. While work has been conducted to evaluate LLMs’ conceptual
            understanding and to endow them with conceptual awareness, this work has mainly
            worked on prompting models, and not their latent embedding spaces. Yet, concepts
            have been encoded in embeddings for years: early embedding methods such as
            word2vec encoded certain conceptual relationships (ex: hypernym-hyponym), as
            apparent in the parallelogram rule.
            Therefore, I explore whether a contemporary model can identify and extract differ
            ent aspects of in-context, concepts from their embeddings. To do that, I take very
            polysemous words, which contain high contextual diversity and therefore aspects,
            cluster different sentences containing each word, and used an LLM to describe
            embeddings. Results show that the LLM can encode context-dependent aspects
            of concepts in its embeddings, can determine the highlighted aspect of a word in
            context, and can understand if a cluster of sentences is conceptually cohesive.
            This analysis suggests that LLMs can generate accurate descriptions of their concep
            tual aspects in context, and present an evaluation method to verify their correctness
            and another method to prove a model’s understanding of cohesive clusters. I also
            confirm that there is no simple metric to identify noisy and incohesive clusters, but
            do find a direct correlation between the number of clusters for a word and their
            frequency.
            </p>
            <h2 className="text-2xl font-semibold text-sky-800 mt-8 mb-4">Progress</h2>
            <p>
              This project was presented as part of my CS 224N (Natural Language Processing with Deep Learning) class, advised by Stanford NLP postdoc Chen Shani.
              I demonstrate our preliminary results in this paper.
            </p>
            <h2 className="text-2xl font-semibold text-sky-800 mt-8 mb-4">Future Directions</h2>
            <p>
              In the coming months, I plan to work with Chen and her advisor Dan Jurafsky to develop the paper towards a formal publication, while also refining some of the methods, 
              using a larger corpus, and potentially changing the model used from Llama2 to Llama3.1.
            </p>
          </div>
          {/* <Button className="mt-8 bg-sky-600 text-white hover:bg-sky-700" as={Link} href="/">
            Back to Projects
          </Button> */}
        </div>
      </main>
      <footer className="py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-sky-200 bg-sky-100">
        <p className="text-xs text-sky-800 text-center">© 2024 Kelvin Nguyen. All rights reserved.</p>
      </footer>
    </div>
  )
}