import { useState } from 'react'
import './App.css'
import Nav from "./components/Nav"
import Body from "./components/Body"
import data from "./data/data.js"
function App() {

  const MAX_CARDS = 3

  return (
    <>
      <Nav />
      {data.slice(0, MAX_CARDS).map((data) => {
        return <Body key={data.title} data={data} />}
      )}
    </>
  )
}

export default App
