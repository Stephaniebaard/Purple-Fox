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

    const moveButton = (event: React.MouseEvent<HTMLButtonElement>) => {
        setPositionIndex((prevIndex)=>(prevIndex + 1) % positions.length);
    };


    return (
<div style={{ position: 'relative', width: '100vw', height: '100vh' }} className="EnvelopeBox">
 <img className="EnvelopeImage" src="../../../images/Envelope.png" alt="Envelope" /> 
 <div className="ButtonBox">
<Button
        title="Open" 
        handleClick={() => {}}
        style={{ position: 'relative', left: '10%', top: '40%' }}
        />
<Button
        title="Throw away" 
        handleClick={moveButton}
        style= {{
            position: 'relative',
            ...positions[positionIndex], 
            transition: 'top 0,5s, left 0,5s',}}
        />
        </div>
</div>
);
};

export default ButtonMove;
