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
          <Section text="M" progress={50}/>
          <Section text="T" progress={90}/>
          <Section text="W" progress={44}/>
          <Section text="T" progress={30}/>
          <Section text="F" progress={20}/>
          <Section text="S" />
          <Section text="S" progress={100}/>
        </div>
    </>
  )
}

export default App
