"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Star } from "lucide-react"
import Link from "next/link"

interface Repository {
  id: number
  name: string
  description: string
  html_url: string
  homepage: string
  stargazers_count: number
  language: string
  topics: string[]
}

export function ProjectsSection() {
  const [repos, setRepos] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    async function fetchGithubRepos() {
      try {
        setLoading(true)
        // Replace 'yourusername' with your actual GitHub username
        const response = await fetch("https://api.github.com/users/crystalstorm466/repos?sort=updated&per_page=6")

        if (!response.ok) {
          throw new Error("Failed to fetch repositories")
        }

        const data = await response.json()
        setRepos(data)
        setLoading(false)
      } catch (err) {
        console.error("Error fetching GitHub repositories:", err)
        setError("Failed to load GitHub projects. Please try again later.")
        setLoading(false)
      }
    }

    fetchGithubRepos()
  }, [])

  return (
    <section id="projects" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Projects</h2>

          {loading && <p className="text-center">Loading projects from GitHub...</p>}
          {error && <p className="text-center text-red-500">{error}</p>}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo) => (
              <Card key={repo.id} className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle className="truncate">{repo.name}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    {repo.language && <Badge variant="outline">{repo.language}</Badge>}
                    <div className="flex items-center">
                      <Star className="h-3.5 w-3.5 mr-1" />
                      <span>{repo.stargazers_count}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground line-clamp-3">{repo.description || "No description provided"}</p>
                  {repo.topics && repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-4">
                      {repo.topics.slice(0, 3).map((topic) => (
                        <Badge key={topic} variant="secondary" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Link href={repo.html_url} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-1 bg-transparent">
                      <Github className="h-3.5 w-3.5" />
                      Code
                    </Button>
                  </Link>
                  {repo.homepage && (
                    <Link href={repo.homepage} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="gap-1">
                        <ExternalLink className="h-3.5 w-3.5" />
                        Demo
                      </Button>
                    </Link>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="https://github.com/crystalstorm466" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2 bg-transparent">
                <Github className="h-4 w-4" />
                View All Projects on GitHub
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
