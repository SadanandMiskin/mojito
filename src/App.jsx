import React from 'react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cocktails from './components/Cocktails';
import { Art } from './components/Art';
import Menu from './components/Menu';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      {/* <div className='h-dvh bg-black' /> */}
      <Cocktails />
      {/* <div className='h-dvh bg-black' /> */}
      <Art />
      <Menu />


    </main>
  )
}

export default App
