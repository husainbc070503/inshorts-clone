import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import { Box } from "@mui/system";
import { Link } from "@mui/material";

const StyleCard = styled(Card)`
  width: 100%;
  margin: 20px 0;
  display: flex;
  align-items: flex-start;
  box-shadow: 0px 10px 30px #d6e4e3b0;
  padding: 15px 20px;

  @media (max-width: 890px) {
    flex-direction: column;
  }
`;

const BoxImage = styled(Box)`
  height: 280px;
`;

const Title = styled(Typography)`
  font-size: 22px;
  line-height: 2.1rem;
  font-weight: 400;

  @media (max-width: 890px) {
    text-align: justify;
  }
`;

const Author = styled(Typography)`
  font-size: 14px;
  line-height: 2rem;
  margin-bottom: 20px;
  color: #9ba4b5;
`;

const NewsCard = ({ item }) => {
  const defaultImage =
    "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930";

  return (
    <StyleCard>
      <BoxImage>
        <img
          src={item.urlToImage ? item.urlToImage : defaultImage}
          alt="image"
          style={{
            width: "280px",
            height: "100%",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
      </BoxImage>
      <CardContent>
        <Title gutterBottom variant="h5" component="div">
          {item.title}
        </Title>
        <Author>
          short by{" "}
          <span style={{ color: "#191919" }}>
            {item.author ? item.author : "nan"}
          </span>{" "}
          on
          {new Date(item.publishedAt).toDateString()}
        </Author>
        <Typography variant="body2" color="text.secondary" marginBottom="20px">
          {item.description}
        </Typography>
        <Link href={item.url} target="_blank" underline="hover" style={{ fontSize: "14px", color: "grey" }}>
          Read more
        </Link>
      </CardContent>
    </StyleCard>
  );
};

export default NewsCard;
