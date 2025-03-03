import "./Buttons.scss";

type ButtonProps = {
	title: string;
	handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
	style: React.CSSProperties;
};

export default function Button({ title, handleClick, style }: Readonly<ButtonProps>) {
	return (
		<button onClick={handleClick} className="Button" style={style}>
			{title}
		</button>
	);
}