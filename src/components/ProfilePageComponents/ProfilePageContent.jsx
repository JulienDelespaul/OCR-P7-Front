import "../Button/button.css";
import { useState, useEffect, Suspense } from "react";
import axios from "../../Api/axios";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import BackButton from "../Button/BackButton";

const ProfilePage = () => {
	const { auth } = useAuth();
	const [profile, setProfile] = useState({});
	const id = auth.userId;
	const [editProfile, setEditProfile] = useState(true);

	const { register, handleSubmit, reset, formState, setFocus } = useForm({});

	useEffect(() => {
		let isMounted = true;

		const getProfile = async () => {
			try {
				const response = await axios.get(`auth/profile/${id}`, { headers: { Authorization: `Bearer ${auth.token}` } });
				const profile = response.data;
				isMounted && setProfile(profile);
				reset(profile);
				console.log("profile", response.data);
			} catch (error) {
				console.log(error);
			}
		};
		getProfile();
		return () => {
			isMounted = false;
		};
	}, [id, auth.token, reset]);

	const HandleInput = async (data) => {
		const formData = new FormData();
		formData.append("firstName", data.firstName);
		formData.append("lastName", data.lastName);
		formData.append("position", data.position);
		formData.append("department", data.department);
		formData.append("bio", data.bio);
		console.log("formData", formData);
		try {
			const response = await axios.put(`auth/profile/${id}`, formData, {
				headers: { Authorization: `Bearer ${auth.token}` },
			});
			console.log(response);
			reset(profile, { keepValues: true });
			setEditProfile(true);
		} catch (error) {
			console.log(error);
		}
	};
	const [focusTrigger, setFocusTrigger] = useState(false);

	const handleEdit = () => {
		setEditProfile(false);
		setFocusTrigger(!focusTrigger);
	};

	useEffect(() => {
		setFocus("firstName");
	}, [focusTrigger, setFocus]);

	return (
		<div className="h-max mt-4 p-4 w-full flex flex-col  object-top border-2 border-tertiary border-b-8 border-r-8 rounded-2xl">
			<div className="flex flex-row justify-between">
				<h1 className="text-primary text-xl pb-1">Profil de l'utilisateur </h1>
				<BackButton />
			</div>
			<form onSubmit={handleSubmit(HandleInput)} className="flex flex-col gap-1">
				<div>
					<label className="text-primary" htmlFor="firstName">
						Prénom :
					</label>
					<input
						className={"text-tertiary " + (formState.dirtyFields.firstName ? "bg-secondary" : "")}
						type="text"
						name="firstName"
						id="firstName"
						disabled={editProfile}
						{...register("firstName")}
					/>
				</div>
				<div>
					<label className="text-primary" htmlFor="lastName">
						Nom :
					</label>
					<input
						type="text"
						name="lastName"
						id="lastName"
						className={"text-tertiary " + (formState.dirtyFields.lastName ? "bg-secondary" : "")}
						disabled={editProfile}
						{...register("lastName")}
					/>
				</div>
				<div>
					<label className="text-primary" htmlFor="position">
						Poste :
					</label>
					<input
						type="text"
						name="position"
						id="position"
						className={"text-tertiary " + (formState.dirtyFields.position ? "bg-secondary" : "")}
						disabled={editProfile}
						{...register("position")}
					/>
				</div>
				<div>
					<label className="text-primary" htmlFor="department">
						Service :
					</label>
					<input
						type="text"
						name="department"
						id="department"
						className={"text-tertiary " + (formState.dirtyFields.department ? "bg-secondary" : "")}
						disabled={editProfile}
						{...register("department")}
					></input>
				</div>
				<label className="text-primary" htmlFor="bio">
					Bio :
				</label>
				<textarea
					name="bio"
					id="bio"
					rows="5"
					disabled={editProfile}
					{...register("bio")}
					className={"text-tertiary " + (formState.dirtyFields.bio ? "bg-secondary" : "")}
				/>
				{editProfile && (
					<button className="brutal-btn" type="button" onClick={handleEdit}>
						Modifier le profil
					</button>
				)}
				{formState.isDirty && <button className="brutal-btn">Enregistrer les modifications</button>}
			</form>
		</div>
	);
};

export default ProfilePage;
