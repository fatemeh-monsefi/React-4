import { useState } from "react";

function RandomAdvice() {
  const [advice, setAdvice] = useState("");

  function handleClick() {
    const getAdvice = async () => {
      try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
        setAdvice(data.slip.advice);
      } catch (error) {
        console.error(error);
        setAdvice("Failed to fetch data. Please try again.");
      }
    };

    getAdvice();
  }

  return (
    <>
      <button onClick={handleClick}>Click 4 a Random Advice</button>
      <p>{advice}</p>
    </>
  );
}

export default RandomAdvice;
