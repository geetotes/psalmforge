import '@mantine/core/styles.css'

import './App.css'
import { useState } from 'react'
import { createTheme, MantineProvider, Title, Text, Paper, Center, Flex } from '@mantine/core';
import { BrowserRouter, Routes, Route } from 'react-router'
import CrewList from './components/crews/list.jsx'
import MembersList from './components/members/list.jsx'

const myColor = [
  '#fbf5ea',
  '#efe9de',
  '#d4c8b2',
  '#c7b89d',
  '#b6a380',
  '#ab956d',
  '#a68e63',
  '#927b51',
  '#826d46',
  '#725e37'
];

const theme = createTheme({
  /** Put your mantine theme override here */
  colors: { blue: myColor},
  fontFamily: '"Courier Prime", sans-serif',
  headings: {
    fontFamily: '"Stardos Stencil", system-ui',
  }
});

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('unknown')

  /** This crazy router layout is a design decision to ensure all 'pages' live in this central themeed container */
  return (
    <MantineProvider theme={theme}>
      <Flex 
        h={"100vh"} 
        justify={"center"}
        align={"center"}
      >
      <Center>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CrewList/>} />
            <Route path="/crews/:id" element={<MembersList />} />
          </Routes>
        </BrowserRouter>
      </Center>
      </Flex>
    </MantineProvider>
  )
}

export default App
