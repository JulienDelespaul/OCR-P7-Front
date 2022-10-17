import PostsPageHeader from "./PostsPageComponents/PostsPageHeader";
import PostsPageAddPost from "./PostsPageComponents/PostsPageAddPost";
import PostsPageNavMenu from "./PostsPageComponents/PostsPageNavMenu";
import useNavIsOpened from "../hooks/useNavIsOpened";
import Posts from "./Posts";

const PostsPageContainer = () => {
	const { navMenuOpened } = useNavIsOpened();

	return (
		// if navMenuOpenened is true, the nav menu is displayed
		<div className="flex flex-col px-2 items-center justify-center w-full">
			<PostsPageHeader />
			{navMenuOpened && <PostsPageNavMenu />}
			{!navMenuOpened && (
				<div className="overflow-y-scroll w-full">
					<PostsPageAddPost />
					<Posts />
				</div>
			)}
		</div>
	);
};

export default PostsPageContainer;
