import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
	const { auth } = useAuth();
	const location = useLocation();
	// const role = auth.auth.role;
	// const userId = auth.auth.userId;
	console.log(auth.role);

	return allowedRoles?.includes(auth.role) ? (
		<Outlet />
	) : auth?.userId ? (
		<Navigate to="/unauthorized" state={{ from: location }} replace />
	) : (
		<Navigate to="/login" state={{ from: location }} replace />
	);
};

export default RequireAuth;
