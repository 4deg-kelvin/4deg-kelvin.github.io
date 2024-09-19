// import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function MultilingualSentimentAnalysis() {
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
          <div className="prose max-w-none text-sky-700">
            <h2 className="text-2xl font-semibold text-sky-800 mt-8 mb-4">Project Overview</h2>
            <p>
              This project aims to create a unified model capable of analyzing sentiment across multiple languages,
              improving global social media monitoring and customer feedback analysis. By leveraging advanced natural
              language processing techniques and large-scale multilingual datasets, we're working to break down language
              barriers in sentiment analysis.
            </p>
            <h2 className="text-2xl font-semibold text-sky-800 mt-8 mb-4">Key Objectives</h2>
            <ul className="list-disc pl-6">
              <li>Develop a sentiment analysis model that performs consistently across 50+ languages</li>
              <li>Improve cross-lingual transfer learning techniques for low-resource languages</li>
              <li>Create a benchmark dataset for evaluating multilingual sentiment analysis models</li>
              <li>Implement the model in a user-friendly API for easy integration into existing systems</li>
            </ul>
            <h2 className="text-2xl font-semibold text-sky-800 mt-8 mb-4">Current Progress</h2>
            <p>
              We've successfully trained a preliminary model on 20 high-resource languages, achieving state-of-the-art
              performance on standard benchmarks. Our team is currently focusing on expanding the model's capabilities
              to include more languages and improving its performance on low-resource languages through innovative
              transfer learning techniques.
            </p>
            <h2 className="text-2xl font-semibold text-sky-800 mt-8 mb-4">Future Directions</h2>
            <p>
              In the coming months, we plan to release a public demo of our model, allowing researchers and industry
              professionals to test its capabilities. We're also preparing a comprehensive paper detailing our
              methodology and results for submission to a major NLP conference.
            </p>
          </div>
          {/* <Button className="mt-8 bg-sky-600 text-white hover:bg-sky-700" as={Link} href="/">
            Back to Projects
          </Button> */}
        </div>
      </main>
      <footer className="py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-sky-200 bg-sky-100">
        <p className="text-xs text-sky-800 text-center">© 2023 Dr. Jane Doe. All rights reserved.</p>
      </footer>
    </div>
  )
}