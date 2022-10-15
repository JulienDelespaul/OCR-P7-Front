import { createContext, useState } from "react";

const NavIsOpenedContext = createContext({});

export const NavIsOpenedProvider = ({ children }) => {
	const [navMenuOpened, setNavMenuOpened] = useState(false);

	return <NavIsOpenedContext.Provider value={{ navMenuOpened, setNavMenuOpened }}>{children}</NavIsOpenedContext.Provider>;
};

export default NavIsOpenedContext;
