import React, { useState } from "react";

const FlowerPage = () => {
    const [count, setCount] = useState(0);

    const add = () => {
        setCount(count + 1);
    };

    const imageSrc = count >= 10 ? "../../../images/FoxWithBlushEyesClosed.png" : "../../../images/Fox.png";

    return (
      <div>
        <div>
        <img className="Flower" src="../../../images/FlowerWithStem.png" alt="Flower" />
        <img src = {imageSrc} alt="Fox" className="Fox"/>
        </div>
        <img className="Flower" src="../../../images/FlowerWithStem.png" alt="Flower" />
        <h1>{count}</h1>
        <button onClick={add}>Give flower</button>
      </div>
    );
  };
  
  export default FlowerPage;