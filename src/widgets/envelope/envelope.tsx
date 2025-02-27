import Button from "../../components/buttons/Buttons";
import "./envelope.scss";

export default function () {
    return (
<div className="EnvelopeBox">
 <img className="EnvelopeImage" src="../../../images/Envelope.png" alt="Envelope" /> 
 <div className="ButtonBox">
<Button
        title="Open" handleClick={function (): void {
            throw new Error("Function not implemented.");
        } }/>
<Button
        title="Throw away" handleClick={function (): void {
            throw new Error("Function not implemented.");
        } }/>
        </div>
</div>
);
}