import React from "react";
import { RowWithIconText } from "../../../components/Row";
import styled from "styled-components";
import { COLORS } from "../../../config/color";
import Typography from "../../../components/Typography";
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
  background-color: ${COLORS.white};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 11px 2px ${COLORS.shadowColor};
`;

export default function TransactionItem({ icon, date, title, price }) {
  return (
    <Container>
      <div>
        <RowWithIconText
          icon={
            <Icon>
              <Typography color={COLORS.primaryColor} size={20}>
                <FontAwesomeIcon icon={icon} style={{ width: 16 }} />
              </Typography>
            </Icon>
          }
          content={
            <div style={{ marginLeft: 10 }}>
              <Typography size={14} color={COLORS.primaryColor} bold>
                {title}
              </Typography>
              <Typography color={COLORS.primaryColor} size={14}>
                {moment(date).format("DD.MM.YYYY")}
              </Typography>
            </div>
          }
        />
      </div>
      <div>
        <Typography color={COLORS.dangerColor} size={14}>
          -{price}$
        </Typography>
      </div>
    </Container>
  );
}
