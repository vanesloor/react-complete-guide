import React, {Component} from 'react';
import classes from './App.css';
import Persons from '.././Components/Persons/Persons';
import Cockpit from '.././Components/Cockpit/Cockpit';

class App extends Component{
  constructor(props){
    super(props); //Calling the propr from the extends Component
    console.log('[App.js] constructor');
  }
  state = {
      persons: [
        {id: '1',name:"Vanessa", age:22},
        {id: '2',name:"Alma", age:42},
        {id: '3',name:"Rosendo", age:50},

      ],
      otherState: "Some other stuff ",
      showPersons: false,
      showCockpit: true,
  }

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
  }

  switchNameHandler = (newName) => {
    //DONT DO this.state.persons[0] = 'Vane';
    this.setState({
      persons: [
        {name:newName, age:22},
        {name:"Alma Rosario", age:42},
        {name:"Rosendo L", age:50}
      ]
    });
  };

  nameChangedHanler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    });
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons:persons  });

  }

  deletePersonHandler = (personIndex) => {
    //To update state always copy the state and then update it
    //either way of the next to work
    //const person = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons:persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }


  render(){
    console.log('[App.js] render');
    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          <Persons
            persons ={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHanler}
          />
        </div>
      );
    }

    return (
        <div className={classes.App}>
        <button onClick={
          ()=>{
            this.setState({showCockpit:false});
          }
        }>Show or not show</button>
        { this.state.showCockpit ?
          <Cockpit
            appTitle={this.props.appTitle}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}
            />
            : null
          }
          {persons}
        </div>
    );
  }
}

export default App;
