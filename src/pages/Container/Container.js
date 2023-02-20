import React, { useState } from 'react'
import Footer from './Footer/Footer'
import GuidePanel from './GuidePanel/GuidePanel'

const Container = () => {
  const [isHidden, setIsHidden] = useState(false)

    return (
      
      <div className=''>
        {/* {!isHidden ? <Footer setIsHidden={setIsHidden}/> : <GuidePanel/> }  */}
      </div>
      
    )
  
  
}

export default Container