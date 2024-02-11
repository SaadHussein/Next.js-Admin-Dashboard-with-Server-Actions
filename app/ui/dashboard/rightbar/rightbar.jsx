import React from "react";
import styles from "./rightbar.module.css";
import Image from "next/image";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const Rightbar = () => {
	return (
		<div className={styles.container}>
			<div className={styles.item}>
				<div className={styles.bgContainer}>
					<Image
						src="/astronaut.png"
						alt="Astronaut Image"
						fill
						className={styles.bg}
					/>
				</div>
				<div className={styles.texts}>
					<span className={styles.notification}>🔥 Available Now</span>
					<h3 className={styles.title}>
						How To Use The New Version of The Admin Dashboard ?
					</h3>
					<span className={styles.subtitle}>Takes 4 Minutes To Learn</span>
					<p className={styles.desc}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Reprehenderit eius libero perspiciatis recusandae possimus.
					</p>
					<button className={styles.button}>
						<MdPlayCircleFilled />
						Watch
					</button>
				</div>
			</div>
			<div className={styles.item}>
				<div className={styles.texts}>
					<span className={styles.notification}>🚀 Coming Soon</span>
					<h3 className={styles.title}>
						New server actions are available, partial pre-rendering is coming
						up!
					</h3>
					<span className={styles.subtitle}>Boost your productivity</span>
					<p className={styles.desc}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Reprehenderit eius libero perspiciatis recusandae possimus.
					</p>
					<button className={styles.button}>
						<MdReadMore />
						Learn
					</button>
				</div>
			</div>
		</div>
	);
};

export default Rightbar;
