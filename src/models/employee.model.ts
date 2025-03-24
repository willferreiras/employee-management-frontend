import { IEmployeeEntity } from "../services/employee/entity/employee.entity";
import { GetAllEmployeesResponse } from "../services/employee/entity/get-all-employees-response";
import { DEFAULT_VALUE_BY_PAGE } from "../shared/utils/default-values/default-values";
import IPaginationModel from "../shared/utils/hooks/pagination.model";

export interface IEmployeeModel {
  id?: number;
  firstNname: string;
  lastName: string; 
  email: string;
  document: string;
  phones: string[];
  managerName: string;
  isActive: boolean;
}

export const parseFromEmployeeEntity = (entity: IEmployeeEntity): IEmployeeModel => {
  return {
    id: entity.id,
    firstNname: entity.firstName,
    lastName: entity.lastName,
    document: entity.docNumber,
    email: entity.email,
    managerName: entity.managerName,
    phones: entity.phones,
    isActive: entity.isActive,
  };
};

export const parseEntityToIEmployeeModel = (entity: GetAllEmployeesResponse, pageNumber: number): IPaginationModel<IEmployeeModel> => {

  const parsedData: IEmployeeModel[] = entity.employees.map((employee) => {
      return parseFromEmployeeEntity(employee);
  });

  const response: IPaginationModel<IEmployeeModel> = {
    total: entity.count,
    pageSize: DEFAULT_VALUE_BY_PAGE,
    page: pageNumber,
    items: parsedData,
  };
  return response;
}