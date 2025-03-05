import "./Buttons.scss";

type ButtonProps = {
	title: string;
	handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
	style?: React.CSSProperties;
	className: string
};

export default function Button({ title, handleClick, style, className }: Readonly<ButtonProps>) {
	return (
		<button onClick={handleClick} style={style} className={className}>
			{title}
		</button>
	);
}