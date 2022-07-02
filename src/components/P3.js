import React, {Component} from "react";
import p5 from 'p5';
import { editableInputTypes } from "@testing-library/user-event/dist/utils"; 

class P3 extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef()  // createRef provides a way to include
                                        // any third-party DOM element into our React
    }
    P3 = (p)=>{
        let xspeed = 4;
        let xpos = 0;
        let r, b, g;

        p.setup = ()=> {
            p.createCanvas(800, 500);
            r = p.random(255);
            g = p.random(255);
            b = p.random(255);
        }
        p.draw = ()=>{
            p.background(50);
            p.strokeWeight(2);
            p.stroke(255);
            p.line(0, 10, 800, 10);
            p.line(0, 490, 800, 490);
            p.fill(r, g, b, 127);
            p.ellipse(100, 250, 150, 150);
            p.ellipse(300, 250, 150, 150);
            p.ellipse(500, 250, 150, 150);
            p.ellipse(700, 250, 150, 150);
            if (p.mouseX < p.width * 0.33) {
                p.ellipse(200, 75, 100, 100);
                p.ellipse(200, 425, 100, 100);
            }
            else if (p.mouseX < p.width * 0.67) {
                p.ellipse(400, 75, 100, 100);
                p.ellipse(400, 425, 100, 100);
            }
            else {
                p.ellipse(600, 75, 100, 100);
                p.ellipse(600, 425, 100, 100);
            }
            if(p.mouseIsPressed){
                let d = p.dist(p.mouseX, p.mouseY, 100, 250);
                let d2 = p.dist(p.mouseX, p.mouseY, 300, 250);
                let d3 = p.dist(p.mouseX, p.mouseY, 500, 250);
                let d4 = p.dist(p.mouseX, p.mouseY, 700, 250);
            if ((d < 75) || (d2<75) || (d3<75) || (d4<75)) {
                // Pick new random color values
                r = p.random(255);
                g = p.random(255);
                b = p.random(255);
            }
            else {
                r = 255;
                g = 255;
                b = 255;
            }
            }
            p.stroke(255);
            p.line(0, 150, 800, 150);
            p.line(0, 350, 800, 350);
            p.stroke(255);
            for (let i = -4; i < 5; i++){
            p.ellipse(xpos + (200*i), 150, 25, 25);
            p.ellipse(xpos + (200*i), 350, 25, 25);
            }
            
            
            if (xpos > p.width) {
                xspeed = -4;
            }
            if (xpos < 0) {
                xspeed = 4;
            }
            xpos += xspeed;
            if (((p.mouseX < 410) &&(p.mouseX > 390)) && ((p.mouseY < 260) && (p.mouseY > 240))){
                r = p.random(255);
                g = p.random(255);
                b = p.random(255);
            }
            }

        }
    
    componentDidMount() {
        // This is the time that we create a new P5 object and attach it to our dom reference
        this.my = new p5(this.P3, this.myRef.current)
    }
    styles = {
        page: {
            textAlign: "center",
            fontFamily: "'Jura', sans-serif",
            padding: "50px",
            paddingBottom: "200px",
            fontWeight: "bold",
        },
        txt: {
            fontWeight: "bold",
            fontSize: "20px",
        }
    }
    render() {
        //We use this div as our reference for the element we want to add as a child
        return (
            <div style = {this.styles.page}>
                <h1>Project 3: P5 Design</h1>
                <h4> This assignment asks to create an interactive P5 canvas design
                This canvas includes interactive events such as mouse clicks and mouse tracking.</h4>
                <h3 style ={this.styles.txt}>Disco Colored Lights</h3>
                <body>
                    <div ref={this.myRef}></div>
                    
                </body>
                <footer style = {this.styles.txt}>
                <p>Watch the colors change when you click the large circles or hold the mouse in the center. Beware clicking anywhere else turns the circles white!</p>
                    <p>Warning: Flashing Colors</p>
                </footer>
            </div>
            
        )
    }
}
export default P3;
