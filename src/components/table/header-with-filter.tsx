import { Button, Stack, Typography } from "@mui/material";
import React, { FC } from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import Menu from "@mui/material/Menu";

interface IProps {
  title: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
}

export const HeaderWithFilter: FC<IProps> = ({ title, icon, content }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack direction="row" alignItems="center">
      <Typography>{title}</Typography>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {icon || <FilterListIcon sx={{ color: "#ffffff" }} />}
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        sx={{ marginLeft: "-94px", marginTop: "50px" }}
      >
        {content}
      </Menu>
    </Stack>
  );
};
