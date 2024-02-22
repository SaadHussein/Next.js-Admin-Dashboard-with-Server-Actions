"use server";

import { revalidatePath } from "next/cache";
import { Product, User } from "./models";
import { connetToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from 'bcrypt';

export const addUser = async (formData) => {
    const { username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData);

    try {
        await connetToDB();
        const salt = bcrypt.genSalt(10);
        const hashedPassword = bcrypt.hash(password, salt);
        const newUser = new User({ username, email, password: hashedPassword, phone, address, isAdmin, isActive });

        await newUser.save();
    } catch (err) {
        throw new Error('Failed To Create New User.');
    }

    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
};

export const addProduct = async (formData) => {
    const { title, desc, price, stock, color, size } = Object.fromEntries(formData);

    try {
        await connetToDB();
        const newProduct = new Product({ title, desc, price, stock, color, size });

        await newProduct.save();
    } catch (err) {
        throw new Error('Failed To Add Product');
    }

    revalidatePath('/dashboard/products');
    redirect('/dashboard/products');
};

export const deleteUser = async (formData) => {
    const { id } = Object.fromEntries(formData);

    try {
        await connetToDB();
        await User.findByIdAndDelete(id);
    } catch (err) {
        throw new Error('Failed To Delete User');
    }

    revalidatePath('/dashboard/users');
};
export const deleteProduct = async (formData) => {
    const { id } = Object.fromEntries(formData);

    try {
        await connetToDB();
        await Product.findByIdAndDelete(id);
    } catch (err) {
        throw new Error('Failed To Delete Product');
    }

    revalidatePath('/dashboard/products');
};