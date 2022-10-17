import useNavIsOpened from "../../hooks/useNavIsOpened";

const PostsPageHeader = () => {
	const { navMenuOpened, setNavMenuOpened } = useNavIsOpened();

	const handleNavMenuOpen = () => {
		setNavMenuOpened(!navMenuOpened);
	};

	return (
		<div className="sticky top-0 mb-2 w-full z-10 flex justify-between items-center object-top border-2 bg-white text-tertiary border-primary border-b-8 border-r-8 rounded-2xl ">
			<h1 className="p-2 flex items-baseline font-bold text-primary text-xl ">Groupomania</h1>
			<button onClick={handleNavMenuOpen} className="p-2 flex items-baseline font-bold text-primary text-xl ">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
				</svg>
			</button>
		</div>
	);
};

export default PostsPageHeader;
