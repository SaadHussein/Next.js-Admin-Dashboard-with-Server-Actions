import React from "react";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";
import { updateProduct } from "@/app/lib/actions";
import { fetchProduct } from "@/app/lib/data";

const SingleProductPage = async ({ params }) => {
	const product = await fetchProduct(params.id);
	return (
		<div className={styles.container}>
			<div className={styles.infoContainer}>
				<div className={styles.imgContainer}>
					<Image
						src={product?.img || "/noproduct.jpg"}
						alt="Avatar Image"
						fill
					/>
				</div>
				{product.title}
			</div>
			<div className={styles.formContainer}>
				<form action={updateProduct} className={styles.form}>
					<input type="hidden" value={product.id} name="id" />
					<label>Title</label>
					<input type="text" name="title" placeholder={product.title} />
					<label>Price</label>
					<input type="number" name="price" placeholder={product.price} />
					<label>Stock</label>
					<input type="number" name="stock" placeholder={product.stock} />
					<label>Color</label>
					<input type="text" name="color" placeholder={product.color} />
					<label>Size</label>
					<input type="text" name="size" placeholder={product.size} />
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
						placeholder={product.desc}
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
