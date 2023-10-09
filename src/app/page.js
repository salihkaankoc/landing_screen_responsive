import Image from 'next/image'
import Navbar from './components/Navbar'
import Section from './components/Section'

export default function Home() {
  return (
    <div id='app'>
      <Navbar />
      <Section />
    </div>
  )
}
