import React from "react"
import styled from "styled-components"


const StyledProgressBar = styled.div`
    width: ${({progress}) => progress || 0}px;
    height: 50px;
    background-color: ${({progress}) => progress > 50 ? "blue" : "red"};
`

const ProgressBar = ({progressBar}) => {
    return <StyledProgressBar progress={progressBar}></StyledProgressBar>
}

export default ProgressBar