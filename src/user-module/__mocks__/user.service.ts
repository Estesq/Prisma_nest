import { deleteUser, updateUser, users, user } from "../test/stubs/user.stub";
export const UserService = jest.fn().mockReturnValue({
    updateUser: jest.fn().mockReturnValue(updateUser()),
    getUsers: jest.fn().mockReturnValue(users()),
    createUser: jest.fn().mockReturnValue(user()),
    deleteUser: jest.fn().mockReturnValue(deleteUser())
})