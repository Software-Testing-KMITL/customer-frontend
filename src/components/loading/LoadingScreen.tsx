import React from 'react';
import ReactLoading from 'react-loading';

const LoadingScreen = () => {
  return (
    <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
      <ReactLoading
        type={"spinningBubbles"}
        color={'#22C55E'}
        height={100}
        weight={100}      >
      </ReactLoading>
    </div>
  );
};

export default LoadingScreen;
