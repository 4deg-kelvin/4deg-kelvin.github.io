import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Github, Linkedin, Mail } from "lucide-react"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (

    <div className="flex flex-col min-h-screen bg-white text-black font-inter">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-sky-100">
        <Link className="flex items-center justify-center" href="#">
          <BookOpen className="h-6 w-6 text-sky-600" />
          <span className="sr-only">NLP Researcher </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-sky-600 hover:underline underline-offset-4" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:text-sky-600 hover:underline underline-offset-4" href="#projects">
            Projects
          </Link>
          <Link className="text-sm font-medium hover:text-sky-600 hover:underline underline-offset-4" href="#publications">
            Publications
          </Link>
          <Link className="text-sm font-medium hover:text-sky-600 hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-sky-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="relative w-80 h-64 mx-auto mb-4">
                  <Image
                    src="/profile.jpg"
                    alt="Kelvin"
                    layout="intrinsic"
                    width={450}
                    height={450}
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-sky-900">
                  Kelvin Nguyen
                </h1>
                <p className="mx-auto max-w-[700px] text-sky-800 md:text-xl">
                  NLP Developer & Researcher | 🎄Stanford University Student | Snoopy Enthusiast
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-sky-600 text-white hover:bg-sky-700" asChild>
                  <Link href="#contact">Contact Me</Link>
                </Button>
                <Button className="bg-white text-sky-600 border border-sky-600 hover:bg-sky-50" variant="outline" asChild>
                  <Link href="#projects">View Projects</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-sky-900">About Me</h2>
            <p className="mt-4 max-w-[700px] text-sky-800 md:text-xl">
              I'm Kelvin Nguyen, an undergraduate Computer Science student at Stanford University, as well as a part-time data science/AI developer for
              Edwards Lifesciences.
              I'm also currently an NLP researcher, focusing on concept representations in LLM latent spaces, 
              and I am developing AI-driven platforms for medical technology companies. 
            </p>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 bg-sky-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-sky-900">Projects</h2>
            <div className="flex justify-center items-center min-h-screen"> 
              <div className="w-5/6">
              <Carousel>
                  <CarouselContent className=" -ml-2 md:-ml-4">
                    <CarouselItem className=" md:basis-1/2 lg:basis-1/2 p-2 md:pl-4">
                      <Card className="bg-white border-sky-200">
                        <CardHeader>
                          <CardTitle className="text-sky-800">
                            <Link href="/projects/concept-representation" className="hover:underline">
                              Concept Representations in LLM Latent Spaces
                            </Link>
                          </CardTitle>
                          <CardDescription className="text-sky-600">Examining how LLMs encode conceptual relationships in their vector forms of words</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-sky-700">
                          This ongoing project explores whether contemporary language models can identify and extract different context-dependent aspects of concepts from their embeddings, using polysemous words and clustering sentences containing those words. 
                          The results show that language models can encode and describe context-specific conceptual aspects, while also 
                          demonstrating an ability to understand and evaluate conceptual cohesiveness in sentence clusters.
                          </p>
                          <Button className="mt-4 bg-sky-600 text-white hover:bg-sky-700" asChild>
                            <Link href="/projects/concept-representation">Learn More</Link>
                          </Button>
                        </CardContent>
                      </Card>
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/2 p-2 md:pl-4">
                    <Card className="bg-white border-sky-200">
                      <CardHeader>
                        <CardTitle className="text-sky-800">
                          <Link href="/projects/edwards-lifesciences" className="hover:underline">
                            Edwards Lifesciences <span className="italic text-red-500">(proprietary)</span>
                          </Link>
                        </CardTitle>
                        <CardDescription className="text-sky-600">Creating AI-driven Streamlit platforms, integrated with Snowflake</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-sky-700">
                          Creating AI-platforms with Streamlit as a data science/AI developer, connected to Snowflake Data Lake patient data, to be used by all business units. 
                        </p>
                        <Button className="mt-4 bg-sky-600 text-white hover:bg-sky-700" asChild>
                          <Link href="/projects/edwards-lifesciences">Learn More</Link>
                        </Button>
                      </CardContent>
                    </Card>
                    
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/2 p-2 md:pl-4">
                  <Card className="bg-white border-sky-200">
                      <CardHeader>
                        <CardTitle className="text-sky-800">
                          <Link href="/projects/physionet" className="hover:underline">
                            Physionet Challenge 2024 Finalist 
                          </Link>
                        </CardTitle>
                        <CardDescription className="text-sky-600">Training computer vision transformers to deskew images for ECG digitizaition</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-sky-700">
                          Finetuned a computer vision model to analyze paper ECG images in order to deskew them for digitization as part of the Physionet Challenge 2024. 
                          Accepted into Computing in Cardiology 2024, pending publication.
                        </p>
                        <Button className="mt-4 bg-sky-600 text-white hover:bg-sky-700" asChild>
                          <Link href="/projects/physionet">Learn More</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                </CarouselContent>

                <CarouselPrevious/>
                <CarouselNext/>

                </Carousel>
              </div>
            </div>
          </div>
        </section>
        <section id="publications" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-sky-900">Publications</h2>
            <ul className="space-y-4">
              <li>
                <Link href="https://web.stanford.edu/class/cs224n/project.html" className="hover:text-sky-700">
                  <h3 className="text-xl font-semibold text-sky-800 hover:text-sky-700 hover:underline">
                    "Diving Under the Hood: Exploring LLM Conceptual Understanding Through Latent Embeddings"
                  </h3>
                  <p className="text-sm text-sky-600">
                    Preprint, CS 224N Project, 2024
                  </p>
                </Link>
              </li>
              <li>
                <HoverCard>
                  <HoverCardTrigger>
                    <h3 className="text-xl font-semibold text-sky-800 hover:text-sky-700 hover:underline">
                    "Fusion of Deep Learning and Rule-Based Techniques for Enhanced Paper-Based ECG Digitization"
                    </h3>
                  </HoverCardTrigger>
                  <HoverCardContent>
                    Currently preprint, will be published in November
                  </HoverCardContent>
                </HoverCard>

                <p className="text-sm text-sky-600">
                  Preprint, Computing in Cardiology, 2024
                </p>
              </li>
            </ul>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-sky-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-sky-900">Contact Me</h2>
            <div className="max-w-md mx-auto text-center">
              <p className="mb-4 text-sky-800">Feel free to reach out to me for collaborations, questions, or just to connect!</p>
              <p className="mb-4 text-sky-800 bold"><em>Email: </em>kelvinknguyen [at] stanford </p>
              <div className="flex justify-center space-x-4">
                <a href="mailto:kelvinknguyen@stanford.edu" className="text-sky-600 hover:text-sky-700">
                  <Mail className="h-6 w-6" />
                  <span className="sr-only">Email</span>
                </a>
                <a href="https://linkedin.com/in/kelvinknguyen27" className="text-sky-600 hover:text-sky-700">
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href="https://github.com/4deg-kelvin" className="text-sky-600 hover:text-sky-700">
                  <Github className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-sky-200 bg-sky-100">
        <p className="text-xs text-sky-800">© 2024 Kelvin Nguyen All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-sky-700 hover:text-sky-900" href="https://linkedin.com/in/kelvinkn">
            LinkedIn
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-sky-700 hover:text-sky-900" href="https://github.com/4deg-kelvin">
            GitHub
          </Link>
        </nav>
      </footer>
    </div>
  )
}
