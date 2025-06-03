import { Instagram, Linkedin } from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24 bg-gradient-to-b from-background to-muted">
      <div className="z-10 max-w-2xl w-full items-center justify-between text-center space-y-8">
        <div className="space-y-4">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl">
            Coming Soon
          </h1>
          <p className="text-xl text-muted-foreground">
            We&apos;re working on something amazing. Stay tuned!
          </p>
        </div>

        <div className="flex justify-center gap-6 text-sm text-muted-foreground">
          <a 
            href="https://www.instagram.com/stronguru_app/" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors flex items-center gap-2"
          >
            <Instagram className="w-5 h-5" />
            Instagram
          </a>
          <a 
            href="https://www.linkedin.com/company/stronguru/" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors flex items-center gap-2"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
        </div>
      </div>
    </main>
  )
}
