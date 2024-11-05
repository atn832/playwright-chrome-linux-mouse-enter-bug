import { useState } from 'react';

function App() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <h1
      onPointerEnter={() => {
        setIsHovered(true);
      }}
      onPointerLeave={() => {
        setIsHovered(false);
      }}
    >
      isHovered. Expected: false. Actual: {isHovered ? 'true' : 'false'}
    </h1>
  );
}

export default App;
