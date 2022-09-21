
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateUserInput {
    id: string;
    name: string;
    email: string;
}

export class DeleteUserInput {
    id: string;
}

export class UpdateUserInput {
    id: string;
    name: string;
}

export abstract class IQuery {
    abstract users(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;
}

export abstract class IMutation {
    abstract createUser(data?: Nullable<CreateUserInput>): Nullable<User> | Promise<Nullable<User>>;

    abstract updateUser(data?: Nullable<UpdateUserInput>): Nullable<string> | Promise<Nullable<string>>;

    abstract deleteUser(data?: Nullable<DeleteUserInput>): Nullable<string> | Promise<Nullable<string>>;
}

export class User {
    id: string;
    name: string;
    email: string;
}

type Nullable<T> = T | null;
