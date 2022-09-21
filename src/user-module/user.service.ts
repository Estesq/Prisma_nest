import {Injectable} from '@nestjs/common'
import { PrismaService } from './prisma.service'
import {CreateUserInput, DeleteUserInput, UpdateUserInput, User} from "src/graphql"


@Injectable()
export class UserService{
    constructor(private readonly prisma:PrismaService){}

    async getUsers():Promise<User[]>{
        return this.prisma.prismaUsers.findMany({})
    }

    async createUser(input: CreateUserInput):Promise<User>{
        try{
            
            let newData={...input}

            await this.prisma.prismaUsers.create({data:newData})
            return newData
            
        }
        catch(error){
            return error

        }
    }

    async updateUser(input: UpdateUserInput): Promise<String>{
        try{
            let updationData  = {...input}
            await this.prisma.prismaUsers.update({
                where:{
                    id:updationData.id
                },
                data:{
                    name: updationData.name
                }
            })
            return "User updated successfully" 
        }
        catch(error){
            return error
        }
    }

    async deleteUser(input:DeleteUserInput):Promise<String>{
        try{
            let userToBeDeleted = input
            await this.prisma.prismaUsers.delete({where:{id:userToBeDeleted.id}})
            return "Deleted Successfully"
        }
        catch(error){
            return error
        }
    }
}