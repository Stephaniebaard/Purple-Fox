import "./meny.scss";
import Button from "../../components/buttons/Buttons";

type MenuProps = {
    onButtonClick: (buttonName: string) => void; // Funktion för att hantera knapptryck i menyn
  };
  
  const Menu: React.FC<MenuProps> = ({ onButtonClick }) => {
    return (
      <div className="Menu">
        <Button title="Flower Shop"  handleClick={() => onButtonClick('Button 1')} className="MenuButton"  altText="Flower" imageSrc="../../../images/Flower.png"/>
        <Button title="Letter" handleClick={() => onButtonClick('Button 2')} className="MenuButton" altText="Envelope" imageSrc="../../../images/EnvelopeOpen.png"/>
        <Button title="Jokes" handleClick={() => onButtonClick('Button 3')} className="MenuButton" altText="Heart" imageSrc="../../../images/Heart.png"/>
        <Button title="Playlist" handleClick={() => onButtonClick('Button 4')} className="MenuButton" altText="Notes" imageSrc="../../../images/MusicNote2.png"/>
      </div>
    );
  };
  
  export default Menu;