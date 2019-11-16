import React, { useState } from "react";
import Head from "next/head";
import Typography from "../../components/Typography";
import TransactionCard from "../../components/TransactionCard";
import TransactionItem from "../../components/TransactionItem";
import { COLORS } from "../../config/color";
import styled from "styled-components";
import Switch from "react-ios-switch";

const Icon = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background-color: black;
  margin-right: 10px;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

export default function index() {
  let [isAutomate, setIsAutomate] = useState(false);
  const renderGoal = () => (
    <div>
      <IconContainer>
        <Icon />
        <Typography color={COLORS.primaryColor} bold>
          Goals
        </Typography>
      </IconContainer>
      <div>
        <Typography>
          If you skipped 2 coffees a week, you would reach your saving goals:{" "}
          <b>New Macbook 14 days</b> earlier
        </Typography>
      </div>
    </div>
  );

  const renderAutomate = () => {
    return (
      <div>
        <IconContainer>
          <Icon />
          <Typography color={COLORS.primaryColor} bold>
            Automate
          </Typography>
        </IconContainer>
        <div>
          <Typography>
            Activate a saving rule! Everytime you spend in coffee, 10% goes to
            investmentgoal <b>S&P500ETF</b>
          </Typography>
        </div>
      </div>
    );
  };
  return (
    <div>
      <Head>
        <title>Transaction Detail</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TransactionItem />
      <div>
        <div style={{ margin: "20px auto" }}>
          <TransactionCard leftContent={renderGoal()} />
        </div>
        <TransactionCard
          leftContent={renderAutomate()}
          rightContent={
            <div style={{ minWidth: "40px", minHeight: "20px" }}>
              <Switch
                checked={isAutomate}
                onChange={checked => {
                  setIsAutomate(checked);
                }}
              />
            </div>
          }
        />
      </div>
    </div>
  );
}
