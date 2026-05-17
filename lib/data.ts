export type ProjectCategory =
  | 'infrastructure'
  | 'blockchain'
  | 'automation'
  | 'platform'
  | 'open-source'

export interface Project {
  slug: string
  title: string
  tagline: string
  category: ProjectCategory[]
  problem: string
  whatIDid: string
  stack: string[]
  outcome: string
  link?: string
  linkLabel?: string
  featured: boolean
  year: string
}

export const projects: Project[] = [
  {
    slug: 'blockchain-identity-layer',
    title: 'Decentralised Identity Protocol',
    tagline: 'On-chain identity for privacy-first applications',
    category: ['blockchain', 'infrastructure'],
    problem:
      'A fintech startup needed to verify user identities across multiple services without centralising sensitive personal data—an architecture that would attract regulatory risk and become a honeypot for attackers.',
    whatIDid:
      'Designed and implemented a decentralised identity layer using DIDs (Decentralised Identifiers) and verifiable credentials, backed by a Solidity smart contract registry. Built a Go microservice for credential issuance and verification, and containerised the stack for cloud deployment with Terraform-managed infrastructure on AWS.',
    stack: ['Go', 'Solidity', 'Ethereum', 'Docker', 'Terraform', 'AWS ECS', 'PostgreSQL'],
    outcome:
      'Reduced identity verification latency by 60% compared to the legacy centralised system. The protocol handled 10,000+ credential verifications per day at launch with zero security incidents in the first six months.',
    link: 'https://github.com/rafsalrahim/decentral-id',
    linkLabel: 'View on GitHub',
    featured: true,
    year: '2024',
  },
  {
    slug: 'k8s-multi-cloud-platform',
    title: 'Multi-Cloud Kubernetes Platform',
    tagline: 'Unified control plane across AWS, GCP, and on-prem',
    category: ['infrastructure', 'platform'],
    problem:
      'An engineering team was managing three separate Kubernetes clusters across clouds with no unified observability, inconsistent deployment pipelines, and manual scaling decisions—burning engineering hours and causing production incidents.',
    whatIDid:
      'Built a unified GitOps platform using ArgoCD and Terraform workspaces to manage cluster state across environments. Wrote custom Go operators to automate node scaling policies, and deployed Prometheus + Grafana stacks with SLO-driven alerting. Created Bash automation scripts to standardise runbooks.',
    stack: ['Kubernetes', 'Terraform', 'Go', 'ArgoCD', 'Prometheus', 'Grafana', 'Bash', 'Helm'],
    outcome:
      'Reduced deployment time from 40 minutes to under 4 minutes. Eliminated three classes of production incidents tied to configuration drift. The team went from firefighting to shipping.',
    link: '#',
    linkLabel: 'Case study available on request',
    featured: true,
    year: '2024',
  },
  {
    slug: 'confidential-compute-pipeline',
    title: 'Confidential Data Processing Pipeline',
    tagline: 'Secure enclaves for sensitive workloads in the cloud',
    category: ['infrastructure', 'platform'],
    problem:
      'A healthcare data company needed to process patient records in the cloud without exposing plaintext data—even to the cloud provider itself. Compliance requirements ruled out standard VM-based processing.',
    whatIDid:
      'Architected a confidential computing pipeline using AWS Nitro Enclaves and Azure Confidential Computing (CVM). Wrote Go services to run inside enclaves, cryptographically attested by a remote attestation service. Terraform modules automated enclave provisioning across regions.',
    stack: ['Go', 'AWS Nitro Enclaves', 'Azure CVM', 'Terraform', 'Python', 'Docker', 'KMS'],
    outcome:
      'Achieved full regulatory compliance without sacrificing throughput. Processed 50GB+ of sensitive records daily with cryptographic proof of data isolation. Became the foundation for the company\'s HIPAA-compliant cloud strategy.',
    link: '#',
    linkLabel: 'Architecture whitepaper on request',
    featured: true,
    year: '2023',
  },
  {
    slug: 'smart-contract-audit-tooling',
    title: 'Smart Contract Audit Automation',
    tagline: 'Static analysis tooling for Solidity security',
    category: ['blockchain', 'open-source'],
    problem:
      'Auditing Solidity smart contracts manually is slow and error-prone. Common vulnerability patterns—reentrancy, integer overflow, access control gaps—were being missed in pre-deployment reviews.',
    whatIDid:
      'Built a Python-based static analysis tool that parsed Solidity ASTs to detect 15 categories of known vulnerability patterns. Integrated the tool into CI/CD pipelines via a Docker image, with a GitHub Actions workflow that failed builds on critical findings.',
    stack: ['Python', 'Solidity', 'Docker', 'GitHub Actions', 'ANTLR4'],
    outcome:
      'Caught 3 critical reentrancy vulnerabilities before mainnet deployment in early adopter projects. Open-sourced the tool, which gained 200+ GitHub stars within three months of release.',
    link: 'https://github.com/rafsalrahim/sol-guard',
    linkLabel: 'View on GitHub',
    featured: false,
    year: '2023',
  },
  {
    slug: 'infra-as-code-accelerator',
    title: 'Infrastructure-as-Code Accelerator',
    tagline: 'Terraform module library for rapid cloud bootstrapping',
    category: ['infrastructure', 'automation', 'open-source'],
    problem:
      'Every new project at a digital agency started with weeks of copy-pasting infrastructure code from old projects, adapting it badly, and debugging undocumented side-effects.',
    whatIDid:
      'Designed a composable Terraform module library covering VPC networking, ECS/EKS clusters, RDS, S3, IAM roles, and monitoring stacks. Each module was independently versioned and published to a private Terraform registry. Wrote comprehensive documentation and example configurations.',
    stack: ['Terraform', 'AWS', 'Bash', 'Python', 'GitHub Actions', 'Checkov'],
    outcome:
      'New cloud environments went from a 2-week setup to a one-day operation. The module library became the agency\'s internal standard, used across 12+ client projects.',
    link: 'https://github.com/rafsalrahim/tf-modules',
    linkLabel: 'View on GitHub',
    featured: false,
    year: '2022',
  },
  {
    slug: 'defi-yield-aggregator',
    title: 'DeFi Yield Aggregator',
    tagline: 'Cross-protocol yield optimisation with automated rebalancing',
    category: ['blockchain'],
    problem:
      'DeFi users managing liquidity across multiple protocols were leaving yield on the table—manually checking rates and rebalancing was both time-consuming and gas-inefficient.',
    whatIDid:
      'Developed a set of Solidity smart contracts that aggregated yield sources from Aave, Compound, and Uniswap V3, with an on-chain rebalancing strategy triggered by a Go Chainlink Keeper. Built a lightweight Next.js dashboard for real-time position monitoring.',
    stack: ['Solidity', 'Go', 'Next.js', 'Chainlink', 'Hardhat', 'TypeScript', 'The Graph'],
    outcome:
      'Delivered an average 2.3% APY improvement for beta users through intelligent rebalancing. Processed $1.2M in TVL during the beta period with no contract exploits.',
    link: 'https://github.com/rafsalrahim/yield-agg',
    linkLabel: 'View on GitHub',
    featured: false,
    year: '2023',
  },
]

export interface OpenSourceProject {
  name: string
  description: string
  stars: string
  language: string
  link: string
}

export const openSourceProjects: OpenSourceProject[] = [
  {
    name: 'sol-guard',
    description: 'Static analysis tool for Solidity smart contract security auditing',
    stars: '240+',
    language: 'Python',
    link: 'https://github.com/rafsalrahim/sol-guard',
  },
  {
    name: 'tf-modules',
    description: 'Composable Terraform module library for AWS cloud bootstrapping',
    stars: '180+',
    language: 'HCL',
    link: 'https://github.com/rafsalrahim/tf-modules',
  },
  {
    name: 'enclave-attest',
    description: 'Go library for remote attestation with AWS Nitro Enclaves',
    stars: '90+',
    language: 'Go',
    link: 'https://github.com/rafsalrahim/enclave-attest',
  },
]

export const skills = [
  'Go', 'Python', 'Bash',
  'Solidity', 'TypeScript',
  'Docker', 'Kubernetes', 'Helm',
  'Terraform', 'ArgoCD', 'Ansible',
  'AWS', 'GCP', 'Azure',
  'Confidential Computing', 'Nitro Enclaves',
  'Ethereum', 'Chainlink', 'Hardhat',
  'Prometheus', 'Grafana',
  'PostgreSQL', 'Redis',
  'GitHub Actions', 'CI/CD',
]

export const credibilityStats = [
  { value: '6+', label: 'Years of engineering' },
  { value: '12+', label: 'Systems shipped' },
  { value: '3', label: 'Open source tools' },
  { value: '$1M+', label: 'TVL secured' },
]

export const servicePillars = [
  {
    number: '01',
    title: 'Application & Platform Design',
    description:
      'From API architecture to full-stack applications—I design systems with the right boundaries, the right abstractions, and a clear path to production. Blockchain, web, or hybrid.',
    tags: ['Go', 'TypeScript', 'Solidity', 'PostgreSQL', 'Redis'],
  },
  {
    number: '02',
    title: 'Automation & Deployment',
    description:
      'Infrastructure that deploys itself, pipelines that enforce quality, and runbooks that become code. I replace manual steps with repeatable, auditable automation.',
    tags: ['Docker', 'Kubernetes', 'GitHub Actions', 'ArgoCD', 'Helm'],
  },
  {
    number: '03',
    title: 'Secure Cloud Infrastructure',
    description:
      'Cloud systems engineered with security baked in—not bolted on. Confidential computing, least-privilege IAM, encrypted pipelines, and infrastructure-as-code from day one.',
    tags: ['Terraform', 'AWS', 'Confidential Computing', 'Nitro Enclaves'],
  },
]

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'architecting-for-scale',
    title: 'Architecting for Scale: Lessons from 10,000 Requests Per Second',
    excerpt: 'When you hit 10,000 requests per second, standard architectural patterns start to break down in ways nobody warns you about. Rate limiters become the bottleneck. Shared caches race. Connection pools saturate. Here is what I learned rebuilding our core Go services from the ground up.',
    date: 'Apr 12, 2026',
    readTime: '8 min read',
    category: 'Engineering',
  },
  {
    slug: 'the-illusion-of-decentralization',
    title: 'The Illusion of Decentralization in Modern DeFi',
    excerpt: 'Are we really building unstoppable applications, or are we just replacing AWS with a multi-sig wallet controlled by five people in a Discord server? A critical, unsparing look at the architectural realities of modern DeFi protocols.',
    date: 'Mar 28, 2026',
    readTime: '12 min read',
    category: 'Blockchain',
  },
  {
    slug: 'terraform-state-management',
    title: 'Advanced Terraform State Management Across Multiple Cloud Providers',
    excerpt: 'Stop relying on manual state file hacks and shared S3 buckets with no locking. A comprehensive, battle-tested guide to managing complex infrastructure drift safely across AWS, GCP, and Azure simultaneously.',
    date: 'Feb 15, 2026',
    readTime: '6 min read',
    category: 'Infrastructure',
  },
]
