import { User } from './models';
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