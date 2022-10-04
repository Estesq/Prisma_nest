export const UserService = jest.fn().mockReturnValue({
    updateUser: jest.fn().mockReturnValue("User updated successfully")
})