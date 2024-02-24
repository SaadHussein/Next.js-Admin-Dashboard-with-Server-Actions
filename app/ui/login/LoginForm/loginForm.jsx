import { authenticate } from "@/app/lib/actions";
import styles from "@/app/ui/login/LoginForm/loginForm.module.css";
import React from "react";
import { useFormState } from "react-dom";

const LoginForm = () => {
	const [state, formAction] = useFormState(authenticate, undefined);

	return (
		<div>
			<form action={formAction} className={styles.form}>
				<h1>Login</h1>
				<input type="text" name="username" placeholder="Username" />
				<input type="password" name="password" placeholder="Password" />
				<button>Login</button>
				{state && state}
			</form>
		</div>
	);
};

export default LoginForm;
