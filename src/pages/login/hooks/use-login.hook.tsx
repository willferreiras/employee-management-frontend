import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import ApiAuthService from "../../../services/auth/auth.service";
import { BaseState } from "../../../shared/utils/state/base-state";
import { ToastFullContext } from "../../../components/base-components/snackbar/base-snackbar";
import { useNavigate } from "react-router-dom";
import { HOME_PATH } from "../../../routers/private.route";

export enum LoginState {};
type LoginStateType = LoginState | BaseState;

interface IUseLoginProps {
  authService: ApiAuthService;
}

export const useLogin = ({ authService }: IUseLoginProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isSubmitAlreadyDone, setIsSubmitAlreadyDone] = useState(false);
  const { ShowToast } = ToastFullContext();
  const [state, setState] = useState<LoginStateType>(BaseState.initial);

  const createItemMutation = useMutation({
    mutationFn: authService.loginUser.bind(authService),
  });
  
  const userLogin = ({
    username,
    password
  }: {
    username: string;
    password: string;
  }) => {
    createItemMutation.mutate(
      { username: username.toLowerCase(), password },
      {
        onSuccess: () => {
          setState(BaseState.initial);
          ShowToast("success", t("pages.login.success.title"));
          navigate(HOME_PATH);
        },
        onError: () => {
          setState(BaseState.initial);
          ShowToast("error", t("pages.login.error.invalid-credentials"));
        },
      },
    );
  }

  const handleSubmit = ({
    username,
    password
  }: {
    username: string;
    password: string;
  }) => {
    setState(BaseState.loading);
    setIsSubmitAlreadyDone(true);
    userLogin({ username, password });
  };

  return { handleSubmit, isSubmitAlreadyDone, state };
};
