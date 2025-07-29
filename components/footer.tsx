import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {new Date().getFullYear()} David Holland. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link href="https://github.com/crystalstorm466" target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://www.linkedin.com/in/david-holland-1a7b90339/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-4 w-4" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="mailto:dcholland_0@protonmail.com">
            <Mail className="h-4 w-4" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
