import React from "react"
import styled from "styled-components"


const StyledProgressBar = styled.div`
    width: ${({progress}) => progress || 0}%;
    height: 50px;
    background-color: ${({progress}) => {
        if (progress > 50) return "#0658d6"
        else if (progress < 50 && progress > 20) return "#5187db"
        else return "#93afdb"}};
`

const ProgressBar = ({progressBar}) => {
    return <StyledProgressBar progress={progressBar}></StyledProgressBar>
}

export default ProgressBar