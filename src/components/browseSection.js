import React, { useRef } from 'react'

export default function BrowseSection({ email, handleChange }) {
    const inputEl = useRef('')
    const onSubmit = () => {
        inputEl.current.focus()
    }
    console.log(inputEl)

    const sectionWrapper = {
        display: 'grid',
        gridTemplateColumns: '2fr 2fr 1fr',
        width: '100%',
        padding: '0 50px',
        backgroundColor: '#FFC542',
        minHeight: '590px',
    }
    return (
        <div style={sectionWrapper}>
            <div style={{ gridColumn: '1' }}>
                <form>
                    <input
                        label='Email'

                        type='text'
                        required
                        value={email}
                        onChange={(e) => handleChange(e.target.value)}
                    />
                    <input type='submit' value='Submit' onSubmit={(e) => onSubmit(e.target.value)} />
                </form>

            </div>

            <div style={{ gridColumn: '2' }}>test2</div>
            <div style={{ gridColumn: '3' }}>test3</div>
        </div>
    )
}
