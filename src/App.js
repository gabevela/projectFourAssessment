import React, { Component } from 'react';
import CircleSelector from './components/CircleSelector';
import Circles from './components/Circles';
import './App.css';

	
	class App extends Component {

    constructor(props) {
      super(props)

      this.state = {
        b1: true,
        b2: false,
        b3: false,
        b4: false
      }
    }
    
    handleClick1() {
        this.setState({
            b1: true,
            b2: false,
            b3: false,
            b4: false
        });
    }  
    handleClick2() {
        this.setState({
            b1: false,
            b2: true,
            b3: false,
            b4: false
        });
    }  
    handleClick3() {
        this.setState({
            b1: false,
            b2: false,
            b3: true,
            b4: false
        });
    } 
    handleClick4() {
        this.setState({
            b1: false,
            b2: false,
            b3: false,
            b4: true
        });
    }   
	  render() {
	    return (
	      <div className="App">
	        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
	        <main>
	          <CircleSelector state={this.state} handleClick1={() => this.handleClick1()} handleClick2={() => this.handleClick2()} handleClick3={() => this.handleClick3()} handleClick4={() => this.handleClick4()}/>
            <Circles state={this.state}/>
          </main>
	      </div>
	    );
	  }
	}
	
	export default App;