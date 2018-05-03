import React, { Component } from 'react';
import Canvas from './Components/Canvas';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        width: 700,
        height: 700,
        loops: 1000,
        colors: ["#FF0000", "#FFFF00", "#0000FF"],
        opacity: 0.1,
        maxRadius: 300,
    }
  }
  
  handleColorChange = event => {
    const colors = this.state.colors;
    colors.splice(event.target.id, 1, event.target.value);
    this.setState({colors});
  }

  handleNumberChange = event => {
    const target = event.target.id;
    console.log(this.state[target]);
    this.setState({[target]: event.target.value});
  }

  render(){
    return(
      <div className="App">
        <div className="controls">
          <div className="colors">
            <p>Colors:</p>
            <input type="color" id="0" defaultValue={this.state.colors[0]} onChange={this.handleColorChange}/>
            <input type="color" id="1" defaultValue={this.state.colors[1]} onChange={this.handleColorChange}/>
            <input type="color" id="2" defaultValue={this.state.colors[2]} onChange={this.handleColorChange}/>
          </div>
          <div className="numbers">
            <p>Width:</p>
            <input type="number" id="width" defaultValue={this.state.width} onChange={this.handleNumberChange}/>
            <p>Height:</p>
            <input type="number" id="height" defaultValue={this.state.height} onChange={this.handleNumberChange}/>
            <p>Opacity:</p>
            <input type="number" id="opacity" defaultValue={this.state.opacity} onChange={this.handleNumberChange}/>
            <p>Max Radius:</p>
            <input type="number" id="maxRadius" defaultValue={this.state.maxRadius} onChange={this.handleNumberChange}/>
            <p>Number of Circles:</p>
            <input type="number" id="loops" defaultValue={this.state.loops} onChange={this.handleNumberChange}/>
          </div>
        </div>
        <Canvas
          colors={this.state.colors}
          width={this.state.width}
          height={this.state.height}
          opacity={this.state.opacity}
          maxRadius={this.state.maxRadius}
          loops={this.state.loops}/>
      </div>
    );
}
}

export default App;
