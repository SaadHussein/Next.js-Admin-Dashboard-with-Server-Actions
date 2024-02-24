"use client";

import React from "react";
import styles from "@/app/ui/login/login.module.css";
import LoginForm from "../ui/login/LoginForm/loginForm";

const LoginPage = () => {
	return (
		<div className={styles.container}>
			<LoginForm />
		</div>
	);
};

export default LoginPage;
