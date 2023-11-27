import { React } from 'react'
import styled from "styled-components"
import ProgressBar from './ProgressBar'

const StyledSection = styled.section`
    background-color: #ffffff;
    border: solid 3px grey;
    margin: 4px;
    width: 300px;
    height: 50px;
    border-radius: 10px;
    display: flex;
    font-size: 40px;
    color: #ff6961;
`

const WeekdayTitle = styled.div`
    display: flex;
    justify-content: center;
    min-width: 50px;
    border-right: solid 3px lightgrey;
`

const WeekendTitle = styled(WeekdayTitle)`
    background-color: #2cf5e4;
`

const Section = ({text, progress}) => {
    return (
        <StyledSection>
            {text === "S" ? <WeekendTitle>{text}</WeekendTitle> : <WeekdayTitle>{text}</WeekdayTitle>}
            <ProgressBar progressBar={progress}></ProgressBar>
        </StyledSection>
    )
}

export default Section