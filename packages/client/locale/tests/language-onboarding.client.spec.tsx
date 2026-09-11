// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { LanguageOnboardingDialog } from '../src/client/LanguageOnboardingDialog.tsx'
import type { LanguageOnboardingProps } from '../src/client/LanguageOnboardingDialog.tsx'
import { ptBR } from '../src/locales/settings.ts'

afterEach(cleanup)

describe('LanguageOnboardingDialog', () => {
  function makeProps(hasPreference = false, initialActive = 'en') {
    const complete = vi.fn()
    const setLocale = vi.fn()
    const listeners = new Set<() => void>()

    const locale = {
      getSnapshot: () => ({
        active: initialActive,
        locales: [
          { id: 'zh', label: '中文' },
          { id: 'en', label: 'English' },
          { id: 'pt-BR', label: 'Português (Brasil)' },
        ],
        revision: 0,
      }),
      setLocale,
      subscribe: (fn: () => void) => {
        listeners.add(fn)
        return () => listeners.delete(fn)
      },
    } as unknown as LanguageOnboardingProps['locale']

    const host = {
      getSnapshot: () => ({
        status: 'ready' as const,
        mode: 'durable' as const,
        value: hasPreference ? { preference: 'en' } : undefined,
        revision: 0,
        writable: true,
      }),
    } as unknown as LanguageOnboardingProps['host']

    const t = (key: keyof typeof ptBR) => ptBR[key] ?? key

    const props: LanguageOnboardingProps = {
      complete,
      locale,
      host,
      t,
      stepId: 'language-selection',
      openSection: vi.fn(),
    } as unknown as LanguageOnboardingProps

    return { props, complete, setLocale }
  }

  it('immediately completes if user already has an explicit locale preference', () => {
    const { props, complete } = makeProps(true)
    const { container } = render(<LanguageOnboardingDialog {...props} />)
    expect(complete).toHaveBeenCalled()
    expect(container.innerHTML).toBe('')
  })

  it('renders language options and allows selecting pt-BR when no preference exists', () => {
    const { props, complete, setLocale } = makeProps(false)
    render(<LanguageOnboardingDialog {...props} />)

    expect(screen.getByText('Escolha o idioma de exibição')).toBeDefined()
    expect(screen.getByText('Português')).toBeDefined()
    expect(screen.getByText('English')).toBeDefined()
    expect(screen.getByText('中文')).toBeDefined()

    // Click on Português (Brasil)
    const ptBtn = screen.getByText('Português').closest('button')
    expect(ptBtn).toBeDefined()
    fireEvent.click(ptBtn!)

    expect(setLocale).toHaveBeenCalledWith('pt-BR')

    // Click on Continuar
    const continueBtn = screen.getByText('Continuar')
    fireEvent.click(continueBtn)

    expect(complete).toHaveBeenCalled()
  })
})
