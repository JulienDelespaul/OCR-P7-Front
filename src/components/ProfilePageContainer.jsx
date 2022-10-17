import LoginPageSplashText from "./LoginPageComponents/LoginPageSplashText";
import ProfilePage from "./ProfilePageComponents/ProfilePageContent";

const ProfilePageContainer = () => {
	return (
		<div className=" container h-screen flex flex-col mx-auto px-2 content-center w-full">
			<div className="flex flex-row justify-between">
				<LoginPageSplashText />
			</div>
			<ProfilePage />
		</div>
	);
};

export default ProfilePageContainer;
