import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import RequireAuth from "./components/RequireAuth";
import LoginPage from "./pages/LoginPage";
import PostsPage from "./pages/PostsPage";
import Unauthorized from "./pages/UnauthorizedPage";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				{/* Public routes */}
				<Route path="login" element={<LoginPage />} />
				{/* Private routes */}
				<Route element={<RequireAuth allowedRoles={["user", "admin"]} />}>
					<Route path="posts" element={<PostsPage />} />
					<Route path="posts" element={<PostsPage />} />
				</Route>
				{/* Redirect to login page */}
				<Route path="unauthorized" element={<Unauthorized />} />
				<Route path="/" element={<LoginPage />} />
			</Route>
		</Routes>
	);
}

export default App;
