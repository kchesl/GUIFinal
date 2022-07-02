import React from 'react';
import ReactDOM from 'react-dom/client';

function Cell(props) {
  return (
    <button className="cell" style={{width:'100px', 'backgroundColor':props.backgroundColor, 'borderWidth':props.borwidth}}>
      {props.value}
    </button>
  );
}

class Grid extends React.Component {
	
  renderCell(i) {
	  var borWidth='thin'
	  if (colorArray[i] === 'red'){
		  borWidth='thick'
	  }
    return (
      <Cell
        value={i+1}
  backgroundColor={colorArray[i]}
  borwidth = {borWidth}
      />
    );
  }

  render() {
    return (
			
		
			
      <div>
        <div className="board-row">
          {this.renderCell(0)}
          {this.renderCell(1)}
          {this.renderCell(2)}
		  {this.renderCell(3)}
		  {this.renderCell(4)}
		  {this.renderCell(5)}
		  {this.renderCell(6)}
		  {this.renderCell(7)}
        </div>
        <div className="board-row">
          {this.renderCell(8)}
          {this.renderCell(9)}
          {this.renderCell(10)}
		  {this.renderCell(11)}
		  {this.renderCell(12)}
		  {this.renderCell(13)}
		  {this.renderCell(14)}
		  {this.renderCell(15)}
        </div>
        <div className="board-row">
          {this.renderCell(16)}
          {this.renderCell(17)}
          {this.renderCell(18)}
		  {this.renderCell(19)}
		  {this.renderCell(20)}
		  {this.renderCell(21)}
		  {this.renderCell(22)}
		  {this.renderCell(23)}
        </div>
		<div className="board-row">
		  {this.renderCell(24)}
          {this.renderCell(25)}
          {this.renderCell(26)}
          {this.renderCell(27)}
		  {this.renderCell(28)}
		  {this.renderCell(29)}
		  {this.renderCell(30)}
		  {this.renderCell(31)}
        </div>
		<div className="board-row">
          {this.renderCell(32)}
          {this.renderCell(33)}
          {this.renderCell(34)}
		  {this.renderCell(35)}
		  {this.renderCell(36)}
		  {this.renderCell(37)}
		  {this.renderCell(38)}
		  {this.renderCell(39)}
        </div>
		<div className="board-row">
          {this.renderCell(40)}
          {this.renderCell(41)}
          {this.renderCell(42)}
		  {this.renderCell(43)}
		  {this.renderCell(44)}
		  {this.renderCell(45)}
		  {this.renderCell(46)}
		  {this.renderCell(47)}
        </div>
		<div className="board-row">
          {this.renderCell(48)}
          {this.renderCell(49)}
          {this.renderCell(50)}
		  {this.renderCell(51)}
		  {this.renderCell(52)}
		  {this.renderCell(53)}
		  {this.renderCell(54)}
		  {this.renderCell(55)}
        </div>
		<div className="board-row">
          {this.renderCell(56)}
          {this.renderCell(57)}
          {this.renderCell(58)}
		  {this.renderCell(59)}
		  {this.renderCell(60)}
		  {this.renderCell(61)}
		  {this.renderCell(62)}
		  {this.renderCell(63)}
        </div>
      </div>
    );
  }
}

class P2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          cells: Array(9).fill(null)
        }
      ],
      stepNumber: 0,

    };
  }

  styles = {
    page: {
      textAlign: "center",
      fontFamily: "'Jura', sans-serif",
      padding: "50px"
    }
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];


    return (
        <div style = {this.styles.page}>
        <h1>Project 2: Grid Layout</h1>
        <h4> This assignment asks to create an 8x8 grid, 
            with each cell assigned a number. 
            The color of the cell depends on the number in the cell,
            with green for even, yellow for odd, and red with a boarder for prime.</h4>
        {/* <body> */}
            <div className="gridboard" id = "roo">
                <div className="Grid-board">
                <Grid
                    cells={current.cells}

                />
                </div>
            </div>
            {/* </body> */}
      </div>
    );
  }
}

// ========================================
var colorArray=['yellow','red','red','green','red','green','red','green',
	'yellow','green','red','green','red','green','yellow','green',
	'red','green','red','green','yellow','green','red','green',
	'yellow','green','yellow','green','red','green','red', 'green',
	'yellow', 'green', 'yellow', 'green', 'red','green','yellow','green',
	'red','green','red','green','yellow','green','red','green',
	'yellow','green','yellow','green','red','green','yellow','green',
	'yellow','green','red','green','red','green','yellow','green']
// const roo= ReactDOM.createRoot(document.getElementById("root"));
// roo.render(<P2 />);



export default P2
