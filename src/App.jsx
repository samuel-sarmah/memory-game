import { useState } from "react"
import Form from "./components/Form"
import Card from "./components/Card"

function App() {
  const [isGameOn, setIsGameOn] = useState(false);

  function startGame(e) {
    e.preventDefault();
    setIsGameOn(true)
  }

  function turnCard() {
    console.log("Card has been clicked.")
  }

  return (
    <>
      <h1>Memory!</h1>
      {isGameOn && <Form handleSubmit={startGame} />}
      {isGameOn && <Card handleClick={turnCard} />}
    </>
  )
}

export default App
