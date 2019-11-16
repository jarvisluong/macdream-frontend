import styled from "styled-components";
import React from "react";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CustomRow =
  styled(Row) <
  {
    justifyContent: "center" | "space-between" | "space-evenly" | "space-around"
  } >
  `
  justify-content: ${props => props.justifyContent}
`;

export const RowWithIconText = ({ icon, content }) => {
  return (
    <Row>
      {icon}
      <div style={{ marginLeft: 15 }}>{content}</div>
    </Row>
  );
};
