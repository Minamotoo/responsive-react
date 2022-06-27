import { useState } from 'react';
import styled from 'styled-components';

import Navbar from './components/Navbar';
import Button from './components/Button';

const Orange = styled.div`
  height: calc(100vh - 8rem);
`;

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [number, setNumber] = useState(5);

  const handleGoToYellow = () => {
    const yellowID = document.getElementById('yellow');
    yellowID?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <input
        value={username}
        placeholder="Enter your username"
        className="border rounded-md px-2 py-1"
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        value={password}
        placeholder="Enter your password"
        className="border rounded-md px-2 py-1 mt-2"
        type="password"
        onChange={(event) => setPassword(event.target.value)}
      />
      <Button
        buttonName="Submit"
        onClick={() => {
          // alert('submit');
          setIsSubmiting((prev) => !prev);
        }}
        isLoading={isSubmiting}
      />
      <Button
        buttonName="Register"
        onClick={() => prompt('enter new member')}
      />
      <h1>Number {number}</h1>
      <div className="w-max flex gap-4 mt-4">
        <button
          className="rounded-full p-2 bg-red-500 text-white w-10 h-10"
          onClick={() => setNumber((prev) => prev - 1)}
        >
          -
        </button>
        <button
          className="rounded-full p-2 bg-green-500 text-white w-10 h-10"
          onClick={() => setNumber((prev) => prev + 1)}
        >
          +
        </button>
      </div>
    </div>
  );

  return (
    <div className="w-full h-screen">
      <Navbar />
      <button onClick={handleGoToYellow}>press to go to yellow</button>
      <Orange className="lg:ml-0 ml-64 overflow-y-auto">
        <div className="h-32 w-1/2 bg-orange-400" />
        <div className="h-32 w-full bg-blue-400" />
        <div className="h-32 w-full bg-green-400" />
        <div id="yellow" className="h-32 w-full bg-yellow-400" />
        <div className="h-32 w-1/2 bg-pink-400" />
        <div className="h-32 w-1/2 bg-red-400" />
      </Orange>
    </div>
  );
}

export default App;
