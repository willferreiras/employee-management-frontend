import { Result } from "./protoco-result";

export interface IUsecase<D, R> {
  handle: (data: D) => Promise<Result<R>>;
}
