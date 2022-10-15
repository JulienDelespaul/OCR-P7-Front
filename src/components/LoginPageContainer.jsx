// Rename container to something more descriptive like LoginPage

import LoginPageSplashText from "./LoginPageComponents/LoginPageSplashText";
import LoginPageForm from "./LoginPageComponents/LoginPageForm";
import CreateAccountForm from "./LoginPageComponents/CreateAccountForm";
import { useState } from "react";

const LoginPageContainer = () => {
	// switch beetwen login and create account;
	const [createAccountForm, setCreateAccountForm] = useState(false);
	const toggleAccountForm = () => {
		setCreateAccountForm(!createAccountForm);
	};

	return (
		<div className="container flex flex-col lg:flex-row justify-between items-center lg:items-start px-2 w-full">
			<LoginPageSplashText />
			{!createAccountForm ? <LoginPageForm toggleAccountForm={toggleAccountForm} /> : <CreateAccountForm toggleAccountForm={toggleAccountForm} />}
		</div>
	);
};

export default LoginPageContainer;
