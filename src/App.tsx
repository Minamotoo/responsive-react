import styled from 'styled-components';

import Navbar from './components/Navbar';

const Orange = styled.div`
  height: calc(100vh - 8rem);
`;

function App() {
  const handleGoToYellow = () => {
    const yellowID = document.getElementById('yellow');
    yellowID?.scrollIntoView({ behavior: 'smooth' });
  };

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
