import { Test } from "@nestjs/testing";
import { UpdateUserInput, DeleteUserInput, User, CreateUserInput } from "../../graphql";
import { getHeapStatistics } from "v8";
import { UserResolver } from "../user.resolver"
import { UserService } from "../user.service";

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

})