import React, { Component, useState } from 'react';
import Canvas from './Components/Canvas';
import './App.css';

function App() {
  const [width, setWidth] = useState(700);
  const [height, setHeight] = useState(700);
  const [loops, setLoops] = useState(1000);
  const [colors, setColors] = useState(["#FF0000", "#FFFF00", "#0000FF"]);
  const [opacity, setOpacity] = useState(0.1);
  const [maxRadius, setMaxRadius] = useState(300);
  const [render, setRender] = useState(0)

  const handleRefresh = () => {
    setRender(render + 1)
  }

  const handleColorChange = (e) => {
    const colorArray = colors;
    colorArray.splice(e.target.id, 1, e.target.value);
    setColors(colorArray)
  }

  const handleNumberChange = (e) => {
    const target = e.target.id
    switch (target){
      case 'width':
        setWidth(e.target.value)
        break;
      case 'height':
        setHeight(e.target.value)
        break;
      case 'loops':
        setLoops(e.target.value)
        break;
      case 'opacity':
        setOpacity(e.target.value)
        break;
      case 'maxRadius':
        setMaxRadius(e.target.value)
        break;
    }
  }

  return(
    <div className="App">
        <div className="controls">
          <h1>Circle-Gen</h1>
          <button onClick={handleRefresh}>Refresh</button><br/>
          <h2>Colors:</h2>
            <input type="color" id="0" className="input" defaultValue={colors[0]} onChange={handleColorChange}/><br/>
            <input type="color" id="1" className="input" defaultValue={colors[1]} onChange={handleColorChange}/><br/>
            <input type="color" id="2" className="input" defaultValue={colors[2]} onChange={handleColorChange}/><br/>
          <h2>Width:</h2>
            <input type="text" id="width" className="input" defaultValue={width} onChange={handleNumberChange} size="7"/>
          <h2>Height:</h2>
            <input type="text" id="height" className="input" defaultValue={height} onChange={handleNumberChange} size="7"/>
          <h2>Opacity:</h2>
            <input type="text" id="opacity" className="input" defaultValue={opacity} onChange={handleNumberChange} size="7"/>
          <h2>Max Radius:</h2>
            <input type="text" id="maxRadius" className="input" defaultValue={maxRadius} onChange={handleNumberChange} size="7"/>
          <h2># of Circles:</h2>
            <input type="text" id="loops" className="input" defaultValue={loops} onChange={handleNumberChange} size="7"/><br/>
        </div>
        <Canvas
          colors={colors}
          width={width}
          height={height}
          opacity={opacity}
          maxRadius={maxRadius}
          loops={loops}/>
      </div>
  )

}

export default App;
