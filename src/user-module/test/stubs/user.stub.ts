import { User } from "src/graphql";

export const user = (): User => {
    return {
        id: "1",
        name: "Yash",
        email: "demo@gmail.com"
    }
}

export const users = (): User[] => {
    return ([
        {
            id: "1",
            name: "Yash",
            email: "demo@gmail.com"
        },
        {
            id: "2",
            name: "Anurag",
            email: "demo@gmail.com"
        },
        {
            id: "3",
            name: "Rohan",
            email: "demo@gmail.com"
        }
    ])
}

export const updateUser = (): String => {
    return "User updated successfully"
}

export const deleteUser = (): String => {
    return "User deleted successfully"
}