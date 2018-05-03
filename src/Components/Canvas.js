import React, {Component} from 'react';

export default class Canvas extends Component {
    constructor (props){
        super(props);
    }
    componentDidMount(){
        this.updateCanvas();
    }
    componentDidUpdate(){
        this.updateCanvas();
    }
    updateCanvas(){
        let canvas = this.refs.canvas;
        let ctx = canvas.getContext('2d');
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, this.props.width, this.props.height);

        ctx.globalAlpha = this.props.opacity;
        for (let i=0; i<this.props.loops; i++){
            let n = Math.round(Math.random()*this.props.colors.length);
            let color = this.props.colors[n];
            let radius = Math.random()*this.props.maxRadius;
            ctx.beginPath();
            ctx.fillStyle = color;
            ctx.ellipse(Math.random()*this.props.width, Math.random()*this.props.height, radius, radius, 0, 0, 2*Math.PI);
            ctx.fill();
        }
    }
    render(){
        return <canvas ref="canvas" width={this.props.width} height={this.props.height}></canvas>;
    }
}