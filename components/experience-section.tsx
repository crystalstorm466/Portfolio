import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-[800px]">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Experience & Education</h2>

          <div className="grid gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Computer Science Student</CardTitle>
                  <Badge>2022 - 2026</Badge>
                </div>
                <CardDescription>Kennesaw State University </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Bachelor of Science in Computer Science</li>
                  <li>GPA: 3.1/4.0</li>
                  <li>Relevant Coursework: Data Structures, Cryptography, Operating Systems, </li>
                  <li>Founding Officer of Linux Club</li>
                  <li>Head of Communication at Baptist Collegiate Ministry</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Linux From Scratch</CardTitle>
                  <Badge>Summer 2025</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Developed a custom Linux distro from scratch</li>
                            </ul>
              </CardContent>
            </Card>
             <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Discord Gotcha Bot Tracker</CardTitle>
                  <Badge>Summer 2025</Badge>
                </div>
                <CardDescription>A Custom discord bot that is able to automatically track when people take pictures and post in a discord server and rewards points based off an Excel spreadsheet</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Developed a Discord bot in C++ </li>
                  <li>Listens for any messages in a Discord server and checks if user is in a spreadsheet and rewards points based on the spreadsheet</li>npm install --legacy-peer-deps
                </ul>
              </CardContent>
            </Card>


            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Technical Skills</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">C</Badge>
                  <Badge variant="secondary">C++</Badge>
                  <Badge variant="secondary">R</Badge>
                  <Badge variant="secondary">Java</Badge>
                  <Badge variant="secondary">C#</Badge>
                  <Badge variant="secondary">Git</Badge>
                  <Badge variant="secondary">SQL</Badge>
                 
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
