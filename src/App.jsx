import '@mantine/core/styles.css'
import { useState } from 'react'
import { createTheme, MantineProvider, Text, Paper, Center, Container } from '@mantine/core';


const theme = createTheme({
  /** Put your mantine theme override here */
});

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('unknown')

  return (
    <MantineProvider>
      {/* Your app here */}
      <Container style={{width: "100%" }}>
      <Center>
        <Paper shadow="xs" p="xl">
          <Text>
            To get started, create a crew
          </Text>
        </Paper>
      </Center>
      </Container>
    </MantineProvider>
  )

    /**
    <>
      <div>
        <a href='https://vite.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
        <a href='https://workers.cloudflare.com/' target='_blank'>
          <img src={cloudflareLogo} className='logo cloudflare' alt='Cloudflare logo' />
        </a>
      </div>
      <h1>Vite + React + Cloudflare</h1>
      <div className='card'>
        <button
          onClick={() => setCount((count) => count + 1)}
          aria-label='increment'
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and saeeve to test HMR
        </p>
      </div>
      <div className='card'>
        <button
          onClick={() => {
            fetch('/api/')
              .then((res) => res.json())
              .then((data) => setName(data.name))
          }}
          aria-label='get name'
        >
          Name from API is: {name}
        </button>
        <p>
          Edit <code>worker/index.js</code> to change the name
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
    */
}

export default App
