import React, { useState } from 'react'
import WelcomeBlock from '../components/welcomeBlock'
import SlideShow from '../components/slideShow'
import BrowseSection from '../components/browseSection'

function Home({ size }) {

    const [emailSubscription, setEmailSubscription] = useState('')

    const handleChange = (email) => {
        setEmailSubscription(email)

    }


    return (
        <div className="App">
            <WelcomeBlock />
            <SlideShow />
            <BrowseSection email={emailSubscription} handleChange={handleChange} />
        </div>
    )
}

export default Home




