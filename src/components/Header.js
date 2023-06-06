import React from 'react';

function Header() {
    return (
        <div style={header}>
            <p style={text}>
                Covid-19 Related Information.
            </p>
        </div>
    )
}

const header = {
    padding: '25px',
    backgroundColor: 'darkslateblue'
}

const text = {
    fontFamily: "Arial",
    color: 'white',
    textAlign: 'center',
}

export default Header;