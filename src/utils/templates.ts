import type { TemplateConfig } from '@/types/templates'

export const TEMPLATES: Record<string, TemplateConfig> = {
  default: {
    name: 'default',
    displayName: 'Default Template',
    description: 'Clean and professional CV template with sidebar layout',
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
  const templateName = import.meta.env.CV_TEMPLATE || 'default'
  return isValidTemplate(templateName) ? templateName : 'default'
}
