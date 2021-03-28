import React, { useRef } from 'react'
import giftboxImage from '../assets/giftbox.png'


export default function BrowseSection({ email, handleChange, size }) {
    const inputEl = useRef('aaaa')
    const onSubmit = () => {
        inputEl.current.focus()
    }



    const sectionList = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridRow: '2',
    }
    const inputStyle = {
        border: '2px solid #fff',
        backgroundColor: 'transparent',
        borderRadius: '40px',
        width: '100%',
        height: '50px',
        display: 'block',
        padding: '15px',
    }
    const submitStyle = {
        border: '2px solid #fff',
        backgroundColor: '#fff',
        borderRadius: '40px',
        width: '150px',
        height: '40px',
        marginTop: '20px',
    }
    return (
        <div className={size ? 'browserDesktop' : 'browserMobile'}>
            <div style={{ gridColumn: '1', gridRow: '2' }}>
                <form>
                    <input
                        style={inputStyle}
                        label='Email'
                        type='text'
                        required
                        value={email}
                        onChange={(e) => handleChange(e.target.value)}
                    />
                    <input
                        type='submit'
                        value='Subscribe'
                        style={submitStyle}
                        onSubmit={(e) => onSubmit(e.target.value)} />
                </form>

            </div>
            <div style={sectionList} >
                <div style={{ gridColumn: '1' }}>
                    <h3>Browse</h3>
                    <ul>
                        <li>Home</li>
                        <li>Career</li>
                        <li>Text 1</li>
                        <li>Text 2</li>
                        <li>Text 3</li>
                    </ul>
                </div>
                <div style={{ gridColumn: '2' }}>
                    <h3>About</h3>
                    <ul>
                        <li>About</li>
                        <li>Contact Us</li>
                        <li>Partner With Us</li>
                        <li>Reviews</li>
                        <li>Sign In</li>
                    </ul>
                </div>
                <div style={{ gridColumn: '3' }}>
                    <h3>Support</h3>
                    <ul>
                        <li>Help Center</li>
                        <li>Privacy Policy</li>
                        <li>Terms</li>
                        <li>FAQs 2</li>

                    </ul>
                </div>
            </div>
            <div style={{ gridColumn: '3', gridRow: '2' }}>
                <img
                    src={giftboxImage}
                    alt='A package wrapped with green gift string'
                />
            </div>
        </div>
    )
}
