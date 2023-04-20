import '../styles/globals.css'
import Navbar from '@/components/navbar'
import Main from '@/components/main'
import About from '@/components/about'
import Skills from '@/components/skills'
import Projects from '@/components/projects'
import Contact from '@/components/contact'

export const metadata = {
  title: 'Kursat Keskin | Front-end Web Developer',
  description: "Kursat Keskin's portfolio website",
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Main />
        <About />
        <Skills />
        <Projects />
        <Contact />
      <main>{children}</main>
      </body>
    </html>
  )
}
