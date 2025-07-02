import React from 'react'
import { featureLists, goodLists } from '../../constants'
import { useMediaQuery } from 'react-responsive'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export const Art = () => {

  const isMobile = useMediaQuery({
    maxWidth: 767
  })

  useGSAP(() => {
      const start = isMobile ? 'top top': 'top top'

      const maskTimeLine = gsap.timeline({
        scrollTrigger: {
          trigger: '#art',
          start,
          end: 'bottom center',
          scrub: 1.5 ,
          pin: true
        }
      })

      maskTimeLine.to(
        '.will-fade' , {
          opacity: 0,
          stagger: 0.2,
          ease: 'power1.inOut'
        }
      )
      .to('.masked-img' , {
        scale: 1.3,
        maskPosition: 'center',
        maskSize: '400%',
        duration: 3,
        ease: 'power1.inOut'
      })
      .to('#masked-content' , {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 1,
        ease: 'power2.in'
      })
  } , [])

  return (
    <div id='art'>

        <div className='container mx-auto h-full pt-20'>

            <h2 className='will-fade'>The Art</h2>
            <div className='content'>


              <ul className='space-y-4 will-fade'>
                  {goodLists.map((features, index) => (

                    <li key={index} className='flex items-center gap-2'>
                       <img src='/images/check.png' />
                       <p>{features}</p>
                    </li>
                  ))}
              </ul>

              <div className='cocktail-img'>
                    <img src='/images/under-img.jpg' className='abs-center masked-img size-full object-contain' />
              </div>

            <ul className='space-y-4 will-fade'>
                  {featureLists.map((features, index) => (

                    <li key={index} className='flex justify-start items-center gap-2'>
                       <img src='/images/check.png' />
                       <p>{features}</p>
                    </li>
                  ))}
              </ul>
            </div>
            <div className='masked-container'>
              <h2 className='will-fade'>Sip Worthy Perfection</h2>
              <div id='masked-content'>
                <h3>Made with craft, Poured with passion.</h3>
                <p>Enjoy the biss with a sip, until the sip ends, You'd love it.</p>
              </div>
            </div>
        </div>
    </div>
  )
}
