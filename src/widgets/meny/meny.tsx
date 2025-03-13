import "./meny.scss";
import Button from "../../components/buttons/Buttons";

type MenuProps = {
    onButtonClick: (buttonName: string) => void; // Funktion för att hantera knapptryck i menyn
  };
  
  const Menu: React.FC<MenuProps> = ({ onButtonClick }) => {
    return (
      <div className="Menu">
        <Button title="Button 1" handleClick={() => onButtonClick('Button 1')} className="MenuButton" />
        <Button title="Button 2" handleClick={() => onButtonClick('Button 2')} className="MenuButton" />
        <Button title="Button 3" handleClick={() => onButtonClick('Button 3')} className="MenuButton" />
        <Button title="Button 4" handleClick={() => onButtonClick('Button 4')} className="MenuButton" />
      </div>
    );
  };
  
  export default Menu;