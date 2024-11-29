import React, { useRef, useState } from "react";

const App = () => {

  const timerRef = useRef(null);
  const [time, setTime] = useState(0);

  const startTimer = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };


  const imgRef = useRef(null);

  const handleMouseEnter = () => {
    imgRef.current.style.transform = "scale(1.2)";
    imgRef.current.style.transition = "transform 0.3s ease-in-out";
  };

  const handleMouseLeave = () => {
    imgRef.current.style.transform = "scale(1)";
  };

  
  const videoRef = useRef(null);

  const playVideo = () => {
    videoRef.current.play();
  };

  const pauseVideo = () => {
    videoRef.current.pause();
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
    
      <div style={{ marginBottom: "50px" }}>
        <h2>Timer: {time}s</h2>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>

     
      <div style={{ marginBottom: "50px" }}>
        <h2>Hover to Zoom</h2>
        <img
          ref={imgRef}
          src="data:image/jpeg;base64,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"
          alt="Zoomable"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ width: "300px", height: "200px", objectFit: "cover" }}
        />
      </div>

      
      <div>
        <h2>Video Player</h2>
        <video
          ref={videoRef}
          width="320"
          height="240"
          controls={false}
          style={{ marginBottom: "10px" }}
        >
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <br />
        <button onClick={playVideo}>Play</button>
        <button onClick={pauseVideo}>Pause</button>
      </div>
    </div>
  );
};

export default App;
