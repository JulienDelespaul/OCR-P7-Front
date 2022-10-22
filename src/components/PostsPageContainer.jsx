import PostsPageHeader from "./PostsPageComponents/PostsPageHeader";
import PostsPageAddPost from "./PostsPageComponents/PostsPageAddPost";
import Posts from "./Posts";

const PostsPageContainer = () => {
	return (
		<div className="flex flex-col px-2 w-full">
			<PostsPageHeader />
			<div className="overflow-y-scroll w-full">
				<PostsPageAddPost />
				<Posts />
			</div>
		</div>
	);
};

export default PostsPageContainer;
