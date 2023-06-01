import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { TextField, createTheme } from "@mui/material";
import styled from "@emotion/styled";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import SideDrawer from "./SideDrawer";
import { ThemeProvider } from "@emotion/react";
import { blueGrey } from "@mui/material/colors";
import { useGlobalContext } from "../Context/InshortsContext";

const Logo = styled("img")`
  width: 160px;

  @media (max-width: 890px) {
    width: 120px;
  }
`;

const Bar = styled(AppBar)`
  @media (max-width: 890px) {
    padding: 14px 0;
  }
`;

const SearchField = styled(TextField)`
  width: 20%;
  border-radius: 8px;
  outline: 0;

  @media (max-width: 890px) {
    width: 100%;
  }
`;

const Header = () => {
  const { search, setSearch } = useGlobalContext();

  const darktheme = createTheme({
    palette: {
      primary: blueGrey,
    },
  });

  const url =
    "https://assets.inshorts.com/website_assets/images/logo_inshorts.png";

  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darktheme}>
        <Bar position="fixed">
          <Toolbar>
            <SideDrawer />
            <Box sx={{ flexGrow: 1 }} textAlign="center">
              <Logo src={url} alt="logo" />
            </Box>
            <Box>
              <SearchSharpIcon
                style={{ marginRight: "9px", marginTop: "8px" }}
              />
            </Box>
            <SearchField
              label="Search"
              variant="filled"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Toolbar>
        </Bar>
      </ThemeProvider>
    </Box>
  );
};

export default Header;
