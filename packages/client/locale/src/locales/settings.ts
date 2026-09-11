/** `settings.locale` namespace dictionaries (the Language row's copy). */

/** Simplified Chinese dictionary (the key-set source of truth). */
export const zh = {
  'language.title': '语言',
  'onboarding.title': '选择显示语言',
  'onboarding.description': '请选择界面的默认语言。您可以随时在“设置”中更改它。',
  'onboarding.continue': '继续',
} satisfies Record<string, string>

/** The settings.locale namespace key union. */
export type SettingsLocaleKey = keyof typeof zh

/** English dictionary, checked complete against the zh key set. */
export const en = {
  'language.title': 'Language',
  'onboarding.title': 'Choose display language',
  'onboarding.description': 'Select the default language for the interface. You can change this at any time in Settings.',
  'onboarding.continue': 'Continue',
} satisfies Record<SettingsLocaleKey, string>

/** Brazilian Portuguese dictionary, checked complete against the zh key set. */
export const ptBR = {
  'language.title': 'Idioma',
  'onboarding.title': 'Escolha o idioma de exibição',
  'onboarding.description': 'Selecione o idioma padrão para a interface. Você pode alterá-lo a qualquer momento em Configurações.',
  'onboarding.continue': 'Continuar',
} satisfies Record<SettingsLocaleKey, string>
