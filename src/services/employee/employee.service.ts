import { AxiosInstance } from "axios";
import { GetAllEmployeesResponse } from "./entity/get-all-employees-response";
import { IEmployeeEntity } from "./entity/employee.entity";
import { IUpdateEmployeeEntity } from "./entity/update-employee.entity";

export default class EmployeesService {
    constructor(private instance: AxiosInstance) {}

    public async getEmployees(search: string, page: number, pageSize: number): Promise<GetAllEmployeesResponse> {
        let params: any = {
            pageSize,
            page,
        };

        if (search) {
            params = {
                ...params,
            };
            params["search"] = search;
        }

        const result = await this.instance.get("/employee", {params: {
            ...params,
        }});
        return result.data;
    }

    public async getEmployeeById(employeeId: number): Promise<IEmployeeEntity> {
        const result = await this.instance.get(`/employee/${employeeId}`);
        return result.data
    }

    async createEmployee({ data }: { data: Partial<IEmployeeEntity> }): Promise<void> {
        await this.instance.post("/employee", {
            ...data,
        });
        return;
    };

    async updateProfile({ data }: { data: IUpdateEmployeeEntity }): Promise<void> {
        await this.instance.put(`/employee/${data.id}`, {
            ...data,
        });
        return;
    };
};