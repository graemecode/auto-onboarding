import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('Gather SF landing page', () => {
  it('communicates the central pickup value proposition and prototype status', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /three kitchens\.\s*one pickup\.\s*zero cross-town scramble\./i,
      }),
    ).toBeInTheDocument()
    expect(screen.getByText(/one central san francisco pickup/i)).toBeInTheDocument()
    expect(screen.getByText(/exact location is being finalized/i)).toBeInTheDocument()
  })

  it('renders exactly three fictional launch partner cards', () => {
    render(<App />)

    const partnerList = screen.getByRole('list', { name: /launch restaurant partners/i })
    const cards = within(partnerList).getAllByRole('listitem')

    expect(cards).toHaveLength(3)
    expect(within(partnerList).getByText('Miso Moon')).toBeInTheDocument()
    expect(within(partnerList).getByText('Citrus & Smoke')).toBeInTheDocument()
    expect(within(partnerList).getByText('Nonna Nova')).toBeInTheDocument()
    expect(screen.getByText(/fictional restaurants created for this prototype/i)).toBeInTheDocument()
  })

  it('offers keyboard-accessible calls to action', () => {
    render(<App />)

    expect(screen.getByRole('link', { name: /explore the menu/i })).toHaveAttribute(
      'href',
      '#restaurants',
    )
    expect(screen.getByRole('link', { name: /how pickup works/i })).toHaveAttribute(
      'href',
      '#how-it-works',
    )
  })
})
