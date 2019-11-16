import React from "react";
import styled from "styled-components";
import { COLORS } from "../config/color";
import { faEllipsisVAlt } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RowWithIconText } from "./Row";
import Typography from "./Typography";

const Container = styled.div`
  min-height: 95px;
  background-color: ${COLORS.white};
  box-shadow: 0 2px 11px 2px ${COLORS.shadowColor};
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
`;

const ImageContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function GoalCard({ image, content }) {
  return (
    <Container>
      <RowWithIconText
        icon={
          <ImageContainer>
            <img src={image} />
          </ImageContainer>
        }
        content={content}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 20
        }}
      >
        <Typography size={20} color={COLORS.grey}>
          <FontAwesomeIcon icon={faEllipsisVAlt} />
        </Typography>
      </div>
    </Container>
  );
}
