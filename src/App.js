import React, { Component } from 'react'
import AllNewsCom from './components/AllNewsCom'
import Header from './components/Header'


export default class App extends Component {
  render() {
    return (
      <div>
       <Header />
       <AllNewsCom />
      </div>
    )
  }
}

