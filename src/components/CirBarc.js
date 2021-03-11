import React, {useEffect, useState} from 'react'
import { IoSwapHorizontalOutline } from 'react-icons/io5'
import styled, {css} from 'styled-components/macro'
import './CirBar.css'



/* function cirBar() {
    return (
        <div class="container">
            <svg width="300" height="300" viewBox= "0 0 300 300">
                <defs>
                    <linearGradient id="Gradient" x1= "0%" y1="0%" x2= "100%" y2="100%">
                        <stop offset="0%" stop-color="#e100ff" />
                        <stop offset="100%" stop-color="#009fff" />
                    </linearGradient>
                </defs>
                <circle class="stat" cx="150" cy="150" r="100"/>
                <circle class="load" cx="150" cy="150" r="100" transform="rotate(-90 150 150)"/>
                <text class="num" stroke-width="3" x="150" y="55%" text-anchor="middle"></text>
            </svg>
            
        </div>
        
    )
}

export default cirBar */

/* 
const Container = styled.section`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
    object-fit: contain;
    
    
    
`
const Wrapper = styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    positon: relative;
`
const Card = styled.div``
const Box = styled.div``
const Percent = styled.div``
const CBar = styled.svg``
const Number = styled.div``
const TextName = styled.h2``


const cirBar = () => {
    return (
        <Container>
            <Wrapper>
                <video src = '../../videos/video-2.mp4' autoPlay loop muted/>
            <Card>
                <Box>
                    <Percent>
                        <CBar>
                            <circle cx = "70" cy = "70" r = "70"></circle>
                            <circle cx = "70" cy = "70" r = "70"></circle>
                        </CBar>
                        <Number>
                            <h2>90<span>%</span></h2>
                        </Number>
                    </Percent>
                    <TextName>HTML</TextName>
                </Box>
            </Card>
            </Wrapper>
        </Container>
    )
}
export default cirBar */


const CirBar = props => {
    const [offset, setOffset] = useState(0);
    const {
        size,
        progress,
        strokeWidth,
        circleOneStroke,
        circleTwoStroke

    }= props;

    const center = size/2;
    const radius = size/2 - strokeWidth/2;
    const circumference = 2 * Math.PI * radius;

    useEffect(()=>{
        const progressOffset = ((100- progress)/100)* circumference;
        setOffset(progressOffset);
    }, [setOffset, progress, circumference, offset]);

    return (
        <div>
            <svg 
                className="circular-chart" 
                width={size} 
                height={size}
            >
                <circle className="circular-bg"
                    stroke={circleOneStroke}
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={strokeWidth}


                >

                </circle>
                <circle className="circle"
                    stroke={circleTwoStroke}
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}

                >

                </circle>
            </svg>
        </div>
    )
}

export default CirBar;
