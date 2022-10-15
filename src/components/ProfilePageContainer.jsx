import LoginPageSplashText from "./LoginPageComponents/LoginPageSplashText";
import ProfilePage from "./ProfilePageComponents/ProfilePage";
import BackButton from "./Button/BackButton";
import { Navigate, useNavigate } from "react-router-dom";

const ProfilePageContainer = () => {
	return (
		<div className=" container flex flex-col mx-auto px-2 content-center w-full">
			<div className="flex flex-row justify-between">
				<LoginPageSplashText />
			</div>
			<ProfilePage />
			<div className="flex content-center mx-auto">
				<BackButton />
			</div>
		</div>
	);
};

export default ProfilePageContainer;
