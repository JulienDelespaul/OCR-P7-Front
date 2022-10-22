import ProfileModal from "../Button/profileModal";
import useAuth from "../../hooks/useAuth";

const PostsPageHeader = () => {
	const { auth } = useAuth();

	return (
		<div className="flex justify-between items-center w-full sticky top-0 bg-white">
			<div className="mb-2 w-full z-10 flex justify-between items-center object-top border-2 text-tertiary border-primary border-b-8 border-r-8 rounded-2xl ">
				{auth.role === "admin" ? (
					<h1 className="p-2 flex items-baseline font-bold text-primary text-xl ">Groupomania (ADMINISTRATEUR)</h1>
				) : (
					<h1 className="p-2 flex items-baseline font-bold text-primary text-xl ">Groupomania</h1>
				)}
				<ProfileModal />
			</div>
		</div>
	);
};

export default PostsPageHeader;
