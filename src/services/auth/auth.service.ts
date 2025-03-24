import { AxiosInstance } from "axios";
import { ILoginUserEntity } from "./entity/login-user.entity";
import { Result } from "../../shared/protocol/result";
import { ILoginResponseEntity } from "./entity/login-response.entity";
import {
  AUTH_TOKEN,
  REFRESH_TOKEN,
} from "../../shared/auth-guard/auth-guard";

export default class ApiAuthService {
  constructor(private service: AxiosInstance) {}
  async loginUser(
    entity: ILoginUserEntity,
  ): Promise<Result<ILoginResponseEntity>> {
    try {
      const result = await this.service.post("/auth/login", entity);
      const { token } = result.data as ILoginResponseEntity;

      localStorage.setItem(AUTH_TOKEN, token);
      localStorage.setItem(REFRESH_TOKEN, token);

      return Result.ok(result.data);
    }catch (error) {
      throw error;
    };
  }

  async refreshToken(
    refreshToken: string,
  ): Promise<Result<ILoginResponseEntity>> {
    const result = await this.service.post("/auth/refresh-token", {
      token: refreshToken,
    });
    return Result.ok(result.data);
  }
}
