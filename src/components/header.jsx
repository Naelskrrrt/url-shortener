import { Link } from "react-router-dom";

const Header = () => {
	return (
		<nav>
			<Link>
				<img src="/logo.png" className="h-32" alt="logo" />
			</Link>
		</nav>
	);
};

export default Header;
