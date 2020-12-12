import React from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
//import logo from './logo.svg';

class App extends React.Component {

  // Constructor
  constructor(){
    // call parent - Component
    super(); 

    this.state = {
      monsters: [],
      searchField: ""
    };

  }

  // when creating functions, use arrow/lambda so 'this' can be bidn to its current class
  handleChange = (e) => {
    this.setState({searchField: e.target.value});
  };

  // React Life Cycle method - called when components are put on page
  componentDidMount(){

    console.log(`Before Component did mount`);

    // promise instance of ajax, use .then for resolve and .catch for errors
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      let users = response.json();
      return users;
    })
    .then(users => {
      this.setState({monsters: users})
    })
    .catch(error => {});

    console.log(`After Component did mount`);
  }

  render() {
    // Deep clone the state object
    const {monsters, searchField} = this.state;
    // note that is searchFiled is empty, includes will return true
    const filteredMonster = monsters.filter(m => m.name.toLowerCase()
      .includes(searchField.toLowerCase()));

    console.log(`Filtered monster = ${filteredMonster}`);

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox placeholder="search monsters" 
                  handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}

export default App;
