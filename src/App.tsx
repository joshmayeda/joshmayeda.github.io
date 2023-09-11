import './App.css'
import { useState } from 'react'
import { Box, Tab, Tabs } from '@mui/material'

function App() {
  const [value, setValue] = useState(0)

  // const handleChange = (event, newValue) => {
  //   setValue(newValue)
  // }

  return (
    <>
      <Tabs value={value} centered>
        <Tab label="Section 1" />
        <Tab label="Section 2" />
        <Tab label="Section 3" />
      </Tabs>
      <div className="container">
        {value === 0 && (
          <div className="section">
            <img src="/1.PNG" alt="1" className="bg1" />
            <h1>Section 1</h1>
            <p>This is section 1.</p>
          </div>
        )}
        {value === 1 && (
          <div className="section">
            <h1>Section 2</h1>
            <p>This is section 2.</p>
          </div>
        )}
        {value === 2 && (
          <div className="section">
            <h1>Section 3</h1>
            <p>This is section 3.</p>
          </div>
        )}
      </div>
    </>
  )
}

export default App