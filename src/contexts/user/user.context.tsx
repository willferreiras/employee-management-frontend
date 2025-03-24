import React, { useContext } from "react";
import { IUserModel, parseFromProfileEntity } from "../../models/user.model";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import ApiAuthService from "../../services/auth/auth.service";
import ApiUserService from "../../services/user/user.service";
import { IProfileEntity } from "../../services/auth/entity/profile.entity";
import { AUTH_TOKEN } from "../../shared/auth-guard/auth-guard";
import { LOGIN_PATH } from "../../routers/public.route";

export type TUserContextType = {
  user: IUserModel | undefined;
  isLoading: boolean;
  logout: () => void;
  refetchData: () => void;
};

const UserContext = React.createContext({} as TUserContextType);

export const UserProvider = ({
  children,
  authService,
  userService,
}: {
  children: React.ReactNode;
  authService: ApiAuthService;
  userService: ApiUserService
}) => {
  const token = localStorage.getItem(AUTH_TOKEN);
  const queryClient = useQueryClient()

  const {
    data: user,
    isLoading,
    refetch: refetchUser,
    isPending,
  } = useQuery({
    queryKey: ["fetchUser"],
    queryFn: userService.getProfile.bind(authService),
    select: (response: IProfileEntity) => {
      return parseFromProfileEntity(response);
    },
    refetchOnMount: true,
    enabled: !!token,
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
  });

  const isLoadingData =
    isLoading ||
    isPending;

  const logout = () => {
    localStorage.removeItem(AUTH_TOKEN);
    queryClient.clear();
    window.location.href = LOGIN_PATH;
  };

  const refetchData = () => {
    refetchUser();
  };

  return (
    <UserContext.Provider
      value={{
        user,
        isLoading: isLoadingData,
        logout,
        refetchData
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): TUserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
