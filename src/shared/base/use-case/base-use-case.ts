import { IUseCase } from "./use-case";

export abstract class BaseUseCase<Input, Output>
  implements IUseCase<Input, Output>
{
  abstract execute(request?: Input): Promise<Output> | Output;

  protected logError(error: Error): void {
    console.error(error);
  }
}
