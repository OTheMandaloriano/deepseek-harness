import { useState, useEffect, useRef } from 'react'
import type { ReactNode } from 'react'
import type { PropsRuntime, InjectFace } from '@deepseek-ai/dsh-client-ui-slots'
import { Button, Modal } from '@deepseek-ai/dsh-client-ui-primitives'
import type { LocaleRuntime } from './index.ts'
import type { SettingsScope } from '@deepseek-ai/dsh-client-ui-settings/client'
import type { LocaleSettings } from '../locale-settings.ts'
import type { SettingsLocaleKey } from '../locales/settings.ts'
import { FLAG_SVGS } from './flags.ts'
import css from './LanguageOnboardingDialog.module.css'

export interface LanguageOnboardingInjected {
  locale: LocaleRuntime
  host: SettingsScope<LocaleSettings>
  t: (key: SettingsLocaleKey) => string
}

export type LanguageOnboardingProps =
  PropsRuntime<'settings.onboarding'> & InjectFace<LanguageOnboardingInjected>

const ignoreImplicitDismiss = (): void => {}

export function LanguageOnboardingDialog(props: LanguageOnboardingProps): ReactNode {
  const { complete, locale, host, t } = props
  const hostSnapshot = host.getSnapshot()
  const titleRef = useRef<HTMLHeadingElement | null>(null)

  // Has the user already explicitly saved a locale preference in Host settings?
  const hasPreference = hostSnapshot.value?.preference !== undefined

  useEffect(() => {
    if (hasPreference) {
      complete()
    }
  }, [hasPreference, complete])

  const [selected, setSelected] = useState<string>(() => locale.getSnapshot().active)

  useEffect(() => {
    return locale.subscribe(() => {
      setSelected(locale.getSnapshot().active)
    })
  }, [locale])

  useEffect(() => {
    const appRoot = document.getElementById('root')
    if (appRoot === null) return
    const previous = appRoot.inert
    appRoot.inert = true
    return () => { appRoot.inert = previous }
  }, [])

  useEffect(() => {
    titleRef.current?.focus()
  }, [])

  if (hasPreference) return null

  const handleSelect = (id: string) => {
    setSelected(id)
    locale.setLocale(id)
    try { localStorage.setItem('dsh.locale', id) } catch {}
  }

  const handleConfirm = () => {
    locale.setLocale(selected)
    try { localStorage.setItem('dsh.locale', selected) } catch {}
    complete()
  }

  const languages = [
    { id: 'pt-BR', flag: '🇧🇷', name: 'Português', region: 'Brasil' },
    { id: 'en', flag: '🇺🇸', name: 'English', region: 'United States' },
    { id: 'zh', flag: '🇨🇳', name: '中文', region: '简体中文' },
  ]

  const titleText = t('onboarding.title')
  const descriptionText = t('onboarding.description')
  const continueText = t('onboarding.continue')

  return (
    <Modal
      open
      title={titleText}
      onClose={ignoreImplicitDismiss}
      headless
      className={css.dialog as string}
    >
      <div className={css.content}>
        <h2 ref={titleRef} className={css.title} tabIndex={-1}>
          {titleText}
        </h2>
        <p className={css.description}>
          {descriptionText}
        </p>

        <div className={css.optionsList} role="radiogroup" aria-label={titleText}>
          {languages.map((lang) => {
            const isSelected = selected.toLowerCase() === lang.id.toLowerCase()
            return (
              <button
                key={lang.id}
                type="button"
                role="radio"
                aria-checked={isSelected}
                className={`${css.optionCard} ${isSelected ? css.optionCardActive : ''}`}
                onClick={() => handleSelect(lang.id)}
              >
                <div className={css.optionLeft}>
                  <span className={css.flag} aria-hidden="true" dangerouslySetInnerHTML={{ __html: FLAG_SVGS[lang.id] || '' }} />
                  <div className={css.labels}>
                    <span className={css.optionName}>{lang.name}</span>
                    <span className={css.optionRegion}>{lang.region}</span>
                  </div>
                </div>
                <div className={css.radioIndicator}>
                  {isSelected && <div className={css.radioDot} />}
                </div>
              </button>
            )
          })}
        </div>

        <div className={css.actions}>
          <Button
            variant="primary"
            className={css.primary}
            onClick={handleConfirm}
          >
            {continueText}
          </Button>
        </div>
      </div>
    </Modal>
  )
}
