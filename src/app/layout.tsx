import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'نون',
  description: 'نون - خرید نان و سایر کالا ها"',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <body >{children}</body>
    </html>
  )
}
