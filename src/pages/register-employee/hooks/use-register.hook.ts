import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import EmployeeService from "../../../services/employee/employee.service";
import { BaseState } from "../../../shared/utils/state/base-state";
import { cpfValid } from "../../../shared/utils/cpf-validator/cpf-validator.js";
import RegisterUserError, {
  RegisterEmployeeErrorType,
} from "../../../services/employee/errors/RegisterEmployeeError";
import { ToastFullContext } from "../../../components/base-components/snackbar/base-snackbar";
import { IRegisterEmployeeEntity } from "../../../services/employee/entity/register-employee.entity";
import { useUser } from "../../../contexts/user/user.context";
import { useNavigate } from "react-router-dom";
import { object, string } from "yup";

interface IEmployeeRegisterHookParams {
  employeeService: EmployeeService;
}

export enum RegisterState {
  cpfNotValid = "cpfNotValid",
}

export type TRegisterState = RegisterState | BaseState;

export const useEmployeeRegister = ({ employeeService }: IEmployeeRegisterHookParams) => {
  const { user } = useUser();
  const [state, setState] = useState<TRegisterState>(BaseState.initial);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isSubmitAlreadyDone, setIsSubmitAlreadyDone] = useState(false);
  const { ShowToast } = ToastFullContext();

  const createItemMutation = useMutation({
    mutationFn: employeeService.createEmployee.bind(employeeService),
  });

  const showErrorInvalidDocument = () => {
    ShowToast("error", t("pages.register.error.document"));
  };

  const handleSubmit = (model: any) => {
    if (cpfValid(model.document) === false) {
      setState(RegisterState.cpfNotValid);
      return;
    }

    if (
      model.password === undefined ||
      model.password !== model.checkPassword ||
      model.password.length === 1
    ) {
      setIsSubmitAlreadyDone(true);
      setState(BaseState.error);
      return;
    }

    const entity: IRegisterEmployeeEntity = {
      firstName: model.firstName,
      lastName: model.lastName,
      email: model.email.toLowerCase(),
      docNumber: model.document,
      phones: [],
      managerName: user?.firstName ?? "",
      password: model.password,
      isActive: true,
    };

    setState(BaseState.loading);

    createItemMutation.mutateAsync({ data: entity }, {
      onSuccess: () => {
        navigate("/")
      },
      onError: (error: Error) => {
        const erroType: string = (error as RegisterUserError).errorType;

        if (erroType === RegisterEmployeeErrorType.EmployeeInvalidDocumentError) {
          setIsSubmitAlreadyDone(true);
          setState(BaseState.initial);
          showErrorInvalidDocument();

          return;
        }

        setIsSubmitAlreadyDone(true);
        setState(BaseState.initial);

        ShowToast("error", t("pages.register.error.general"));
      },
    });
  };

  const goBack = () => {
    navigate("/");
  };

  const formSchema = object().shape({
    firstName: string().min(3).required(t("pages.register.error.name")),
    lastName: string().min(3).required(t("pages.register.error.lastName")),
    document: string()
      .min(11)
      .max(11)
      .required(t("pages.register.error.document")),
    email: string().email().required(t("pages.register.error.email")),
    password: string()
      .required(t("pages.register.error.password-required"))
      .min(6, t("pages.register.error.password")),
    checkPassword: string()
      .required(t("pages.register.error.password-required"))
      .min(6, t("pages.register.error.password")),
  });

  return {
    handleSubmit,
    state,
    isSubmitAlreadyDone,
    formSchema,
    setState,
    goBack,
  };
};
