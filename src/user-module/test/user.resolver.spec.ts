import { Test } from "@nestjs/testing";
import { UpdateUserInput, DeleteUserInput, User, CreateUserInput } from "../../graphql";
import { getHeapStatistics } from "v8";
import { UserResolver } from "../user.resolver"
import { UserService } from "../user.service";
import { users, user } from './stubs/user.stub';;

jest.mock("../user.service")

describe("User Resolver",()=>{
    let userResolver: UserResolver;
    let userService: UserService;

    beforeEach(async()=>{
        const moduleRef = await Test.createTestingModule({
            imports:[],
            controllers:[UserResolver],
            providers:[UserService]
        }).compile()

        userResolver = moduleRef.get<UserResolver>(UserResolver)
        userService = moduleRef.get<UserService>(UserService)
        jest.clearAllMocks();
    })

    describe("get users tests", () => {
        describe('getUser is called', () => {

            let user:User[];
            beforeEach(async () => {
                user = await userResolver.users()
            })

            test('calling user service', () => {
                expect(userService.getUsers).toBeCalledWith()
            })
            test('user serivce output', () => {
                expect(typeof userService.getUsers()).toBe(typeof [User])
            })

         })
    });

    describe("create tests",()=>{
        describe("create user is called",()=>{
            let res: User;
            let input: CreateUserInput
            beforeEach(async()=>{
                input=user()
                res = await userResolver.createUser(input)
            })

            test("checking service input type",()=>{
                expect(userService.createUser).toBeCalledWith(input)
            })

            test("checking output",()=>{
                expect(res).toEqual(input)
            })
        })
    })

    describe("update tests",()=>{
        describe("update user is called",()=>{
            let res: String;
            let input: UpdateUserInput
            beforeEach(async()=>{
                input={
                    id: "1",
                    name: "yash"
                }
                res = await userResolver.updateUser(input)
            })

            test("checking service input type",()=>{
                expect(userService.updateUser).toBeCalledWith(input)
            })

            test("checking output",()=>{
                expect(res).toEqual("User updated successfully")
            })
        })
    })

    describe("delete tests",()=>{
        describe("delete user is called",()=>{
            let res: String;
            let input: DeleteUserInput
            beforeEach(async()=>{
                input={
                    id: "1",
                }
                res = await userResolver.deleteUser(input)
            })

            test("checking service input type",()=>{
                expect(userService.deleteUser).toBeCalledWith(input)
            })

            test("checking output",()=>{
                expect(res).toEqual("User deleted successfully")
            })
        })
    })
})