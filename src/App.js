import React, { Component } from 'react';
import Canvas from './Components/Canvas';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
        width: 700,
        height: 700,
        loops: 1000,
        colors: ["#FF0000", "#FFFF00", "#0000FF"],
        opacity: 0.1,
        maxRadius: 300,
        update: false,
    }
  }

  shouldComponentUpdate = () => {
    return false;
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

  handleRefresh = () => {
    this.forceUpdate();
  }

  render(){
    return(
      <div className="App">
        <div className="controls">
          <h1>Circle-Gen</h1>
          <button onClick={this.handleRefresh}>Refresh</button><br/>
          <h2>Colors:</h2>
            <input type="color" id="0" className="input" defaultValue={this.state.colors[0]} onChange={this.handleColorChange}/><br/>
            <input type="color" id="1" className="input" defaultValue={this.state.colors[1]} onChange={this.handleColorChange}/><br/>
            <input type="color" id="2" className="input" defaultValue={this.state.colors[2]} onChange={this.handleColorChange}/><br/>
          <h2>Width:</h2>
            <input type="text" id="width" className="input" defaultValue={this.state.width} onChange={this.handleNumberChange} size="7"/>
          <h2>Height:</h2>
            <input type="text" id="height" className="input" defaultValue={this.state.height} onChange={this.handleNumberChange} size="7"/>
          <h2>Opacity:</h2>
            <input type="text" id="opacity" className="input" defaultValue={this.state.opacity} onChange={this.handleNumberChange} size="7"/>
          <h2>Max Radius:</h2>
            <input type="text" id="maxRadius" className="input" defaultValue={this.state.maxRadius} onChange={this.handleNumberChange} size="7"/>
          <h2># of Circles:</h2>
            <input type="text" id="loops" className="input" defaultValue={this.state.loops} onChange={this.handleNumberChange} size="7"/><br/>
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
