import React from "react";
import { RowWithIconText } from "./Row";
import styled from "styled-components";
import { COLORS } from "../config/color";
import Typography from "../components/Typography";
import moment from "moment";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: ${COLORS.primaryColor};
`;

export default function TransactionItem() {
  return (
    <Container>
      <div>
        <RowWithIconText
          icon={<Icon />}
          content={
            <div style={{ marginLeft: 10 }}>
              <Typography size={16} color={COLORS.primaryColor} bold>
                Coffee Shop
              </Typography>
              <Typography color={COLORS.primaryColor} size={16}>
                {moment().format("DD.MM.YYYY")}
              </Typography>
            </div>
          }
        />
      </div>
      <div>
        <Typography color={COLORS.dangerColor} size={16}>
          -2.2$
        </Typography>
      </div>
    </Container>
  );
}
