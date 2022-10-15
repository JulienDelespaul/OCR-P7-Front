import PostsPageContainer from "../components/PostsPageContainer";
import { PostsRefreshProvider } from "../context/PostsRefreshProvider";
import { NavIsOpenedProvider } from "../context/NavIsOpenedProvider";

const PostsPage = () => {
	return (
		<NavIsOpenedProvider>
			<PostsRefreshProvider>
				<div className="h-screen flex  justify-center">
					<PostsPageContainer />
				</div>
			</PostsRefreshProvider>
		</NavIsOpenedProvider>
	);
};

export default PostsPage;
