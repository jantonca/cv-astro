import type { TemplateConfig } from '@/types/templates'

export const TEMPLATES: Record<string, TemplateConfig> = {
  /*
   * `default` is the elegant two-page design; `classic` is the original
   * sidebar layout. The component folders still carry their original names
   * (`templates/default/` backs `classic`) — renaming them is a separate,
   * purely cosmetic change.
   */
  default: {
    name: 'default',
    displayName: 'Elegant Template',
    description:
      'Two-page A4 design on a warm ground: contact strip, outlined title bar, chip skills',
  },
  classic: {
    name: 'classic',
    displayName: 'Classic Template',
    description: 'Clean and professional CV template with sidebar layout',
  },
  ats: {
    name: 'ats',
    displayName: 'ATS Template',
    description:
      'Single-column, plain-text template optimised for applicant tracking systems',
  },
}

export function getAvailableTemplates(): TemplateConfig[] {
  return Object.values(TEMPLATES)
}

export function getTemplateConfig(templateName: string): TemplateConfig {
  return TEMPLATES[templateName.toLowerCase()] || TEMPLATES.default
}

export function isValidTemplate(templateName: string): boolean {
  return (templateName ?? '').toLowerCase() in TEMPLATES
}

export function getActiveTemplateName(): string {
  // Vite only exposes prefixed variables on `import.meta.env`, so a bare
  // CV_TEMPLATE set in the shell or in `.env` never reached this function and
  // every build silently fell back to 'default'. This module is evaluated
  // server-side only (page frontmatter), so `process.env` is the reliable
  // source; `import.meta.env` is kept as a fallback.
  // Typed locally rather than pulling in @types/node for one lookup.
  const nodeEnv = (
    globalThis as { process?: { env?: Record<string, string | undefined> } }
  ).process?.env

  const templateName =
    nodeEnv?.CV_TEMPLATE || import.meta.env.CV_TEMPLATE || 'default'
  return isValidTemplate(templateName) ? templateName : 'default'
}
