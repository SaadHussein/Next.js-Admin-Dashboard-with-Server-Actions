"use client";

import React from "react";
import styles from "./pagination.module.css";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

const Pagination = ({ count }) => {
	const searchParams = useSearchParams();
	const { replace } = useRouter();
	const pathname = usePathname();

	const page = searchParams.get("page") || 1;

	const params = new URLSearchParams(searchParams);

	const ItemPerPage = 2;

	const havePrevious = ItemPerPage * (parseInt(page) - 1) > 0;
	const haveNext = ItemPerPage * (parseInt(page) - 1) + ItemPerPage < count;

	const handleChangePage = (type) => {
		type === "prev"
			? params.set("page", parseInt(page) - 1)
			: params.set("page", parseInt(page) + 1);
		replace(`${pathname}?${params}`);
	};
	return (
		<div className={styles.container}>
			<button
				disabled={!havePrevious}
				className={styles.button}
				onClick={() => handleChangePage("prev")}
			>
				Pervious
			</button>
			<button
				disabled={!haveNext}
				className={styles.button}
				onClick={() => handleChangePage("next")}
			>
				Next
			</button>
		</div>
	);
};

export default Pagination;
