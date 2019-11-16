import React, { useState } from "react";
import Head from "next/head";
import Typography from "../../components/Typography";
import TransactionCard from "../../components/TransactionCard";
import TransactionItem from "../../components/TransactionItem";
import { COLORS } from "../../config/color";
import styled from "styled-components";
import Switch from "react-ios-switch";
import { UsageChart } from "../../components/UsageChart";

const Icon = styled.div`
  width: 14px;
  height: 14px;
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
      <div style={{ marginTop: 20 }}>
        <Typography fontFamily="MontserratMedium" color="rgba(0,0,0,0.5)">
          If you skipped 2 coffees a week, you would reach your saving goals:{" "}
          <Typography bold component="b">
            New Macbook 14 days
          </Typography>{" "}
          earlier
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
        <div style={{ marginTop: 20 }}>
          <Typography fontFamily="MontserratMedium" color="rgba(0,0,0,0.5)">
            Activate a saving rule! Everytime you spend in coffee, 10% goes to
            investmentgoal{" "}
            <Typography bold component="b">
              S&P500ETF
            </Typography>
          </Typography>
        </div>
      </div>
    );
  };
  return (
    <div style={{ paddingLeft: 10, paddingRight: 10, paddingTop: 20 }}>
      <Head>
        <title>Transaction Detail</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TransactionItem />
      <br />
      <Typography bold size={25} color="rgb(111,131,209)">
        17{" "}
        <Typography
          size={14}
          color="rgb(159,169,184)"
          component="span"
          fontFamily="MontserratMedium"
        >
          Times
        </Typography>
      </Typography>
      <Typography size={10} color="rgb(159,169,184)">
        Past 4 weeks
      </Typography>

      <br />
      <br />
      <UsageChart />
      <br />
      <div>
        <div style={{ margin: "8px auto" }}>
          <TransactionCard leftContent={renderGoal()} />
        </div>
        <TransactionCard
          leftContent={renderAutomate()}
          rightContent={
            <div style={{ minWidth: "40px", minHeight: "20px" }}>
              <Switch
                checked={isAutomate}
                onChange={checked => {
                  console.log({ checked });
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
