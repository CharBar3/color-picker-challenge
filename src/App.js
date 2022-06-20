import './App.css';
import {useState} from 'react'

function App() {

  // randomNumber between 0 and 256
  const randomNumber = () => {
    return Math.floor(Math.random() * 256)
  }
  
  // Generates 64 divs with a random color background and a onClick to save that color
  const getColors = () => {
    const availableColors = []
    
    for (let index = 0; index < 64; index++) {
      availableColors.push(
        <div 
      style={{backgroundColor: `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`,
              width: "25px",
              height: "25px"
      }}
      onClick={selectColor}
      key={index}
      />
      )
    }
    return availableColors
  }

  // updates the state of selectedColor to the be the same as the color of the div you click
  const selectColor = (e) => {
    e.preventDefault() 
    updateSelectedColor(e.target.style.backgroundColor)
  }

  // applies the corrent state of slected color to the background of the div you click
  const saveColor = (e) => {
    e.target.style.backgroundColor = selectedColor
  }

  // state to save all the available colors in the color picker div
  const [availableColors, updateAvailableColors] = useState(getColors())
  // state to save selected color
  const [selectedColor, updateSelectedColor] = useState('rgb( 255, 255, 255)')

  return (
    <div id='bigDiv'>
      <h1>Color Picker</h1>
        <div id="colorDisplay">
      {availableColors}
      </div>
      <div id="selectedColor">
      <h1>Selected Color</h1>
      <div 
    style={{backgroundColor: `${selectedColor}`,
            width: "50px",
            height: "50px",
            borderStyle: "solid",
            borderColor: "black"
      }}
      />
    </div>
    <div id='buttonDiv'>
      <button onClick={() => updateAvailableColors(getColors())}>Generate New Colors</button>
    </div>
    <div id='keptColors'>
      <div 
      style={{backgroundColor: 'rgb( 255, 255, 255)',
            width: "100px",
            height: "100px",
            borderStyle: "solid",
            borderColor: "black"
      }}
      onClick={saveColor}
      />
      <div 
    style={{backgroundColor: 'rgb( 255, 255, 255)',
            width: "100px",
            height: "100px",
            borderStyle: "solid",
            borderColor: "black"
      }}
      onClick={saveColor}
      />
      <div 
      style={{backgroundColor: 'rgb( 255, 255, 255)',
            width: "100px",
            height: "100px",
            borderStyle: "solid",
            borderColor: "black"
      }}
      onClick={saveColor}
      />
      </div>
    </div>
  );
}

export default App;
