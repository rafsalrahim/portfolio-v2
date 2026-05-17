'use client'

import { blogPosts } from '@/lib/data'
import { FadeIn } from '@/components/ui/FadeIn'
import { SectionLabel } from '@/components/ui/SectionLabel'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

const categoryColors: Record<string, string> = {
  Engineering: 'bg-stone-100 text-stone-700',
  Blockchain: 'bg-amber-50 text-amber-800',
  Infrastructure: 'bg-slate-100 text-slate-700',
}

export function BlogSection() {
  const [featured, ...rest] = blogPosts

  return (
    <section className="section bg-background border-t border-border" id="blog">
      <div className="container-site">

        {/* Header */}
        <FadeIn blur className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <SectionLabel>Writing</SectionLabel>
            <h2 className="font-display text-[clamp(2.2rem,5vw,3rem)] text-foreground leading-tight tracking-tight">
              Latest thoughts.
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-foreground transition-colors duration-300 group flex-shrink-0"
          >
            All articles
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </FadeIn>

        {/* Featured Article — Full-width hero card */}
        {featured && (
          <FadeIn blur delay={0.1}>
            <Link href={`/blog/${featured.slug}`} className="group block mb-16">
              <motion.article
                whileHover={{ y: -3 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-border bg-surface shadow-[0_4px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.07)] transition-shadow duration-500"
              >
                {/* Image side */}
                <div className="relative h-64 lg:h-[420px] overflow-hidden bg-stone-100">
                  <Image
                    src="/hero-banner.png"
                    alt={featured.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
                </div>

                {/* Content side */}
                <div className="p-10 lg:p-14 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <span className={`text-xs font-semibold tracking-wide px-3 py-1 rounded-full ${categoryColors[featured.category] ?? 'bg-stone-100 text-stone-700'}`}>
                        {featured.category}
                      </span>
                      <span className="text-xs text-muted-light">Featured</span>
                    </div>

                    <h3 className="font-display text-[clamp(1.6rem,3.5vw,2.4rem)] text-foreground leading-[1.15] mb-6 group-hover:text-muted transition-colors duration-300">
                      {featured.title}
                    </h3>

                    <p className="text-base text-muted leading-relaxed max-w-[46ch]">
                      {featured.excerpt}
                    </p>
                  </div>

                  <div className="mt-10 pt-6 border-t border-border flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative w-9 h-9 rounded-full overflow-hidden border border-border flex-shrink-0">
                        <Image src="/portrait.png" alt="Rafsal Rahim" fill className="object-cover grayscale" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground leading-none">Rafsal Rahim</p>
                        <p className="text-xs text-muted-light mt-1">{featured.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted-light">
                      <Clock size={12} />
                      <span>{featured.readTime}</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            </Link>
          </FadeIn>
        )}

        {/* Article List — Medium-style list layout */}
        <div className="divide-y divide-border">
          {rest.map((post, i) => (
            <FadeIn key={post.slug} delay={0.15 + i * 0.12} blur direction="up">
              <Link href={`/blog/${post.slug}`} className="group block py-10">
                <motion.article
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-start"
                >
                  {/* Left: Meta + Title + Excerpt */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      {/* Author avatar + name */}
                      <div className="relative w-7 h-7 rounded-full overflow-hidden flex-shrink-0 border border-border">
                        <Image src="/portrait.png" alt="Rafsal Rahim" fill className="object-cover grayscale" />
                      </div>
                      <span className="text-xs font-medium text-foreground">Rafsal Rahim</span>
                      <span className="text-xs text-muted-light">·</span>
                      <span className="text-xs text-muted-light">{post.date}</span>
                      <span className="text-xs text-muted-light">·</span>
                      <span className="flex items-center gap-1 text-xs text-muted-light">
                        <Clock size={11} />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="font-display text-[1.35rem] md:text-2xl text-foreground leading-snug mb-3 group-hover:text-muted transition-colors duration-300">
                      {post.title}
                    </h3>

                    <p className="text-sm text-muted leading-relaxed max-w-[60ch] line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="mt-5">
                      <span className={`text-xs font-semibold tracking-wide px-2.5 py-1 rounded-full ${categoryColors[post.category] ?? 'bg-stone-100 text-stone-700'}`}>
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Right: Thumbnail + Arrow */}
                  <div className="flex items-center gap-4 md:flex-col md:items-end">
                    <div className="relative w-28 h-20 md:w-32 md:h-24 rounded-xl overflow-hidden bg-stone-100 flex-shrink-0 border border-border">
                      <Image
                        src="/hero-banner.png"
                        alt={post.title}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                      />
                    </div>
                    <div className="hidden md:flex items-center gap-1 text-xs text-muted group-hover:text-foreground transition-colors duration-300 mt-auto">
                      <span>Read</span>
                      <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </motion.article>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* Footer CTA */}
        <FadeIn delay={0.4} blur>
          <div className="mt-16 pt-10 border-t border-border text-center">
            <p className="text-sm text-muted-light mb-4">Enjoy what you read?</p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 btn btn-secondary px-8 group"
            >
              Explore all articles
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
