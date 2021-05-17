import React from 'react';
import { RobotList } from './components/RobotList/RobotList';
import SearchBox from './components/SearchBox/SearchBox';
import './App.css'

class App extends React.Component {
  constructor() {

    super() // extends functionalities from class Component

    this.state = {
      robots: [],
      searchField: ''
    }

    // this.handleChange = this.handleChange.bind(this)
  }

  // Life Cycle Methods
  async componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(res => console.log(res))

    // API call
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')

    /**
     * .json() retorna uma promisse com o BODY da resposta
     */

    const robots = await resp.json() 
    this.setState({ robots })
  }

  /**
   * Toda vez que chama setState ele chama render, chamar setState dentro do render
   * cria um loop
   */

  /**
   *  Qndo props muda, React re-render o comp
   */

  /**
   * Arrow func bind this to the place where the arrow func was defined, not where
   * was call
   */

  handleChange = e => {
    this.setState({searchField: e.target.value})
  }

  render() {
    const { robots, searchField } = this.state
    const filteredRobots = robots.filter(robot => // retirar {} para retornar
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
        <h1>Robots Rolodex</h1>
        <SearchBox 
          placeholder="Search ..." 
          onHandleChange={ this.handleChange }
        />
        <RobotList robots={ filteredRobots } />
      </div>
    );
  }
}

export default App;
