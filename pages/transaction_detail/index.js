import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Typography from "../../components/Typography";
import TransactionCard from "../../components/TransactionCard";
import TransactionItem from "../../components/TransactionItem";
import { COLORS } from "../../config/color";
import styled from "styled-components";
import Switch from "react-ios-switch";
import { UsageChart } from "../../components/UsageChart";
import useSWR from "swr";
import { fetch } from "../../lib/fetch";
import Axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPig } from "@fortawesome/pro-regular-svg-icons";
import { faCreditCard, faCoin } from "@fortawesome/pro-light-svg-icons";

const Icon = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  margin-right: 10px;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

const initTransaction = {
  id: 21,
  personId: 1,
  paymentDt: "2019-10-06T00:00:00Z",
  price: 200,
  visaMccId: "",
  description: ""
};

export default function index() {
  const router = useRouter();
  const query = router.query;
  const transactionId = query.transaction;

  const { data: transactionData } = useSWR("/api/transactions", fetch);

  const [transaction] = transactionData
    ? transactionData.results.filter(result => `${result.id}` === transactionId)
    : [initTransaction];

  let [isAutomate, setIsAutomate] = useState(false);

  let shouldShowGoalHelp = true;
  switch (transaction.visaMccId) {
    case 1:
    case 5:
    case 2:
      break;

    default:
      shouldShowGoalHelp = false;
  }

  const { data: visaMccIdData } = useSWR(() => "/api/get-visa-mcc", fetch);

  const [visaMcc] = visaMccIdData
    ? visaMccIdData.results.filter(
        result => result.id === transaction.visaMccId
      )
    : [
        {
          id: 0,
          visaMcc: "",
          isSaving: false
        }
      ];

  console.log(visaMcc)

  const renderGoal = () => {
    // see transactionMap.js for knowing which id is which

    return (
      <div>
        <IconContainer>
          <div style={{ width: 30, marginRight: 15 }}>
            <Typography size={30} color={COLORS.primaryColor}>
              <FontAwesomeIcon icon={faPig} />
            </Typography>
          </div>
          <Typography color={COLORS.primaryColor} bold>
            Goals
          </Typography>
        </IconContainer>
        <div style={{ marginTop: 20 }}>
          <Typography fontFamily="MontserratMedium" color="rgba(0,0,0,0.5)">
            If you skipped 2 {transaction.description} a week, you would reach
            your saving goals:{" "}
            <Typography bold component="b">
              New Macbook 14 days
            </Typography>{" "}
            earlier
          </Typography>
        </div>
      </div>
    );
  };

  const renderAutomate = () => {
    return (
      <div>
        <IconContainer>
          <div style={{ marginRight: 15, width: 30 }}>
            <Typography size={16} color={COLORS.primaryColor}>
              <FontAwesomeIcon icon={faCoin} />
            </Typography>
          </div>
          <Typography color={COLORS.primaryColor} bold>
            Automate
          </Typography>
        </IconContainer>
        <div style={{ marginTop: 20 }}>
          <Typography fontFamily="MontserratMedium" color="rgba(0,0,0,0.5)">
            Activate a saving rule! Everytime you spend in{" "}
            {transaction.description}, 10% goes to investmentgoal{" "}
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

      <TransactionItem
        title={transaction.description}
        visaMccId={transaction.visaMccId}
        price={transaction.price}
        date={transaction.paymentDt}
      />
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
        {shouldShowGoalHelp && (
          <div style={{ margin: "8px auto" }}>
            <TransactionCard leftContent={renderGoal()} />
          </div>
        )}
        <TransactionCard
          leftContent={renderAutomate()}
          rightContent={
            <div style={{ minWidth: "40px", minHeight: "20px" }}>
              <Switch
                checked={visaMcc.isSaving}
                onChange={checked => {
                  Axios.put(
                    `/api/update-visa-mcc?isSaving=${checked}&visaMccId=${visaMcc.id}`
                  );
                }}
              />
            </div>
          }
        />
      </div>
    </div>
  );
}
