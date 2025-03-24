import styled from "styled-components";
import { colors } from "../../../shared/utils/theme/colors";

const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 200px;
  background-color: ${colors.palette.surfadeDark};
  padding: 24px;
  row-gap: 16px;
  align-items: center;
  border-radius: 28px;
`;

export { RootContainer };
