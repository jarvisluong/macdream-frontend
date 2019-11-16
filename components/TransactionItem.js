import React from "react";
import { RowWithIconText } from "./Row";
import styled from "styled-components";
import { COLORS } from "../config/color";
import Typography from "../components/Typography";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffeeTogo } from "@fortawesome/pro-regular-svg-icons";

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: ${COLORS.primaryColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function TransactionItem() {
  return (
    <Container>
      <div>
        <RowWithIconText
          icon={
            <Icon>
              <FontAwesomeIcon icon={faCoffeeTogo} size="xs" color="white" style={{width: 20}} />
            </Icon>
          }
          content={
            <div style={{ marginLeft: 10 }}>
              <Typography size={14} color={COLORS.primaryColor} bold>
                Coffee Shop
              </Typography>
              <Typography color={COLORS.primaryColor} size={14}>
                {moment().format("DD.MM.YYYY")}
              </Typography>
            </div>
          }
        />
      </div>
      <div>
        <Typography color={COLORS.dangerColor} size={14}>
          -2.2$
        </Typography>
      </div>
    </Container>
  );
}
