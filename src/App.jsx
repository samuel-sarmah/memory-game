import { useState } from "react"
import Form from "./components/Form"
import Card from "./components/Card"



function App() {
  const [isGameOn, setIsGameOn] = useState(false);
  const [emojisData, setEmojisData] = useState('');
  const [selectedCards, setSelectedCards] = useState([]);

  async function startGame(e) {
    e.preventDefault();
    try {
      const response = await fetch("https://emojihub.yurace.pro/api/all/category/animals-and-nature")

      if (!response) {
        throw new Error("Could not fetch data from API")
      }

      const data =  await response.json();
      const dataSlice = getDataSlice(data);
      const emojisArray = getEmojisArray(dataSlice);
       
      setEmojisData(emojisArray)
      setIsGameOn(true);
    } catch (err) {
      console.error(err);
    }
  }

  function getDataSlice(data) {
    const randomIndices = getRandomIndices(data);
    
    const dataSlice = randomIndices.map(randomIndex => data[randomIndex])
    return dataSlice;
  }

  function getRandomIndices(data) {
    const randomIndicesArray = [];
    for (let i = 0; i < 5; i++) {
      const j = Math.floor(Math.random() * data.length)
      if (!randomIndicesArray.includes(j)) {
        randomIndicesArray.push(j);
      } else {
        i--
      }
    }
    
    return randomIndicesArray;
  }

  function getEmojisArray(data) {
    const pairedEmojisArray = [...data, ...data];
    for (let i = pairedEmojisArray.length - 1; i > 0; i--) {
      // Fisher yates algorithm
      const j = Math.floor(Math.random() * (i + 1))
      const temp = pairedEmojisArray[i];
      pairedEmojisArray[i] = pairedEmojisArray[j];
      pairedEmojisArray[j] = temp
    }
    return pairedEmojisArray;
  }

  function turnCard(name, index) {
    setSelectedCards([
      {
        index,
        name,
      }
    ])
    console.log(selectedCards)
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
