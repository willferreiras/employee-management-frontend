export default class RegisterEmployeeError extends Error {
  constructor(public errorType: string) {
    super(errorType);
  }
}

export enum RegisterEmployeeErrorType {
  EmployeeInvalidDocumentError = "EmployeeInvalidDocumentError"
}
