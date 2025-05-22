import '@mantine/core/styles.css'

import './App.css'
import { useState } from 'react'
import { createTheme, MantineProvider, Title, Text, Paper, Center, Flex } from '@mantine/core';
import CrewList from './components/crewList.jsx'

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

  return (
    <MantineProvider theme={theme}>
      <Flex 
        h={"100vh"} 
        justify={"center"}
        align={"center"}
      >
      <Center>
        <CrewList />
      </Center>
      </Flex>
    </MantineProvider>
  )
}

export default App
