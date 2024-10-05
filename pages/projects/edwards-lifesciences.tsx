import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function EdwardsLifesciences() {
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
            Edwards Lifesciences
          </h1>
          <p className="text-xl text-sky-800 mb-8">
            Creating AI-driven Streamlit platforms, integrated with Snowflake
            <br/><br/>
            <em>Current Position: </em> Data Science/AI Contingent Developer
          </p>
          <div className="prose max-w-none text-sky-700">
            <h2 className="text-2xl font-semibold text-sky-800 mt-8 mb-4">Project Overview</h2>
            <p>
              This project focuses on developing AI-driven Streamlit platforms for Edwards Lifesciences, a global leader 
              in creating various cardiovascular technolgoies, including heart valves. I solely developed a platform to 
              be used by various business units and teams, closely collaborating with stakeholders to ensure 
              interoperability, including matching design language of previous software. The platform utilizes patient 
              data from Snowflake. 

              <em style={{color: 'blue'}}>This project is proprietary and protected by an NDA.</em>
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