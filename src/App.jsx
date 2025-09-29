import { useState, useEffect } from "react"
import Form from "./components/Form"
import Card from "./components/Card"



function App() {
  const [isGameOn, setIsGameOn] = useState(false);
  const [emojisData, setEmojisData] = useState('');
  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    if (selectedCards.length === 2 && selectedCards[0].name === selectedCards[1].name) {
      setMatchedCards(prevMatchedCards => [...prevMatchedCards, ...selectedCards])
    }
  }, [selectedCards])

  useEffect(() => {
    if (emojisData.length && matchedCards.length === emojisData.length) {
      setIsGameOver(true)
    }
  }, [matchedCards])

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
    const selectedEntry = selectedCards.find(emoji => emoji.index === index)

    if (!selectedEntry && selectedCards.length < 2) {
      setSelectedCards(prevState => [ ...prevState, { name, index }])
    } else if (!selectedEntry && selectedCards.length === 2){
      setSelectedCards([{ name, index }])
    }
    console.log(selectedCards)
  }

  return (
    <main >
      <h1>Memory!</h1>
      {!isGameOn && <Form handleSubmit={startGame} />}
      {isGameOn && <Card 
                      handleClick={turnCard} 
                      data={emojisData}
                      selectedCards={selectedCards}
                      matchedCards={matchedCards}/>}
    </main>
  )
}

export default App
