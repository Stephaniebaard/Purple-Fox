import "./Buttons.scss";

type ButtonProps = {
	title: string;
	handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
	style?: React.CSSProperties;
	className: string;
	imageSrc: string;
	altText: string;
};

export default function Button({ title, handleClick, style, imageSrc, altText, className }: Readonly<ButtonProps>) {
	return (
		<button onClick={handleClick} style={style} className={className}>
			{imageSrc && <img src={imageSrc} alt={altText} className="ButtonIcon" />}
			{title}
		</button>
	);
}