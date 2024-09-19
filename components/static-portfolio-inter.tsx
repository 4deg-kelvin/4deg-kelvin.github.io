'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function StaticPortfolioInter() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black font-inter">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-sky-100">
        <Link className="flex items-center justify-center" href="#">
          <BookOpen className="h-6 w-6 text-sky-600" />
          <span className="sr-only">NLP Researcher</span>
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
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src="/placeholder.svg"
                    alt="Dr. Jane Doe"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-sky-900">
                  Dr. Jane Doe
                </h1>
                <p className="mx-auto max-w-[700px] text-sky-800 md:text-xl">
                  NLP Researcher | Machine Learning Specialist | AI Enthusiast
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
              I'm Dr. Jane Doe, a passionate NLP researcher with over 10 years of experience in the field. My work
              focuses on developing innovative language models and exploring the intersection of linguistics and machine
              learning. I'm currently a Senior Researcher at AI Labs, where I lead projects on sentiment analysis and
              machine translation.
            </p>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-sky-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-sky-900">Research Projects</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <Card className="bg-white border-sky-200">
                <CardHeader>
                  <CardTitle className="text-sky-800">
                    <Link href="/projects/multilingual-sentiment-analysis" className="hover:underline">
                      Multilingual Sentiment Analysis
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-sky-600">Developing a model for cross-lingual sentiment analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-sky-700">
                    This project aims to create a unified model capable of analyzing sentiment across multiple languages,
                    improving global social media monitoring and customer feedback analysis.
                  </p>
                  <Button className="mt-4 bg-sky-600 text-white hover:bg-sky-700" asChild>
                    <Link href="/projects/multilingual-sentiment-analysis">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="bg-white border-sky-200">
                <CardHeader>
                  <CardTitle className="text-sky-800">
                    <Link href="/projects/neural-machine-translation" className="hover:underline">
                      Neural Machine Translation
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-sky-600">Improving translation quality for low-resource languages</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-sky-700">
                    Focusing on enhancing translation capabilities for languages with limited training data, using
                    transfer learning and data augmentation techniques.
                  </p>
                  <Button className="mt-4 bg-sky-600 text-white hover:bg-sky-700" asChild>
                    <Link href="/projects/neural-machine-translation">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="publications" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-sky-900">Publications</h2>
            <ul className="space-y-4">
              <li>
                <h3 className="text-xl font-semibold text-sky-800">
                  "Advances in Cross-lingual Sentiment Analysis: A Comprehensive Survey"
                </h3>
                <p className="text-sm text-sky-600">
                  Published in Journal of Artificial Intelligence Research, 2023
                </p>
              </li>
              <li>
                <h3 className="text-xl font-semibold text-sky-800">
                  "Low-Resource Neural Machine Translation: Challenges and Solutions"
                </h3>
                <p className="text-sm text-sky-600">
                  Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics, 2022
                </p>
              </li>
              <li>
                <h3 className="text-xl font-semibold text-sky-800">
                  "Transformer-based Models for Emotion Detection in Multilingual Contexts"
                </h3>
                <p className="text-sm text-sky-600">
                  EMNLP 2021: Conference on Empirical Methods in Natural Language Processing
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
              <div className="flex justify-center space-x-4">
                <a href="mailto:jane.doe@example.com" className="text-sky-600 hover:text-sky-700">
                  <Mail className="h-6 w-6" />
                  <span className="sr-only">Email</span>
                </a>
                <a href="https://twitter.com/janedoe" className="text-sky-600 hover:text-sky-700">
                  <Twitter className="h-6 w-6" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="https://linkedin.com/in/janedoe" className="text-sky-600 hover:text-sky-700">
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href="https://github.com/janedoe" className="text-sky-600 hover:text-sky-700">
                  <Github className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-sky-200 bg-sky-100">
        <p className="text-xs text-sky-800">© 2023 Dr. Jane Doe. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-sky-700 hover:text-sky-900" href="https://twitter.com/janedoe">
            Twitter
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-sky-700 hover:text-sky-900" href="https://linkedin.com/in/janedoe">
            LinkedIn
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-sky-700 hover:text-sky-900" href="https://github.com/janedoe">
            GitHub
          </Link>
        </nav>
      </footer>
    </div>
  )
}