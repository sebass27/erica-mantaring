import React from 'react';
import MyNav from './Nav'

function Layout(props) {
    return (
        <React.Fragment>
            <MyNav/>
            {props.children}
        </React.Fragment>
    )
}

export default Layout;