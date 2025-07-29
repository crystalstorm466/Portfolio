import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Download } from "lucide-react"

export function HeroSection() {
  return (
    <section className="py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">David Holland</h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Software Developer | Computer Science Student | I use arch btw
            </p>
          </div>
          <div className="space-x-4">
            <Link href="#projects">
              <Button className="gap-1">
                View Projects <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="../resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-1 bg-transparent">
                Download Resume <Download className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
