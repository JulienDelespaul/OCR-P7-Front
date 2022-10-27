import { PostsRefreshProvider } from "../context/PostsRefreshProvider";
import PostsPageHeader from "../components/PostsPageComponents/PostsPageHeader";
import PostsPageAddPost from "../components/PostsPageComponents/PostsPageAddPost";
import Posts from "../components/Posts";

const PostsPage = () => {
	return (
		<PostsRefreshProvider>
			<div className="flex flex-col px-2 w-full h-screen max-w-7xl mx-auto">
				<PostsPageHeader />
				<div className="overflow-y-scroll w-full">
					<PostsPageAddPost />
					<Posts />
				</div>
			</div>
		</PostsRefreshProvider>
	);
};

export default PostsPage;
