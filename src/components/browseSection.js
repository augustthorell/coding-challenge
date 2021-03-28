import React, { useState } from 'react'
import giftboxImage from '../assets/giftbox.png'
import { FaChevronDown } from "react-icons/fa"
import '../style.css'
import { Link } from 'react-router-dom'

import {
    DropdownContainer,
    DropdownList,
    Dropdown,
    SectionWrapper,
    ImageContainer,
    SubscribeContainer,
    DropdownButton,

} from './dropdownElements';

function BrowseSection({ email, handleChange, handleSubmit }) {

    const [text1, setOpenText1] = useState(false)
    const [text2, setOpenText2] = useState(false)
    const [text3, setOpenText3] = useState(false)





    const inputStyle = {
        border: '2px solid #fff',
        backgroundColor: 'transparent',
        borderRadius: '40px',
        width: '90%',
        height: '50px',
        display: 'block',
        padding: '15px',
        margin: '0 auto',
    }
    const submitStyle = {
        border: '2px solid #fff',
        backgroundColor: '#fff',
        borderRadius: '40px',
        width: '150px',
        height: '40px',
        marginTop: '20px',
        display: 'block',
        margin: '10px auto',
    }
    function handleClick(item) {
        if (item === 1) {
            setOpenText1(!text1)
        } else if (item === 2) {
            setOpenText2(!text2)
        } else if (item === 3) {
            setOpenText3(!text3)
        }

    }

    return (
        <SectionWrapper>

            <SubscribeContainer>
                <form onSubmit={handleSubmit}>
                    <input
                        style={inputStyle}
                        label='Email'
                        type='text'
                        required
                        placeholder='Enter your Email'
                        value={email}
                        onChange={(e) => handleChange(e.target.value)}
                    />
                    <input
                        type='submit'
                        value='Subscribe'
                        style={submitStyle}
                    />
                </form>
            </SubscribeContainer>

            <DropdownContainer>

                <DropdownList style={{ gridColumn: '1' }} onClick={() => handleClick(1)}>
                    <div>
                        <h3>Browse</h3>
                        <Dropdown className={text1 ? 'dropdownActive' : 'dropdownInactive'}>
                            <Link to='/' exact><li>Home</li></Link>
                            <Link to='/career'><li>Career</li></Link>
                            <Link to='/text-1'><li>Text 1</li></Link>
                            <Link to='/text-2'><li>Text 2</li></Link>
                            <Link to='/text-3'><li>Text 3</li></Link>
                        </Dropdown>
                    </div>
                    <DropdownButton>
                        <FaChevronDown />
                    </DropdownButton>
                </DropdownList>

                <DropdownList style={{ gridColumn: '2' }} onClick={() => handleClick(2)}>
                    <div>
                        <h3>About</h3>
                        <Dropdown className={text2 ? 'dropdownActive' : 'dropdownInactive'}>
                            <Link to='/about'><li>About</li></Link>
                            <Link to='/contact-us'><li>Contact Us</li></Link>
                            <Link to='/partner-with-us'><li>Partner With Us</li></Link>
                            <Link to='/reviews'><li>Reviews</li></Link>
                            <Link to='/sign-in'><li>Sign in</li></Link>
                        </Dropdown>
                    </div>

                    <DropdownButton>
                        <FaChevronDown />
                    </DropdownButton>
                </DropdownList>

                <DropdownList style={{ gridColumn: '3' }} onClick={() => handleClick(3)}>
                    <div>
                        <h3>Support</h3>
                        <Dropdown className={text3 ? 'dropdownActive' : 'dropdownInactive'}>
                            <Link to='/help-center'><li>Help Center</li></Link>
                            <Link to='/privacy-policy'><li>Privacy Policy</li></Link>
                            <Link to='/terms'><li>Terms</li></Link>
                            <Link to='/faq'><li>FAQ</li></Link>

                        </Dropdown>
                    </div>

                    <DropdownButton>
                        <FaChevronDown />
                    </DropdownButton>
                </DropdownList>

            </DropdownContainer>

            <ImageContainer>
                <img
                    src={giftboxImage}
                    alt='A package wrapped with green gift string'
                    style={{ float: 'right', width: '10vw', maxWidth: '130px' }}
                />
            </ImageContainer>

        </SectionWrapper>
    )
}

export default BrowseSection