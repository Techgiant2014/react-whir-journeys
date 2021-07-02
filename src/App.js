import React from 'react'

import './App.css'

import Header from './components/Header'
import GridHeader from './components/GridHeader'
import Journey from './components/Journey'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      journeys: []
    }
  }

  componentDidMount() {
    
    fetch("https://60ddaca0878c890017fa2a90.mockapi.io/api/v1/routes")
    .then(response => response.json())
    .then((response) => {
      // console.log(response.data);
      this.setState({
        journeys: response
      })

    })
    .catch((error) => {
      console.log(error);
    })
    
  }

  render() {
    let counter = 1;
    const journeysComponents = this.state.journeys.map((journey) => {
      return <Journey 
        key={journey.id}
        counter={counter++}
        journey={journey}
      />
    })
    return (
      <div>
        <Header />
        <div class="container">
        <GridHeader />
        {journeysComponents}
        </div>
      </div>
    )
  }
}

export default App;