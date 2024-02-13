import React from "react";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.infoContainer}>
				<div className={styles.imgContainer}>
					<Image src="/noavatar.png" alt="Avatar Image" fill />
				</div>
				IPhone
			</div>
			<div className={styles.formContainer}>
				<form action="" className={styles.form}>
					<label>Title</label>
					<input type="text" name="title" placeholder="Title" />
					<label>Price</label>
					<input type="number" name="price" placeholder="Price" />
					<label>Stock</label>
					<input type="number" name="stock" placeholder="Stock" />
					<label>Color</label>
					<input type="text" name="color" placeholder="Color" />
					<label>Size</label>
					<input type="text" name="size" placeholder="Size" />
					<label>Category</label>
					<select name="cat" id="cat">
						<option value="general">Choose Category...</option>
						<option value="kitchen">Kitchen</option>
						<option value="computer">Computer</option>
						<option value="phone">Phone</option>
					</select>
					<label>Description</label>
					<textarea
						name="desc"
						id="desc"
						placeholder="Description"
						cols="30"
						rows="10"
					></textarea>
					<button>Update</button>
				</form>
			</div>
		</div>
	);
};

export default SingleProductPage;
