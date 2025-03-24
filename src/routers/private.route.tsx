import { RouteObject } from "react-router-dom";
import { employeesAPI } from "../services/employee-api";
import ProfilePage from "../pages/employee-profile/employee-profile.page";
import AuthGuard from "../shared/auth-guard/auth-guard";
import HomePage from "../pages/home/home.page";
import EmployeesService from "../services/employee/employee.service";
import RegisterEmployeePage from "../pages/register-employee/register-employee.page";
import EmployeeProfilePage from "../pages/employee-profile/employee-profile.page";

export const HOME_PATH = "/";
export const PROFILE_PATH = "/profile";
export const REGISTER_EMPLOYEE = "/register-employee";
export const EMPLOYEE_PROFILE = "/employee-profile/:employeeId";

const employeeService = new EmployeesService(employeesAPI);

export const PrivateRoutes: RouteObject[] = [
  {
    path: HOME_PATH,
    element: (
      <AuthGuard>
        <HomePage employeeService={employeeService} />
      </AuthGuard>
    ),
  },
  {
    path: REGISTER_EMPLOYEE,
    element: (
      <AuthGuard>
        <RegisterEmployeePage
          employeeService={employeeService}
        />
      </AuthGuard>
    ),
  },
  {
    path: EMPLOYEE_PROFILE,
    element: (
      <AuthGuard>
        <EmployeeProfilePage
          employeeService={employeeService}
        />
      </AuthGuard>
    ),
  },
];
