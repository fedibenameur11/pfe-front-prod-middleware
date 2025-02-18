import { Configuration } from "./configuration";

export enum RoleType {
    Admin ,
    Client
}
export class User {
    id_user!: number;
    username!: string;
    email!: string;
    password!: string;
    role!: RoleType;
    configurations!: Configuration[];

}
