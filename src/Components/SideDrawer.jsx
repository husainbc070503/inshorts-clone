import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "@emotion/styled";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { categories } from "../Constants/Categories";
import { useGlobalContext } from "../Context/InshortsContext";
import { green } from "@mui/material/colors";
import SelectCountry from "./SelectCountry";

const Menu = styled(MenuIcon)`
  color: #fff;
  font-size: 32px;
`;

const Cat = styled(ListItem)`
  color: #f44336;
  font-size: 20px;
  padding: 0;
  font-weight: bold;
  margin-bottom: 15px;
`;

const Item = styled(ListItemText)`
  text-transform: capitalize;
`;

const SideDrawer = () => {
  const { category, setCategory } = useGlobalContext();

  const darkTheme = createTheme({
    palette: {
      primary: green,
    },
  });

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 220, padding: "24px 16px" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Cat>Categories</Cat>
        {categories.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <Item primary={text} onClick={() => setCategory(text)} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />
      <SelectCountry />
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <Button onClick={toggleDrawer("left", true)}>
          <Menu />
        </Button>
        <ThemeProvider theme={darkTheme}>
          <SwipeableDrawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
            onOpen={toggleDrawer("left", true)}
          >
            {list("left")}
          </SwipeableDrawer>
        </ThemeProvider>
      </React.Fragment>
    </div>
  );
};

export default SideDrawer;
