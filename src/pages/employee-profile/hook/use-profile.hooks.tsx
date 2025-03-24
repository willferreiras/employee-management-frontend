import { useState, useEffect } from "react";
import { BaseState } from "../../../shared/utils/state/base-state";
import { IEmployeeEntity } from "../../../services/employee/entity/employee.entity";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../../../services/employee/employee.service";
import { useMutation, useQuery } from "@tanstack/react-query";
import { IEmployeeModel, parseFromEmployeeEntity } from "../../../models/employee.model";
import { cpfValid } from "../../../shared/utils/cpf-validator/cpf-validator";
import { IUpdateEmployeeEntity } from "../../../services/employee/entity/update-employee.entity";
import { ToastFullContext } from "../../../components/base-components/snackbar/base-snackbar";
import { t } from "i18next";
import RegisterUserError, {
  RegisterEmployeeErrorType,
} from "../../../services/employee/errors/RegisterEmployeeError";
import { object, string } from "yup";
import { useQueryClient } from "@tanstack/react-query";

interface IUseProfileProps {
  employeeService: EmployeeService;
}

enum ProfileState {
  cpfNotValid = "cpfNotValid",
}

type TProfileState = ProfileState | BaseState;

export const useEmployeeProfile = (props: IUseProfileProps) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [state, setState] = useState<TProfileState>(BaseState.success);
  const { employeeId } = useParams<{ employeeId: string }>();
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isSubmitAlreadyDone, setIsSubmitAlreadyDone] = useState(false);
  const { ShowToast } = ToastFullContext();

  const updateMutation = useMutation({
    mutationFn: props.employeeService.updateProfile.bind(props.employeeService),
  });

  const showErrorInvalidDocument = () => {
    ShowToast("error", t("pages.register.error.document"));
  };

  const { data, refetch: refetchEmployee } = useQuery({
    queryKey: ["fetchEmployee"],
    queryFn: () => props.employeeService.getEmployeeById(Number(employeeId)),
    select: (response: IEmployeeEntity) => parseFromEmployeeEntity(response),
    refetchOnMount: true,
    enabled: !!employeeId,
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
  });

  useEffect(() => {
    if (data) {
      setIsActive(data.isActive);
    }
  }, [data]);

  const refresh = () => {
    refetchEmployee();
  }

  const goBack = () => {
    navigate("/");
  };  

  const handleSubmit = (model: any) => {
    if (cpfValid(model.document) === false) {
      setState(ProfileState.cpfNotValid);
      return;
    }

    const entity: IUpdateEmployeeEntity = {
      id: Number(employeeId),
      firstName: model.firstName,
      lastName: model.lastName,
      email: model.email.toLowerCase(),
      docNumber: model.document,
      isActive: model.isActive,
    };

    setState(BaseState.loading);

    updateMutation.mutateAsync({ data: entity }, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["fetchEmployee"] });
        queryClient.invalidateQueries({ queryKey: ["employees"] });
        navigate("/");
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

  const formSchema = object().shape({
    firstName: string().min(3).required(t("pages.register.error.name")),
    lastName: string().min(3).required(t("pages.register.error.lastName")),
    document: string()
      .min(11)
      .max(11)
      .required(t("pages.register.error.document")),
    email: string().email().required(t("pages.register.error.email"))
  });

  const updateEmployeeActive = () => {
    setIsActive(!isActive);
  };

  return {
    state,
    profile: data,
    goBack,
    handleSubmit,
    isSubmitAlreadyDone,
    formSchema,
    isActive,
    updateEmployeeActive,
    refresh,
  };
};
