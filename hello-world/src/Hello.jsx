import React from 'react'

export const Hello = () => {
    return (
        <div id="container">
            <h2>Hello, Keshav!</h2>
        </div>
    )
}

export const HelloWithoutJSX = () => {
    return React.createElement(
        'div',
        { id: 'container' },
        React.createElement('h1', null, 'Hello, Keshav!')
    )
}

