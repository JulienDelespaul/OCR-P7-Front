import "../Button/button.css";

const EditPost = ({ setShowModal }) => {
	return (
		<button onClick={setShowModal} className="brutal-btn">
			Modifier
		</button>
	);
};

export default EditPost;
