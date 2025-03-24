import { useEffect, useState } from "react";
import { BaseState } from "../../../shared/utils/state/base-state";
import { useQuery } from "@tanstack/react-query";
import { useUser } from "../../../contexts/user/user.context";
import EmployeesService from "../../../services/employee/employee.service";
import { DEFAULT_VALUE_BY_PAGE } from "../../../shared/utils/default-values/default-values";
import { IEmployeeModel, parseEntityToIEmployeeModel } from "../../../models/employee.model";
import { useNavigate } from "react-router-dom";
import { EMPLOYEE_PROFILE } from "../../../routers/private.route";

export enum HomeState {}

export type HomeStateType = HomeState | BaseState;

interface IUseHomeProps {
  employeeService: EmployeesService;
}

const useHome = ({ employeeService }: IUseHomeProps) => {
  const [state, setState] = useState<HomeStateType>(BaseState.loading);
  const navigate = useNavigate();
  const { user, refetchData } = useUser();
  const [page, setPage] = useState<number>(1);

  const {
    data: employeesData,
    status: employeesStatus,
    refetch: employeesRefetch,
  } = useQuery({
    queryKey: ["employees", page],
    queryFn: () => employeeService.getEmployees("", page, 5),
    select: data => {
      return parseEntityToIEmployeeModel(data, page);
    },
    enabled: user !== undefined,
  });

  useEffect(() => {
    if (
      employeesStatus === "pending"
    ) {
      setState(BaseState.loading);
      return;
    }

    if (
      employeesStatus === "success"
    ) {
      setState(BaseState.success);
      return;
    }

    if (
      employeesStatus === "error"
    ) {
      setState(BaseState.error);
    }
  }, [employeesStatus]);

  useEffect(() => {
    if (!user) {
      refetchData();
    } 
  }, []);

  const refresh = () => {
    employeesRefetch();
  }

  const editEmployee = (employee: IEmployeeModel) => {
    navigate(EMPLOYEE_PROFILE.replace(":employeeId", employee.id?.toString() || ""));
    return employee;
  }

  const employeesGoToNextPage = () => {
    return setPage(page + 1);
  }

  return {
    state,
    employeesData,
    page,
    refresh,
    editEmployee,
    employeesGoToNextPage,
  };
};

export default useHome;
