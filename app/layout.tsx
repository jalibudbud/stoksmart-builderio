import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Builder.io Project',
  description: 'A fresh Builder.io Next.js project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
