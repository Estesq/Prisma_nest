import { deleteUser, updateUser, users, user } from "../test/stubs/user.stubs";

export const UserService = jest.fn().mockReturnValue({
    updateUser: jest.fn().mockReturnValue(updateUser()),
    deleteUser: jest.fn().mockReturnValue(deleteUser()),
    getUsers: jest.fn().mockReturnValue(users()),
    createUser: jest.fn().mockReturnValue(user())
})