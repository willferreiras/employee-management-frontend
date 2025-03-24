import Dexie from "dexie";
import ILocalDefaultResponse from "./local-default-response";

export default class IndexDBService {
  constructor(
    private db: Dexie,
    private version: number,
    private tableName: string,
    private columns: string,
  ) {}

  public sync = async (
    crypto: any,
    id: string,
  ): Promise<ILocalDefaultResponse> => {
    await this.createTableIfNotExist();

    return this.db
      .table(this.tableName)
      .put(crypto)
      .then((response: any) => {
        const defaultResponse: ILocalDefaultResponse = {
          isSuccess: true,
          data: response,
        };
        return new Promise<ILocalDefaultResponse>((resolve, reject) => {
          resolve(defaultResponse);
        });
      })
      .catch((error: any) => {
        const defaultResponse: ILocalDefaultResponse = {
          isSuccess: false,
          errorData: error,
        };
        return new Promise<ILocalDefaultResponse>((resolve, reject) => {
          reject(defaultResponse);
        });
      });
  };

  public get = async (id: string): Promise<ILocalDefaultResponse> => {
    await this.createTableIfNotExist();

    return this.db
      .table(this.tableName)
      .get(id)
      .then((response: any) => {
        const defaultResponse: ILocalDefaultResponse = {
          isSuccess: true,
          data: response,
        };
        return new Promise<ILocalDefaultResponse>((resolve, reject) => {
          resolve(defaultResponse);
        });
      })
      .catch((error: any) => {
        const defaultResponse: ILocalDefaultResponse = {
          isSuccess: false,
          errorData: error,
        };
        return new Promise<ILocalDefaultResponse>((resolve, reject) => {
          reject(defaultResponse);
        });
      });
  };

  private async createTableIfNotExist() {
    await this.db.version(this.version).stores({
      [this.tableName]: this.columns,
    });
  }
}
