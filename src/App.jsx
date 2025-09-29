import { useState } from "react"
import Form from "./components/Form"
import Card from "./components/Card"

function App() {
  const [isGameOn, setIsGameOn] = useState(false);
  const [emojisData, setEmojisData] = useState('');

  async function startGame(e) {
    e.preventDefault();
    try {
      const response = await fetch("https://emojihub.yurace.pro/api/all/category/animals-and-nature")

      if (!response) {
        throw new Error("Could not fetch data from API")
      }

      const data =  await response.json();
      const dataSample = data.slice(0, 5);
      
      setEmojisData(dataSample)
      setIsGameOn(true);
    } catch (err) {
      console.error(err);
    }
  }

  function turnCard() {
    console.log("Card has been clicked.")
  }

  return (
    <main >
      <h1>Memory!</h1>
      {!isGameOn && <Form handleSubmit={startGame} />}
      {isGameOn && <Card handleClick={turnCard} data={emojisData}/>}
    </main>
  )
}

export default App
