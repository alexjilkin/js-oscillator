import React from 'react'
import ReactDOM from 'react-dom'
import 'babel-polyfill'
import Oscillator from './view/Oscillator'

ReactDOM.render(<Oscillator updateModulationFunction={() => {}} removeFunction={() => {}} updateState={() => {}}/>,  document.getElementById('app'));
