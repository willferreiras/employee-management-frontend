import { IProfileEntity } from "../services/auth/entity/profile.entity";

export interface IUserModel {
  id?: number;
  firstName: string;
  lastName: string;
  username: string;
}

export const parseFromProfileEntity = (entity: IProfileEntity): IUserModel => {
  return {
    id: entity.id,
    firstName: entity.firstName,
    lastName: entity.lastName,
    username: entity.username
  };
};