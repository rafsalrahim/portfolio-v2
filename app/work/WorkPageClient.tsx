'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { projects, type ProjectCategory } from '@/lib/data'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/FadeIn'

type Filter = ProjectCategory | 'all'

const filters: { label: string; value: Filter }[] = [
  { label: 'All', value: 'all' },
  { label: 'Infrastructure', value: 'infrastructure' },
  { label: 'Blockchain', value: 'blockchain' },
  { label: 'Automation', value: 'automation' },
  { label: 'Platform', value: 'platform' },
  { label: 'Open Source', value: 'open-source' },
]

export function WorkPageClient() {
  const [activeFilter, setActiveFilter] = useState<Filter>('all')
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null)

  const filtered =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category.includes(activeFilter))

  return (
    <div className="pt-16">
      {/* Page header */}
      <section className="section pb-10 md:pb-12 bg-background">
        <div className="container-site">
          <FadeIn>
            <p className="text-label mb-3">Selected work</p>
            <h1 className="text-display text-[clamp(2.4rem,6vw,4rem)] text-foreground leading-tight mb-6">
              Projects &{' '}
              <span className="italic text-muted">Case Studies</span>
            </h1>
            <p className="text-muted text-base md:text-lg leading-relaxed max-w-[52ch]">
              Real systems I've designed, built, and deployed. Each entry covers
              the problem, what I built, the stack, and what shipped.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Filters */}
      <div className="sticky top-[4.5rem] z-30 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="container-site">
          <div className="flex items-center gap-1 overflow-x-auto py-3 no-scrollbar">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-150 min-h-[36px] ${
                  activeFilter === f.value
                    ? 'bg-foreground text-[#fafaf9]'
                    : 'text-muted hover:text-foreground hover:bg-[#f5f5f4]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects list */}
      <section className="bg-surface">
        <div className="container-site py-10 md:py-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-4"
            >
              {filtered.length === 0 && (
                <p className="text-muted text-sm py-12 text-center">
                  No projects in this category yet.
                </p>
              )}

              {filtered.map((project, i) => {
                const isExpanded = expandedSlug === project.slug
                return (
                  <motion.article
                    key={project.slug}
                    id={project.slug}
                    layout
                    className="border border-border rounded-2xl overflow-hidden bg-surface transition-shadow duration-200 hover:shadow-[0_4px_24px_rgba(28,25,23,0.07)]"
                  >
                    {/* Header row — always visible */}
                    <button
                      className="w-full text-left p-6 md:p-8"
                      onClick={() =>
                        setExpandedSlug(isExpanded ? null : project.slug)
                      }
                      aria-expanded={isExpanded}
                    >
                      <div className="flex items-start gap-4 md:gap-6">
                        <span className="font-mono text-xs text-muted-light pt-1 flex-shrink-0 w-7 hidden sm:block">
                          {String(i + 1).padStart(2, '0')}
                        </span>

                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 mb-2">
                            <h2 className="text-base md:text-lg font-semibold text-foreground">
                              {project.title}
                            </h2>
                            <span className="font-mono text-xs text-muted-light sm:ml-2">
                              {project.year}
                            </span>
                          </div>
                          <p className="text-sm text-muted mb-3 leading-relaxed">
                            {project.tagline}
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {project.category.map((cat) => (
                              <span
                                key={cat}
                                className="px-2.5 py-0.5 rounded-full bg-[#f5f5f4] border border-border text-xs font-medium text-muted capitalize"
                              >
                                {cat.replace('-', ' ')}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex-shrink-0 ml-2">
                          <motion.div
                            animate={{ rotate: isExpanded ? 45 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="w-8 h-8 rounded-full border border-border flex items-center justify-center"
                          >
                            <ArrowUpRight size={14} className="text-muted" />
                          </motion.div>
                        </div>
                      </div>
                    </button>

                    {/* Expanded case study */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.32, ease: [0.21, 0.47, 0.32, 0.98] }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 md:px-8 pb-8 border-t border-[#f5f5f4]">
                            <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                              {/* Left: Problem + What I Did */}
                              <div className="flex flex-col gap-7">
                                <div>
                                  <p className="text-label mb-2">The problem</p>
                                  <p className="text-sm text-[#57534e] leading-relaxed">
                                    {project.problem}
                                  </p>
                                </div>
                                <div>
                                  <p className="text-label mb-2">What I built</p>
                                  <p className="text-sm text-[#57534e] leading-relaxed">
                                    {project.whatIDid}
                                  </p>
                                </div>
                              </div>

                              {/* Right: Stack + Outcome + Link */}
                              <div className="flex flex-col gap-7">
                                <div>
                                  <p className="text-label mb-3">Stack</p>
                                  <div className="flex flex-wrap gap-1.5">
                                    {project.stack.map((tech) => (
                                      <span key={tech} className="tag-chip">
                                        {tech}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                                <div>
                                  <p className="text-label mb-2">Outcome</p>
                                  <p className="text-sm text-[#57534e] leading-relaxed">
                                    {project.outcome}
                                  </p>
                                </div>
                                {project.link && (
                                  <div>
                                    <a
                                      href={project.link}
                                      target={
                                        project.link.startsWith('http')
                                          ? '_blank'
                                          : undefined
                                      }
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-[#44403c] transition-colors group border-b border-[#1c1917] pb-0.5"
                                    >
                                      {project.linkLabel || 'View project'}
                                      <ExternalLink
                                        size={12}
                                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                                      />
                                    </a>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.article>
                )
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-background border-t border-border">
        <div className="container-site text-center">
          <FadeIn>
            <p className="text-label mb-3">Have a project?</p>
            <h2 className="text-display text-[clamp(1.8rem,4vw,2.5rem)] text-foreground mb-6 leading-tight">
              Let's build something together.
            </h2>
            <a
              href="mailto:rafsalkrahim@gmail.com"
              className="btn btn-primary text-base px-6"
            >
              Get in touch
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
