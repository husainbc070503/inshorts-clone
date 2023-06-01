import styled from "@emotion/styled";
import { Box, Link, Typography } from "@mui/material";
import React from "react";

const FootBox = styled(Box)`
  background: #9db2bf;
  padding: 14px 0;
  text-align: center;
`;

const Footer = () => {
  return (
    <FootBox>
      <Typography>
        Inshorts Clone made by -{" "}
        <Link
          href="https://www.linkedin.com/in/husain-b-champawala-2522a2205/"
          underline="hover"
          style={{ color: "#191919", fontWeight: "bold" }}
        >
          Husain Champawala
        </Link>
      </Typography>
    </FootBox>
  );
};

export default Footer;
