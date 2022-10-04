import {Args, Mutation, Query, Resolver} from '@nestjs/graphql'
import { UserService } from './user.service'
import {CreateUserInput, DeleteUserInput, UpdateUserInput} from '../graphql'

@Resolver()
export class UserResolver{
    constructor(private readonly user:UserService){}

    @Query('users')
    async users(){
        return this.user.getUsers();
    }

    @Mutation('createUser')
    async createUser( @Args('data')input : CreateUserInput){
       return this.user.createUser(input)
    }

    @Mutation('updateUser')
    async updateUser(@Args('data')input: UpdateUserInput){
        return this.user.updateUser(input)
    }


    @Mutation('deleteUser')
    async deleteUser(@Args('data')input: DeleteUserInput){
        return this.user.deleteUser(input)
    }
    

}