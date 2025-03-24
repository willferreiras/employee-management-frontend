import { Typography } from "@mui/material";
import {
  DataContainer,
  Divider,
  ProfileContainer,
  ProfileDataContainer,
  UsernameContainer,
  UsernameTextContainer,
} from "./profile-container.styles";
import { colors } from "../../shared/utils/theme/colors";
import { IEmployeeModel } from "../../models/employee.model";

interface IProfileContainerProps {
  employee?: IEmployeeModel | undefined;
  children?: React.ReactNode;
}

export const ProfileContainerCoomponent: React.FC<IProfileContainerProps> = ({
  children,
  employee,
}) => {
  return (
    <ProfileContainer>
      <UsernameContainer>
        <UsernameTextContainer>
          <Typography
            variant="h1"
            sx={{ fontSize: "48px", textAlign: "center" }}
          >
            {employee?.firstNname}
          </Typography>
        </UsernameTextContainer>
      </UsernameContainer>
      <Typography
        variant="labelMedium"
        sx={{
          color: colors.palette.neutral600,
          alignSelf: "center",
          marginTop: "8px",
        }}
      >
        ID: {employee?.id}
      </Typography>
      <Divider />
      <ProfileDataContainer>
        <DataContainer>{children}</DataContainer>
      </ProfileDataContainer>
    </ProfileContainer>
  );
};
