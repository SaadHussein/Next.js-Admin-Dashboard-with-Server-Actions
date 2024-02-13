import React from "react";
import styles from "./pagination.module.css";

const Pagination = () => {
	return (
		<div className={styles.container}>
			<button disabled className={styles.button}>
				Pervious
			</button>
			<button className={styles.button}>Next</button>
		</div>
	);
};

export default Pagination;
