import './App.css';
import {useState} from 'react'

function App() {

  // randomNumber between 0 and 256
  const randomNumber = () => {
    return Math.floor(Math.random() * 256)
  }

  // empty array to store colors numbers in
  const colorsArray = []
  const [selectedColor, selectedColorUpdate] = useState("0, 0, 0")
  const handleClick = ({red, green, blue}) => {
    selectedColorUpdate(`${red}, ${green}, ${blue}`)
  }



  for (let index = 0; index < 64; index++) {
    const colors = {red: randomNumber(), 
              green: randomNumber(),
              blue: randomNumber()
            }
    colorsArray.push(colors)
  }

  // maps through color values array and creates a div with RGB values
  const colorDivs = colorsArray.map(({red, green, blue}, index) => (
    <div 
    style={{backgroundColor: `rgb(${red}, ${green}, ${blue})`,
            width: "25px",
            height: "25px"
    }}
    onClick={()=>{handleClick({red, green, blue})}}
    key={index}
    />
  ))

  const [newColorDivs, setNewColorDivs] = useState(colorDivs)
  // let newColorDivs = null
  const newColorsArray = []
  
  const genNewColors = () => {
    
    for (let index = 0; index < 64; index++) {
      const colors = {red: randomNumber(), 
                green: randomNumber(),
                blue: randomNumber()
              }
      newColorsArray.push(colors)
    }


    const newColorDivs = newColorsArray.map(({red, green, blue}, index) => (
      <div 
      style={{backgroundColor: `rgb(${red}, ${green}, ${blue})`,
              width: "25px",
              height: "25px"
      }}
      onClick={()=>{handleClick({red, green, blue})}}
      key={index}
      />
    ))

    setNewColorDivs(newColorDivs)
  }



  const [keepColor1, updateKeepColor1] = useState (0, 0, 0)
  const [keepColor2, updateKeepColor2] = useState (0, 0, 0)
  const [keepColor3, updateKeepColor3] = useState (0, 0, 0)

  const colorKeep1 = (event) => {
    event.preventDefault()
    updateKeepColor1(selectedColor)
  }
  const colorKeep2 = (event) => {
    event.preventDefault()
    updateKeepColor2(selectedColor)
  }
  const colorKeep3 = (event) => {
    event.preventDefault()
    updateKeepColor3(selectedColor)
  }



  return (
    <div id='bigDiv'>
    <h1>Color Picker</h1>
    <div id='displayColors'>
    {/* {colorDivs} */}
    {newColorDivs}
    </div>
    <button onClick={genNewColors}>Generate New Colors</button>
    <div id='selectedColor'>
      <h1>Selected Color</h1>
      <div 
    style={{backgroundColor: `rgb(${selectedColor})`,
            width: "50px",
            height: "50px",
            borderStyle: "solid",
            borderColor: "black"
      }}
      />
    </div>
    <div id='keptColors'>
      <div 
      style={{backgroundColor: `rgb(${keepColor1})`,
            width: "100px",
            height: "100px",
            borderStyle: "solid",
            borderColor: "black"
      }}
      onClick={colorKeep1}
      />
      <div 
    style={{backgroundColor: `rgb(${keepColor2})`,
            width: "100px",
            height: "100px",
            borderStyle: "solid",
            borderColor: "black"
      }}
      onClick={colorKeep2}
      />
      <div 
      style={{backgroundColor: `rgb(${keepColor3})`,
            width: "100px",
            height: "100px",
            borderStyle: "solid",
            borderColor: "black"
      }}
      onClick={colorKeep3}
      />
      </div>
    </div>
  );
}

export default App;
