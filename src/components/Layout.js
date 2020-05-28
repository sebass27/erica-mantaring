import React from 'react';
import MyNav from './Nav'

function Layout(props) {
    return (
        <React.Fragment style={pageStyle}>
            <MyNav/>
            {props.children}
        </React.Fragment>
    )
}

const pageStyle = {
    background: "steelblue",
    color: "white",
    padding: "1.5rem"
}

export default Layout;