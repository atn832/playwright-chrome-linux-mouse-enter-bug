import { useState } from 'react';

function App() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onPointerEnter={() => {
        setIsHovered(true);
        console.log('enter');
      }}
      onPointerLeave={() => {
        setIsHovered(false);
        console.log('leave');
      }}
    >
      <h1>
        ishovered?
        { isHovered? 'true':'false' }
      </h1>
    </div>
  );
}

export default App;
