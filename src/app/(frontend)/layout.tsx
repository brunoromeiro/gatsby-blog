import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import './styles.css'

export const metadata: Metadata = {
  title: 'Bruno Romeiro',
  description: 'Engenheiro de Software, Tech Lead e apaixonado por compartilhar conhecimento.',
}

export default function FrontendLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
