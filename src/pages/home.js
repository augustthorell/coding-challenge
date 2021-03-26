import React, { useState } from 'react'
import WelcomeBlock from '../components/welcomeBlock'
import SlideShowContainer from '../components/slideShowContainer'
import BrowseSection from '../components/browseSection'

function Home() {

    const [emailSubscription, setEmailSubscription] = useState('')

    const handleChange = (email) => {
        setEmailSubscription(email)

    }
    const handleSubmit = email => {

    }
    console.log(emailSubscription)

    return (
        <div className="App">
            <WelcomeBlock />
            <SlideShowContainer />
            <BrowseSection email={emailSubscription} handleChange={handleChange} />
        </div>
    )
}

export default Home
