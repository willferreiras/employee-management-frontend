import { AxiosInstance } from "axios";
import { IProfileEntity } from "../auth/entity/profile.entity";

export default class ApiUserService {
  constructor(private service: AxiosInstance) {}

  async getProfile(): Promise<IProfileEntity> {
    const result = await this.service.get("/UserProfile/me");
    return result.data;
  }
}
