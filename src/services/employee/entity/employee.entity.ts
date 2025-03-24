export interface IEmployeeEntity {
    id: number;
    firstName: string;
    lastName: string; 
    email: string;
    docNumber: string;
    phones: string[];
    managerName: string;
    password: string;
    isActive: boolean;
}