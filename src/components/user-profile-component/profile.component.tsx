import { useUser } from "../../contexts/user/user.context";
import {
  ButtonActionsContainer,
  Divider,
  ProfileContainer,
  UserIdContainer,
  UsernameBackground,
  UserNameContainer,
  UserNameContainerWithBackgroundContainer,
} from "./profile.styles";
import { ReactComponent as OnboardingTitleBackground } from "../../assets/onboarding_title_background.svg";
import { Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { ReactComponent as ProfileIcon } from "../../assets/icon-profile-box.svg";
import { ReactComponent as Logout } from "../../assets/icon-logout.svg";
import { colors } from "../../shared/utils/theme/colors";
import { useNavigate } from "react-router-dom";
import { PROFILE_PATH } from "../../routers/private.route";

interface IProfileComponentProps {
  onLogoutClick?: () => void;
}

const UserProfileComponent: React.FC<IProfileComponentProps> = ({
  onLogoutClick,
}) => {
  const { user} = useUser();
  const { t } = useTranslation(undefined, { keyPrefix: "components.profile" });
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate(PROFILE_PATH);
  };

  const logoutOnClick = () => {
    onLogoutClick && onLogoutClick();
  };

  return (
    <ProfileContainer>
      <UserNameContainer>
        <UserNameContainerWithBackgroundContainer>
          <Typography sx={{ zIndex: "10" }} variant="h5">
            {user?.firstName} - {user?.lastName}
          </Typography>
          <UsernameBackground>
            <OnboardingTitleBackground width={"179px"} height={"21px"} />
          </UsernameBackground>
        </UserNameContainerWithBackgroundContainer>
      </UserNameContainer>
      <UserIdContainer>
        <Typography
          variant="labelMedium"
          sx={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {"ID: " + user?.id?.toString()?.split("-")[0] + "..." || ""}
        </Typography>
      </UserIdContainer>
      <Divider />
      <ButtonActionsContainer>
        <Button
          sx={{
            height: "48px",
            boxShadow: "none",
            background: colors.palette.surfadeDark,
          }}
          style={{ justifyContent: "flex-start" }}
          startIcon={<ProfileIcon />}
          variant="contained"
          color="primary"
          onClick={goToProfile}
        >
          {t("buttons.profile")}
        </Button>
       <Button
          startIcon={<Logout />}
          sx={{
            height: "48px",
            boxShadow: "none",
            background: colors.palette.surfadeDark,
          }}
          style={{ justifyContent: "flex-start" }}
          variant="contained"
          color="primary"
          onClick={logoutOnClick}
        >
          {t("buttons.logout")}
        </Button>
      </ButtonActionsContainer>
    </ProfileContainer>
  );
};

export default UserProfileComponent;
