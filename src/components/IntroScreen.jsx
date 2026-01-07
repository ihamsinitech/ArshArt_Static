


import { useEffect } from "react";
import "./IntroVideo.css";

const IntroScreen = ({ onFinish }) => {
  useEffect(() => {
    console.log("🎬 Intro video started");
    
    // Auto redirect after 5 seconds
    const timer = setTimeout(() => {
      console.log("⏰ 5 seconds completed, going to ecommerce");
      onFinish();
    }, 6000);

    return () => {
      console.log("🧹 Cleaning up timer");
      clearTimeout(timer);
    };
  }, [onFinish]);

  const handleVideoEnd = () => {
    console.log("🎬 Video ended");
    onFinish();
  };

  return (
    <div className="intro-container">
      <video
        className="intro-video"
        src="arshartvideo.mp4"
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        onError={(e) => {
          console.error("❌ Video error:", e);
          onFinish(); // Skip to ecommerce even if video fails
        }}
      />
      
    </div>
  );
};

export default IntroScreen;