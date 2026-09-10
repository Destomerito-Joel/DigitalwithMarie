export type Resource = {
  number: string
  title: string
  positioning: string
  benefit: string
  features: string[]
  accent: string
}

export const resources: Resource[] = [
  {
    number: '01',
    title: 'From Idea to Income',
    positioning: 'Build the foundation for a digital-product business.',
    benefit: 'Turn what you know into a structured product people can understand and use.',
    features: ['Idea direction and research', 'AI-assisted product creation', 'A practical product-building path'],
    accent: 'bg-accent',
  },
  {
    number: '02',
    title: 'The ₦1M Digital Launch Kit',
    positioning: 'Learn how the offer gets sold.',
    benefit: 'Connect your product, funnel, marketing system and launch sequence in one plan.',
    features: ['Offer and funnel structure', 'Launch sequence', 'Sales infrastructure'],
    accent: 'bg-charcoal',
  },
  {
    number: '03',
    title: 'AI Digital Product Prompt Vault',
    positioning: 'Replace blank-page friction with useful starting points.',
    benefit: 'Use guided prompts to research, create, package and market without guessing what to ask.',
    features: ['Copy, adapt and use prompts', 'Creation and marketing prompts', 'Step-by-step examples'],
    accent: 'bg-[#8c9a8b]',
  },
  {
    number: '04',
    title: 'Validation Workbook',
    positioning: 'Make better decisions before you build.',
    benefit: 'Test the idea, audience and demand so your product starts with a clearer reason to exist.',
    features: ['Market research exercises', 'Audience clarity prompts', 'Demand validation checkpoints'],
    accent: 'bg-[#b98f6b]',
  },
  {
    number: '05',
    title: '30-Day Launch Planner',
    positioning: 'Turn a launch into a sequence of manageable actions.',
    benefit: 'Know what to work on each day as you move from product prep to launch week.',
    features: ['30-day planning structure', 'Weekly focus areas', 'Launch readiness prompts'],
    accent: 'bg-[#6d8290]',
  },
  {
    number: '06',
    title: 'Faceless Content & Sales Kit',
    positioning: 'Market your offer without making your face the whole strategy.',
    benefit: 'Create content that builds trust and leads people toward the product in a way that suits you.',
    features: ['Faceless content directions', 'Sales content prompts', 'Simple content planning'],
    accent: 'bg-[#9b7f8e]',
  },
  {
    number: '07',
    title: 'Funnel Template Pack',
    positioning: 'Give interested people a clear next step.',
    benefit: 'Start with reusable funnel structures instead of trying to map every page from scratch.',
    features: ['Funnel templates', 'Message flow guidance', 'Conversion-focused structure'],
    accent: 'bg-[#7f8c73]',
  },
]