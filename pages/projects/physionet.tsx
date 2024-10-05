import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function Physionet() {
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
            Physionet Challenge 2024
          </h1>
          <p className="text-xl text-sky-800 mb-8">
          Training computer vision transformers to deskew images for ECG digitizaition
          </p>
          <div className="prose max-w-none text-sky-700">
            <h2 className="text-2xl font-semibold text-sky-800 mt-8 mb-4">Project Overview</h2>
            <p>
              As part of the Physionet 2024 Challenge, I along with 4 other members in Edwards Lifesciences competed to 
              develop a computer vision pipeline to convert paper ECGs into a digital format. My task was create a pipeline 
              to deskew images of ECGs. 

              <br/><br/>
              I used a <b> computer vision transformer model, finetuning it based on synthetically generated scans 
                of ECG images.  </b> The model was trained locally on a GPU, and then dockerized and deployed to the Physionet servers. 

              Due to resource constraints, the model was not able to be used in the final product; however, the model did achieve 90% accuracy, and
              was explored as potential improvement to the rule-based method we used in our paper. 

              
            </p>
            <h2 className="text-2xl font-semibold text-sky-800 mt-8 mb-4">Publication</h2>
            <p>
              Our paper, <em> "Fusion of Deep Learning and Rule-Based Techniques for Enhanced Paper-Based ECG Digitization" </em> was accepted to the 
              Computing in Cardiology 2024 Conference. The paper details the development of our pipeline, and was given the award of <b>Best Preprint.</b> 

              <br/><br/>
              The paper was presented at the conference, and will be published in November. 
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
        <p className="text-xs text-sky-800 text-center">© 2024 Kelvin Nguyen. All rights reserved.</p>
      </footer>
    </div>
  )
}