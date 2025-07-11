import {inter} from "@/app/fonts"
import Navbar from "@/app/components/Navbar"
import "./globals.css"
const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-gray-50 text-gray-900">
        <Navbar />
        <main className="max-w-6xl mx-auto px-4">{children}</main>
      </body>
    </html>
  )
}

export default layout