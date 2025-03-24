import { IconButton, Typography } from "@mui/material";
import { IEmployeeModel } from "../../../../models/employee.model";
import {
  ActionsContainer,
  ContentContainer,
  EmployeeContainer,
} from "./employee-card.styles";
import { ReactComponent as ChallengeBlueFlagIcon } from "../../../../assets/edit_icon.svg";

interface IMyBetCardProps {
  employee: IEmployeeModel;
  editEmployee: (employee: IEmployeeModel) => void;
}

const EmployeeCard: React.FC<IMyBetCardProps> = props => {

  return (
    <ContentContainer>
      <EmployeeContainer>
        <Typography variant="bodyLargeRegular">
          {props.employee.firstNname} {props.employee.lastName}
        </Typography>
        <ActionsContainer>
          <IconButton
            onClick={() => props.editEmployee(props.employee)}
          >
            <ChallengeBlueFlagIcon />
          </IconButton>
       </ActionsContainer>
      </EmployeeContainer>
    </ContentContainer>
  );
};

export default EmployeeCard;
