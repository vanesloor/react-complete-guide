import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
  // static getDerivedStateFromProps(props, state){
  //   console.log("[Persons.js] getDerivedStateFromProps");
  //   return state;
  // }
  // componentWillRecieveProps(props){
  //   console.log('[Persons.js] componentWillRecieveProps');
  // }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[Persons.js] shouldComponentUpdate');
    //Should have a condition comparing the nextProps with the oldprops
    //and the nextState
    //it returns a true or false meaning if it has to update or not.
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, preState){
    //In reality you might return some cordenates for scrolling
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return null;
  }
  // componentWillUpdate(){
  // Shouldn't be used anymore
  // }
  componentDidUpdate(prevProps, preState, snapshot){
    console.log('[Persons.js] componentDidUpdate');
  }

  componentWillUnmount(){
    console.log('[Persons.js] componentWillUnmount');
  }

  render(){
    console.log('[Persons.js] rendering...');

    return this.props.persons.map((person, index) => {
      return <Person
        click={()=>this.props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={(event) => this.props.changed(event, person.id)}
      />
    });
  }
};
export default Persons;
