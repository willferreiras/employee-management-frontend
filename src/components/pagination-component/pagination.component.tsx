import { Button, IconButton } from "@mui/material";
import { PaginationContainer } from "./pagination.styles";
import { ReactComponent as ArrowLeft } from "../../assets/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../assets/arrow-right.svg";
import { colors } from "../../shared/utils/theme/colors";
import { useEffect, useState } from "react";

const ITEMS_BY_REQUEST = 100;
interface IPaginationComponent {
  currentPage: number;
  totalItems: number;
  pageClick: (page: number) => void;
}

const PaginationComponent: React.FC<IPaginationComponent> = ({
  currentPage,
  totalItems,
  pageClick,
}) => {
  const [leftButtonPage, setLeftButtonPage] = useState(1);
  const [rightButtonPage, setRightButtonPage] = useState<number>();
  const [containsNextPage, setContainsNextPage] = useState(false);

  useEffect(() => {
    const totalPages = Math.trunc(totalItems / ITEMS_BY_REQUEST);
    const rest = totalPages % ITEMS_BY_REQUEST;
    const currentPageIsOdd = currentPage % 2 !== 0;

    if (totalPages < 1 || (totalPages === 1 && rest === 0)) {
      setLeftButtonPage(1);
      setRightButtonPage(undefined);
      setContainsNextPage(false);
      return;
    }

    if (totalPages === 1 && rest > 0) {
      setLeftButtonPage(1);
      setRightButtonPage(2);
      setContainsNextPage(false);
      return;
    }

    if (totalPages === 2) {
      setLeftButtonPage(1);
      setRightButtonPage(2);
      setContainsNextPage(false);
      return;
    }

    if (totalPages === 2 && rest > 0) {
      setLeftButtonPage(1);
      setRightButtonPage(2);
      setContainsNextPage(true);
      return;
    }
    if (currentPage < totalPages && currentPageIsOdd) {
      setLeftButtonPage(currentPage);

      if (currentPage + 1 === totalPages) {
        setRightButtonPage(totalPages);
        setContainsNextPage(false);
        return;
      }

      if (currentPage + 1 < totalPages) {
        setRightButtonPage(currentPage + 1);
        setContainsNextPage(true);
        return;
      }

      if (currentPage + 1 > totalPages) {
        setRightButtonPage(undefined);
        setContainsNextPage(false);
        return;
      }
    }

    if (currentPage < totalPages && currentPageIsOdd === false) {

      if (currentPage + 1 === totalPages) {
        setLeftButtonPage(currentPage - 1);
        setRightButtonPage(currentPage);
        setContainsNextPage(true);
        return;
      }

      if (currentPage + 1 < totalPages) {
        setLeftButtonPage(currentPage - 1);
        setRightButtonPage(currentPage);
        setContainsNextPage(true);
        return;
      }

      if (currentPage + 1 > totalPages) {
        setLeftButtonPage(currentPage - 1);
        setRightButtonPage(currentPage);
        setContainsNextPage(false);
        return;
      }
    }

    if (currentPage === totalPages) {
      setLeftButtonPage(currentPage - 1);
      setRightButtonPage(currentPage);
      setContainsNextPage(false);
      return;
    }
  }, [currentPage, totalItems]);

  return (
    <PaginationContainer>
      {leftButtonPage > 1 && (
        <IconButton sx={{ width: "40px", height: "40px"}}  onClick={() => pageClick(leftButtonPage - 1)}>
          <ArrowLeft />
        </IconButton>
      )}
      <Button
        onClick={() => pageClick(leftButtonPage)}
        sx={{
          color: colors.white,
          padding: "0px",
          paddingLeft: "0px",
          paddingRight: "0px",
          margin: "0px",
          width: "40px", 
          height: "40px",
          minWidth: "40px",
          backgroundColor: leftButtonPage === currentPage ? colors.primaryColor : "transparent",
        }}
      >
        {leftButtonPage}
      </Button>
      {rightButtonPage && (
        <Button
          onClick={() => pageClick(rightButtonPage)}
          variant="text"
          sx={{
            color: colors.white,
            padding: "0px",
            paddingLeft: "0px",
            paddingRight: "0px",
            margin: "0px",
            width: "40px", 
            height: "40px",
            minWidth: "40px",
            backgroundColor: rightButtonPage === currentPage ? colors.primaryColor : "transparent",
          }}
        >
          {rightButtonPage}
        </Button>
      )}
      {containsNextPage && rightButtonPage && (
        <IconButton sx={{ width: "40px", height: "40px" }} onClick={() => pageClick(rightButtonPage + 1)}>
          <ArrowRight />
        </IconButton>
      )}
    </PaginationContainer>
  );
};

export default PaginationComponent;
