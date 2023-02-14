import '@/styles/global.scss'
import 'normalize.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  )
}
