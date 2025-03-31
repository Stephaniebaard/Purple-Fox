import Button from "../components/buttons/Buttons";
import Menu from "./MenuPage";
import "../styles/envelope.scss";
import React, {useState} from "react";

const HomePage: React.FC = () => {
    const positions = [
        {top: '10%', left: '10%'},
        {top: '20%', left: '50%'},
        {top: '50%', left: '20%'},
        {top: '70%', left: '70%'},
        {top: '40%', left: '80%'},
    ];

    const [positionIndex, setPositionIndex] = useState(0);
    const [isClicked, setIsClicked] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State för att kontrollera om menyn är öppen


    const moveButton = (event: React.MouseEvent<HTMLButtonElement>) => {
        setIsClicked(true);
        setPositionIndex((prevIndex)=>(prevIndex + 1) % positions.length);
    };
     const toggleMenu = () => {
      setIsMenuOpen((prevState) => !prevState);// Växla menyns visibilitet
      };
      
      const handleMenuButtonClick = (buttonName: string) => {
        console.log(`Clicked on ${buttonName}`); // Hantera knapptryck från menyn
      };

    return (
<div style={{ position: 'relative', width: '100vw', height: '100vh' }} className="EnvelopeBox">
 <img className={`EnvelopeImage ${isMenuOpen ? 'hidden' : ''}`} src="../../../images/envelope2.png" alt="Envelope" /> 
 
 <div className="ButtonBox">
<Button
        title="Open" 
        handleClick={toggleMenu} // Hantera öppning/stängning av menyn
        className={`OpenEnvelopeButton ${isMenuOpen ? "hidden" : ""}`}
        altText=""
        imageSrc=""

        />
         {/* Visa menyn om isMenuOpen är true */}

      {isMenuOpen && (
       <Menu onButtonClick={handleMenuButtonClick} /> 
     )}

 <Button
        title="Throw away"
         altText=""
        imageSrc=""
        handleClick={moveButton}
        style={isClicked ? {
            position: 'absolute',
            top: positions[positionIndex].top,
            left: positions[positionIndex].left,
            transition: 'top 0.5s, left 0.5s',
        } : {}}
        className={`ThrowAwayEnvelopeButton ${isMenuOpen ? "hidden" : ""}`}
                />
        </div>
 
        </div>
);
};

export default HomePage;
