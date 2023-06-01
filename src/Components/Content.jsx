import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import NewsCard from "./NewsCard";
import styled from "@emotion/styled";
import { useGlobalContext } from "../Context/InshortsContext";
import Loader from "./Loader";

const ContentBox = styled(Box)`
  padding: 20px;
  margin-top: 8%;

  @media (max-width: 890px) {
    margin-top: 22%;
  }
`;

const Heading = styled(Typography)`
  font-size: 27px;
  color: #0c134f;
  text-align: center;
  text-transform: capitalize;
`;

const Content = () => {
  const { news, loading } = useGlobalContext();

  return (
    <ContentBox>
      <Container maxWidth="md">
        <Heading>Get all the latest news here</Heading>
        {loading ? (
          <Loader loading={loading} />
        ) : (
          news &&
          news.map((item, index) => {
            return <NewsCard key={index} item={item} />;
          })
        )}
      </Container>
    </ContentBox>
  );
};

export default Content;
