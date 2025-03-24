import { IEmployeeEntity } from "./employee.entity";

export interface GetAllEmployeesResponse {
    employees: IEmployeeEntity[];
    pages: number;
    count: number;
};