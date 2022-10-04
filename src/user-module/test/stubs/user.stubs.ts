import { User } from "src/graphql"

export const updateUser = (): String => {
    return "User updated successfully"
}

export const deleteUser = (): String =>{
    return "Deleted Successfully"
}

export const user = (): User =>{
    return(
        {
            id: "1",
            name: "abc",
            email: "abc@gmail.com",
        }
    )
}

export const users = (): User[] =>{
    return([
        {
            id: "1",
            name: "abc",
            email: "abc@gmail.com",
        },
        {
            id: "2",
            name: "xyz",
            email: "xyz@gmail.com",
        }
    ])
}