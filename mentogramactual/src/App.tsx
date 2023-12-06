import { Button } from "@/components/ui/button"
import React, { useState } from 'react';
import Mentorlogin from './mentorlogin';

function App() {
  const [ choice, setChoice ] = useState('null');

  const display = () => {
    if (choice === 'null') {
      return (
      <div className = "choicepage">
      <h1>Please choose!</h1>
      <Button variant="outline" onClick = {() => setChoice("Mentor")}>Mentor</Button>
      <Button variant="outline" onClick = {() => setChoice("Mentee")}>Mentee</Button>  
      </div>);
    }
    else if(choice === "Mentor") {
      return (
      <div className = "mentorlogin">
      <h1>Mentor</h1>
      <Mentorlogin />
      <Button variant="outline" onClick = {() => setChoice("null")}>Back</Button>
      </div>);
    }
    else if(choice === "Mentee") {
      return (
      <div className = "menteelogin">
      <h1>Mentee</h1>
      <Button variant='outline' onClick = {() => setChoice("null")}>Back</Button>
      </div>);
    }
  }
  return (
    <div>
      {display()}
    </div>
  )
}

export default App;