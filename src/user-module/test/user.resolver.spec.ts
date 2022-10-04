import { Test } from "@nestjs/testing";
import { UpdateUserInput, DeleteUserInput, User, CreateUserInput } from "../../graphql";
import { getHeapStatistics } from "v8";
import { UserResolver } from "../user.resolver"
import { UserService } from "../user.service";
import { user } from "./stubs/user.stubs";

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


    // Get user tests
    describe("get user tests",()=>{
        describe("getUser is called",()=>{
            let users: User[];
            beforeEach(async()=>{
                users = await userResolver.users()
            })

            test("checking service input type",()=>{
                expect(userService.getUsers).toBeCalledWith()
            })

            test("checking output",()=>{
               expect(typeof users).toBe(typeof [User])
            })
        })
    })


    // Create user tests
    describe("create tests",()=>{
        describe("create user is called",()=>{
            let res: CreateUserInput;
            let input: CreateUserInput;
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


    // Update user tests
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


    // Delete user tests
    describe("delete tests",()=>{
        describe("delete user is called",()=>{
            let res: String;
            let input: DeleteUserInput;

            beforeEach(async()=>{
                input = {
                    id:"1"
                }
                res = await userResolver.deleteUser(input)
            })

            test("checking service input type",()=>{
                expect(userService.deleteUser).toBeCalledWith(input)
            })
            test("checking output",()=>{
                expect(res).toEqual("Deleted Successfully")
            })
        })
    })

})