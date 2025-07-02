import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import React, { useRef } from 'react'
import { useMediaQuery } from 'react-responsive'

const Hero = () => {
  const videoRef = useRef()

  const isMobile = useMediaQuery({
    maxWidth: 767
  })

  useGSAP(() => {

      const heroSplit = new SplitText('.title' , {
        type: 'chars, words'
      })
       const paraGraphSplit = new SplitText('.subtitle' , {
        type: 'lines'
      })

      heroSplit.chars.forEach((char) => char.classList.add('text-gradient'))


      gsap.from(heroSplit.chars , {
        opacity:0,
        y: 100,
        duration: 1.8,
        ease: 'expo.out',
        stagger: 0.06
      })

      gsap.from(paraGraphSplit.lines , {
        opacity: 0,
        duration: 1.8,
        y: 100,
        ease: 'expo.out',
        stagger: 0.06,
        delay: 0.5
      })

      gsap.timeline({
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      }).to('.right-leaf' , {
        y: 200,
      }, 0).to('.left-leaf' , {
        y: -200
      } , 0)

      const start = isMobile ? 'top 50' : 'center 60%'
      const end = isMobile ? '190% 50%' : 'bottom top'

      let tl = gsap.timeline({
	 scrollTrigger: {
		trigger: "video",
		start: start,
		end: end,
		scrub: true,
		pin: true,
	 },
	});

	videoRef.current.onloadedmetadata = () => {
	 tl.to(videoRef.current, {
		currentTime: videoRef.current.duration,
	 });
	};

  }  , [])

  return (
    <>
        <section id='hero' className='noisy'>
            <h1 className='title'>Mojito</h1>

            <img
                src='/images/hero-left-leaf.png'
                className='left-leaf'
            />

            <img
                src='/images/hero-right-leaf.png'
                className='right-leaf'
            />

            <div className='body'>
                <div className='content'>

                  <div className='space-y-5 hidden md:block'>
                    <p>Cool. Crip. Classic</p>
                    <p className='subtitle'>
                      Sip the Spirit
                      <br /> Of the summer
                    </p>
                  </div>

                  <div className='view-cocktails'>
                    <p className='subtitle'>
                      It is not just a drink to go but an experience to try once a life , once a day, every moment.
                    </p>
                    <a href='#cocktails'>View Cocktails</a>
                  </div>
                </div>
            </div>
        </section>

        <div className='video absolute inset-0'>
            <video
                ref={videoRef}
                src='/videos/output.mp4'
                muted
                playsInline
                preload='auto'
              />
        </div>
    </>
  )
}

export default Hero