import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-16">
      <div className="container-site text-center">
        <p className="font-mono text-xs text-muted-light mb-4">404</p>
        <h1 className="text-display text-[clamp(2rem,5vw,3.5rem)] text-foreground mb-4 leading-tight">
          Page not found.
        </h1>
        <p className="text-muted mb-8 max-w-[36ch] mx-auto">
          This page doesn't exist—or was moved. Let's get you back on track.
        </p>
        <Link href="/" className="btn btn-primary gap-2">
          <ArrowLeft size={15} />
          Back to home
        </Link>
      </div>
    </div>
  )
}
