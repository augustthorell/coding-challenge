import React, { useState } from 'react'
import WelcomeBlock from '../components/welcomeBlock'
import SlideShow from '../components/slideShow'
import BrowseSection from '../components/browseSection'

function Home() {

    const [emailSubscription, setEmailSubscription] = useState([])

    const handleChange = (email) => {
        setEmailSubscription(email)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(emailSubscription)
    }
    /* console.log(emailSubscription) */


    return (
        <div className="App">
            <WelcomeBlock />
            <SlideShow />
            <BrowseSection email={emailSubscription} handleSubmit={handleSubmit} handleChange={handleChange} />
        </div>
    )
}

export default Home




