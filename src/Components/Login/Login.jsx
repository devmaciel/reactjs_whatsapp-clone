import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { auth, provider } from "../../firebase/firebase";
import { actionTypes } from "../../reducer";
import { useStateValue } from "../../StateProvider";

function Login() {
	const [{}, dispatch] = useStateValue();

	const signIn = () => {
		auth
			.signInWithPopup(provider)
			.then((result) => {
				dispatch({
					type: actionTypes.SET_USER,
					user: result.user,
				});
			})
			.catch((error) => alert(error.message));
	};

	return (
		<div className="login">
			<div className="login__container">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/598px-WhatsApp_icon.png"
					alt=""
				/>

				<div className="login__text">
					<h1>Sign In to WhatsApp</h1>
				</div>

				<Button type="submit" onClick={signIn}>
					Sign In with Google
				</Button>
			</div>
		</div>
	);
}

export default Login;
