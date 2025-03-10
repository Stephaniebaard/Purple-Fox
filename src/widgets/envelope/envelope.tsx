import Button from "../../components/buttons/Buttons";
import "./envelope.scss";
import React, {useState} from "react";

const ButtonMove: React.FC = () => {
    const positions = [
        {top: '10%', left: '10%'},
        {top: '20%', left: '50%'},
        {top: '50%', left: '20%'},
        {top: '70%', left: '70%'},
        {top: '40%', left: '80%'},
    ];

    const [positionIndex, setPositionIndex] = useState(0);
    const [isClicked, setIsClicked] = useState(false);


    const moveButton = (event: React.MouseEvent<HTMLButtonElement>) => {
        setIsClicked(true);
        setPositionIndex((prevIndex)=>(prevIndex + 1) % positions.length);
    };


    return (
<div style={{ position: 'relative', width: '100vw', height: '100vh' }} className="EnvelopeBox">
 <img className="EnvelopeImage" src="../../../images/envelope2.png" alt="Envelope" /> 
 <div className="ButtonBox">
<Button
        title="Open" 
        handleClick={() => {}}
        className="OpenEnvelopeButton"
        />
 <Button
        title="Throw away"
        handleClick={moveButton}
        style={isClicked ? {
            position: 'absolute',
            top: positions[positionIndex].top,
            left: positions[positionIndex].left,
            transition: 'top 0.5s, left 0.5s',
        } : {}}
        className="ThrowAwayEnvelopeButton"
                />
        </div>
</div>
);
};

export default ButtonMove;
