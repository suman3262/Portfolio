import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
const TypeWriter = () => {
  
      
    
      const handleDone = () => {
        console.log(`Done after 5 loops!`)
      }
    
      return (
        <div className='App'>
          <h1 style={{ paddingTop: '3rem', margin: 'auto 0', fontWeight: 'normal' }}>
            I a'm a{' '}
            <span style={{ color:'orchid', fontWeight: 'thin' ,textShadow:'initial'}}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={['Learner', 'Coader', 'Frontend Developer']}
                loop={550}
                cursor
                cursorStyle='_'
                typeSpeed={40}
                deleteSpeed={50}
                delaySpeed={1300}
                onLoopDone={handleDone}
              />
            </span>
          </h1>
        </div>
      )
 }


export default TypeWriter