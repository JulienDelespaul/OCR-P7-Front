import PostsPageContainer from "../components/PostsPageContainer";
import { PostsRefreshProvider } from "../context/PostsRefreshProvider";
import { NavIsOpenedProvider } from "../context/NavIsOpenedProvider";

const PostsPage = () => {
	return (
		<NavIsOpenedProvider>
			<PostsRefreshProvider>
				<div className="h-screen max-w-7xl mx-auto">
					<PostsPageContainer />
				</div>
			</PostsRefreshProvider>
		</NavIsOpenedProvider>
	);
};

export default PostsPage;
