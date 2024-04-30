import React from 'react';

function App() {
  return (
    <div className="App" style={{
      width: '100vw',
      height: '100vh',
      background: 'linear-gradient(45deg, #ccfbff, #ffffff, #ef96c5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'VM'
    }}>
      <h1 style={{ 
        fontSize: '10rem', 
        color: '#000', 
        animation: 'pulse 2s ease infinite',
        }}>
        This is<br />&nbsp;&nbsp;Arsh's Portfolio
      </h1>
      <style>
        {`
          @keyframes pulse {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.1);
            }
            100% {
              transform: scale(1);
            }
          }
        `}
      </style>
    </div>
  );
}

export default App;
