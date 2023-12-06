import React, {useState} from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Mentorlogin() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const sendDataToServer = async () => {
        try {
          const response = await fetch('http://localhost:5000/mentorlogin', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email, password: password }),
          });
    
          if (response.ok) {
            const responseData = await response.json();
            console.log('Server Response:', responseData);
            // Handle success, maybe set a success message or redirect
          } else {
            console.error('Failed to send data');
            // Handle error, display an error message
          }
        } catch (error) {
          console.error('Error sending data:', error);
          // Handle network errors, exceptions, etc.
        }
      };
    

    const handleSubmit = (e) => {
        e.preventDefault();
        // Do something with the input value, for example, log it
        sendDataToServer();
        // You can also reset the input value after using it
        setEmail('');
        setPassword('');
      };

    return (
    <div className='mentorlogin'>
    <form onSubmit = {handleSubmit}>
    <Input type="email" placeholder="Email" value={email} onChange={handleEmailChange}/>
    <br/>
    <Input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
    <br/>
    <Button variant="secondary" type = 'submit'>Login</Button>
    <br/>
    </form>
    </div>
    )


}
