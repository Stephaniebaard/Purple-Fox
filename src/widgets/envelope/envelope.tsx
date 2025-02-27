import Button from "../../components/buttons/Buttons";

export default function () {
    return (
<div className="EnvelopeBox">
 <img src="../../../images/Envelope.png" alt="Envelope" /> 
<Button
        title="Open" handleClick={function (): void {
            throw new Error("Function not implemented.");
        } }/>
<Button
        title="Throw away" handleClick={function (): void {
            throw new Error("Function not implemented.");
        } }/>
</div>
);
}