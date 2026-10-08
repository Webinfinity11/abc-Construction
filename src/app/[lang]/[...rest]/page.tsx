import { notFound } from 'next/navigation'

// Always 404s, so there is nothing to validate for instant navigation.
export const instant = false

// Unknown paths render the localized app/[lang]/not-found.tsx.
export default function CatchAll() {
  notFound()
}
