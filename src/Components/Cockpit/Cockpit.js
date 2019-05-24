import React, {useEffect} from 'react';
import classes from './Cockpit.css'

const Cockpit = (props) =>{

  useEffect(()=>{
    console.log('[Cockpit.js] useEffect');
    //you can use an http request
    //Runs the first time always, with a second argument it updates
    //if something has changed
    setTimeout(()=>{
        alert("Something has changed");
    }, 1000);
    return ()=>{
      console.log('[Cockpit.js] clean up work in useEffect');
    }
  }, [props.persons]);

  const assignedClasses = [];
  let btnClass = '';

  if(props.showPersons){
    btnClass = classes.Red;
  }

  if(props.persons.length <=2)
    assignedClasses.push(classes.red);

  if(props.persons.length <=1)
    assignedClasses.push(classes.bold);

  return(
    <div className={classes.Cockpit}>
      <h1>React</h1>
      <p className={assignedClasses}>Hi I am a React App</p>
      <p>This is a title passed through props <b>{props.appTitle}</b></p>
      <button
        className={btnClass}
        onClick={props.clicked} >
        Toggle Persons
      </button>
    </div>
  );
}
export default Cockpit;
