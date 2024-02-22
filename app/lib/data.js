import { User, Product } from './models';
import { connetToDB } from './utils';

export const fetchUsers = async (q, page) => {
    const regex = new RegExp(q, 'i');
    const ItemPerPage = 2;
    try {
        await connetToDB();
        const users = await User.find({ username: { $regex: regex } }).limit(2).skip(ItemPerPage * (page - 1));
        const count = await User.find({ username: { $regex: regex } }).count();
        return { users, count };
    } catch (err) {
        console.log(err);
        throw new Error('Failed To Fetch Users.');
    }
};

export const fetchUser = async (id) => {
    try {
        await connetToDB();

        const user = await User.findById(id);
        return user;
    } catch (err) {
        throw new Error('Failed To Fetch User.');
    }
};

export const fetchProducts = async (q, page) => {
    const regex = new RegExp(q, 'i');
    const ItemPerPage = 2;
    try {
        await connetToDB();
        const products = await Product.find({ title: { $regex: regex } }).limit(2).skip(ItemPerPage * (page - 1));
        const count = await Product.find({ title: { $regex: regex } }).count();
        return { products, count };
    } catch (err) {
        console.log(err);
        throw new Error('Failed To Fetch Products.');
    }
};

export const fetchProduct = async (id) => {
    try {
        await connetToDB();

        const product = await Product.findById(id);
        return product;
    } catch (err) {
        throw new Error('Failed To Fetch Product.');
    }
};