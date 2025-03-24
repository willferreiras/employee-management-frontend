import { Schema } from "yup";
import { Result } from "./protoco-result";
import { IUsecase } from "./protocol-usecase";

export interface IFormUsecase<D, R> extends IUsecase<D, R> {
  handle: (data: D) => Promise<Result<R>>;
  validation: Schema<any>;
}
