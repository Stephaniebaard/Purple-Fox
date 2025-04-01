import "../styles/meny.scss";
import Button from "../components/buttons/Buttons";
import { useNavigate } from "react-router";

type MenuProps = {
    onButtonClick: (buttonName: string) => void; // Funktion för att hantera knapptryck i menyn
  };
  
  const Menu: React.FC<MenuProps> = ({ onButtonClick }) => {
    const navigate = useNavigate();

    const handleJokesClick = () => {
      onButtonClick('Button 3');
      navigate("/jokes");
    };

    const handleFlowerShopClick = () => {
      onButtonClick('Button 1');
      navigate("/flower");
    }

    const handleLetterClick = () => {
      onButtonClick('Button 2');
      navigate("/letter");
    }

    const handlePlaylistClick = () => {
      onButtonClick('Button 4');
      navigate("/playlist");
    }

    return (
      <div className="Menu">
         <div className="Title">
         <img className="LetterIcon" src="../../../images/FourLetters.png" alt="LetterIcon" />
         <h1>You've got mail</h1>
         </div>
        <Button title="Flower Shop"  handleClick={handleFlowerShopClick} className="MenuButton"  altText="Flower" imageSrc="../../../images/FlowerBigger.png"/>
        <Button title="Letter" handleClick={handleLetterClick} className="MenuButton" altText="Envelope" imageSrc="../../../images/EnvelopeOpen.png"/>
        <Button title="Jokes" handleClick={handleJokesClick} className="MenuButton" altText="Heart" imageSrc="../../../images/BigHeart - kopia.png"/>
        <Button title="Playlist" handleClick={handlePlaylistClick} className="MenuButton" altText="Notes" imageSrc="../../../images/MusicNote2.png"/>
      </div>
    );
  };
  
  export default Menu;