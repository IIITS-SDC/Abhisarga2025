import { useEffect, useState } from "react";

function SplashScreen() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100); // Delay for smooth animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="relative flex items-center justify-center h-screen bg-black bg-cover bg-center"
      style={{
        backgroundImage: `url('/assets/homeBg.webp')`,
      }}
    >
      {/* Backdrop overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      {/* Content */}
      <div className="absolute z-10 flex flex-col items-center justify-center">
        <img
          className={`max-w-[700px] w-[300px] md:w-[700px] md:h-[300px] transform transition-transform duration-1000 p-4 ${
            isLoaded ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
          src="/assets/new_logo.png"
          alt="Logo"
        />
      </div>
    </div>
  );
}

export default SplashScreen;
