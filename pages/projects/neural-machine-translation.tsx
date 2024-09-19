import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function NeuralMachineTranslation() {
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
            Neural Machine Translation
          </h1>
          <p className="text-xl text-sky-800 mb-8">
            Improving translation quality for low-resource languages
          </p>
          <div className="prose max-w-none text-sky-700">
            <h2 className="text-2xl font-semibold text-sky-800 mt-8 mb-4">Project Overview</h2>
            <p>
              This project focuses on enhancing translation capabilities for languages with limited training data,
              using transfer learning and data augmentation techniques. Our goal is to bridge the gap between
              high-resource and low-resource languages in machine translation, making quality translation more
              accessible for a wider range of languages.
            </p>
            <h2 className="text-2xl font-semibold text-sky-800 mt-8 mb-4">Key Objectives</h2>
            <ul className="list-disc pl-6">
              <li>Develop novel transfer learning techniques for cross-lingual knowledge transfer</li>
              <li>Create effective data augmentation methods for low-resource languages</li>
              <li>Implement and evaluate multilingual translation models</li>
              <li>Collaborate with native speakers to ensure translation quality and cultural appropriateness</li>
            </ul>
            <h2 className="text-2xl font-semibold text-sky-800 mt-8 mb-4">Current Progress</h2>
            <p>
              We've successfully implemented a baseline multilingual translation model covering 100 languages. For
              low-resource languages, we've seen significant improvements using our novel transfer learning techniques.
              We're currently working on refining our data augmentation pipeline, which has shown promising results in
              preliminary experiments.
            </p>
            <h2 className="text-2xl font-semibold text-sky-800 mt-8 mb-4">Future Directions</h2>
            <p>
              Our next steps include expanding our model to cover more low-resource languages and dialects. We're also
              exploring the integration of unsupervised learning techniques to further improve translation quality for
              languages with very limited parallel data. We plan to open-source our model and tools to encourage
              community contributions and accelerate progress in this critical area of NLP research.
            </p>
          </div>
          <Link href="/" passHref>
            <Button className="mt-8 bg-sky-600 text-white hover:bg-sky-700">
            Back to Projects
            </Button>
         </Link>
        </div>
      </main>
      <footer className="py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-sky-200 bg-sky-100">
        <p className="text-xs text-sky-800 text-center">© 2023 Dr. Jane Doe. All rights reserved.</p>
      </footer>
    </div>
  )
}