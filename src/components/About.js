import React from 'react';
import {useSpring, animated} from 'react-spring'
import {Spring} from 'react-spring/renderprops'

function About() {
  return (
    <React.Fragment>
        <Spring
            from={{opacity:0, marginTop: -10}}
            to={{opacity:1, marginTop: 0}}
            config={{delay: 500, duration: 1000}}
        >
            {
                (props) => (
                    <Styled style={props}>
                        <Photo url={`${process.env.PUBLIC_URL}/images/me.JPG`}/>
                    </Styled>
                )
            }
        </Spring>
        <Spring
            from={{opacity:0, marginTop: -500}}
            to={{opacity:1, marginTop: 0}}
        >
            {
                (props) => (
                    <Styled style={props}>
                        <Styled style={pageStyle}>
                            <p>
                            I Love Sebastian Blissett very much! But I might Love our dog Yeti a bit more! 😉
                            </p>
                        </Styled>
                    </Styled>
                )
            }
        </Spring>
    </React.Fragment>
  )
}

const pageStyle = {
    background: "steelblue",
    color: "white",
    padding: "1.5rem",
    width: "100%",
    height: "100%"
}

function Photo(props) {
    return (
      <img src={props.url} width={"25%"}/>
    )
  }

function Styled(props) {
    return (
        <div style={props.style}>
            {props.children}
        </div>
    )
}

export default About;