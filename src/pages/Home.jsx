import React, { useEffect, useState } from "react";
import { GiPartyPopper, GiBalloons } from "react-icons/gi";

const HomePage = () => {
  const [count, setCount] = useState(3);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setShowMessage(true);
    }
  }, [count]);

  return (
    <section className="relative flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-purple-200 to-yellow-100 overflow-hidden text-center p-10">
      {/* 🎈 Floating Balloons */}
      <GiBalloons className="absolute left-8 bottom-10 text-red-400 text-5xl animate-float-slow" />
      <GiBalloons className="absolute right-8 bottom-10 text-blue-500 text-6xl animate-float-slow delay-200" />

      {/* Countdown or Explosion Message */}
      {!showMessage ? (
        <div className="text-9xl font-bold text-purple-800 animate-pulse">{count}</div>
      ) : (
        <div className="text-center animate__animated animate__zoomIn">
          <h1 className="text-5xl font-extrabold text-purple-700 mb-4 animate-bounce">
            <GiPartyPopper className="inline text-yellow-500 text-6xl mr-2" />
            Happy Graduation Day!
          </h1>
          <p className="text-lg text-gray-700 mt-4">
            We did it together — memories forever 🎓✨
          </p>
        </div>
      )}
    </section>
  );
};

export default HomePage;
