import { React } from 'react'
import styled from "styled-components"
import('./App.css')
import Section from './components/Section'

const Title = styled.h1`
  color: #b19cd9;
`

function App() {
  return (
    <>
        <Title>Progress Tracker</Title>
        <div>
          <Section text="M" progress={250}/>
          <Section text="T" progress={190}/>
          <Section text="W" progress={144}/>
          <Section text="T" progress={30}/>
          <Section text="F" progress={205}/>
          <Section text="S" progress={80}/>
          <Section text="S" progress={100}/>
        </div>
    </>
  )
}

export default App
