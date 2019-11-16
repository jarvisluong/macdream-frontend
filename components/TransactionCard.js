import React from "react";
import styled from "styled-components";
import { COLORS } from "../config/color";

const Container = styled.div`
  display: flex;
  background-color: ${COLORS.white};
  box-shadow: 0 2px 11px 2px ${COLORS.shadowColor};
  width: 100%;
  min-height: 100px;
  border-radius: 20px;
  padding: 20px;
  align-items: center;
`;

export default function TransactionCard({ leftContent, rightContent }) {
  return (
    <Container>
      {leftContent}
      {rightContent}
    </Container>
  );
}
