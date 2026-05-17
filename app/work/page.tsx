import type { Metadata } from 'next'
import { WorkPageClient } from './WorkPageClient'

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Systems, infrastructure, and blockchain projects—case studies from architecture to deployment.',
}

export default function WorkPage() {
  return <WorkPageClient />
}
