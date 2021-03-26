import React, { useState, useEffect } from 'react'
import SlideShowList from './slideShowList'
import axios from 'axios'


function SlideShow() {
    const [text, setText] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                setText(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])



    /* const fetchText = async () => {
        api.get('/').then(res => {
            setText(res.data.title)
            console.log(res.data)
        })
    } */


    return (
        <SlideShowList text={text} />
    )
}


export default SlideShow