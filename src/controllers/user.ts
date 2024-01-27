import { Delete, Get, Post, Put, Route } from "tsoa";

import { IUser } from "../interfaces/user";

const users: IUser[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@foobar.com"
  },
  {
    id: "2",
    name: "Jane Doe",
    email: "jane.doe@foobar.com"
  }
];

@Route("user")
export default class UserController {
  @Get("/")
  public async get(): Promise<IUser[]> {
    return users;
  }

  @Get("/:id")
  public async getById(id: string): Promise<IUser | undefined> {
    return users.find((user) => user.id === id);
  }
}
