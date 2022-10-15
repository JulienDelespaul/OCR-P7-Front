import useLogout from "../../hooks/useLogout";
import useNavIsOpened from "../../hooks/useNavIsOpened";
import { Link } from "react-router-dom";

const PostsPageNavMenu = () => {
	const { navMenuOpened, setNavMenuOpened } = useNavIsOpened();
	const { handleLogout } = useLogout();

	const handleNavMenuOpen = (e) => {
		e.preventDefault();
		handleLogout();
		setNavMenuOpened(!navMenuOpened);
	};

	return (
		<div className="flex flex-col items-center h-full w-full  bg-white border-2 border-primary border-b-8 border-r-8 rounded-2xl">
			<ul className=" p-4 w-full font-bold text-lg ">
				<li className="pr-4 hover:text-primary">
					<Link to="/profile"> Profil</Link>
				</li>
				<li>
					<button onClick={handleNavMenuOpen} className="hover:text-primary">
						Déconnexion
					</button>
				</li>
			</ul>
		</div>
	);
};

export default PostsPageNavMenu;
