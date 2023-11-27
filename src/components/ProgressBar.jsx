import React from "react"
import styled from "styled-components"


const StyledProgressBar = styled.div`
    width: ${({progress}) => progress || 0}%;
    height: 50px;
    background-color: ${({progress}) => {
        if (progress > 70) return "green"
        else if (progress <= 70 && progress > 50) return "orange"
        else if (progress <= 50 && progress > 20) return "yellow"
        else return "red"}};
`

const ProgressBar = ({progressBar}) => {
    return <StyledProgressBar progress={progressBar}></StyledProgressBar>
}

export default ProgressBar