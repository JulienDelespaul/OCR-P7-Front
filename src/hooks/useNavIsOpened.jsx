import { useContext } from "react";
import NavIsOpenedContext from "../context/NavIsOpenedProvider";

const useNavIsOpened = () => {
	return useContext(NavIsOpenedContext);
};

export default useNavIsOpened;
