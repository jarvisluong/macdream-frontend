import React, { useEffect } from "react";
import FlipMove from "react-flip-move";
import { Grid, Avatar } from "@material-ui/core";
import Router from "next/router";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
import Typography from "../../components/Typography";
import { COLORS } from "../../config/color";
import { fetch } from "../../lib/fetch";
import { RowWithIconText, Row } from "../../components/Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPig } from "@fortawesome/pro-regular-svg-icons";
import { faCreditCard } from "@fortawesome/pro-light-svg-icons";
import { makeStyles } from "@material-ui/core/styles";
import GoalCard from "../../components/GoalCard";
import TransactionItem from "./Transaction/TransactionItem";
import useSWR, { trigger } from "swr";
import { transactionIconMap } from "../../lib/transactionMap";

const useStyles = makeStyles({
  purpleAvatar: {
    margin: 10,
    height: 100,
    width: 100,
    color: "#fff",
    backgroundColor: deepPurple[500]
  }
});

const initProfile = {
  balance: 0,
  name: ""
};

const initGoal = [
  {
    id: 1,
    personId: 1,
    targetDt: "2020-05-14T00:00:00Z",
    goalType: "Purchase",
    saving: 0,
    price: 2500,
    name: "Macbook Pro",
    description: "I love the new macbook and want one"
  },
  {
    id: 2,
    personId: 1,
    targetDt: "2020-11-10T00:00:00Z",
    goalType: "CashSaving",
    saving: 0,
    price: 5000,
    name: "Rainy Day Reserves",
    description:
      "I want to always have enough cash saved to be unemployed for a year and not stress out"
  },
  {
    id: 3,
    personId: 1,
    targetDt: "2020-11-10T00:00:00Z",
    goalType: "Investing",
    saving: 0,
    price: 0,
    name: "S&P500 ETF",
    description: "I want to invest in a shares index fund"
  }
];

export default function Profile() {
  const classes = useStyles();

  useEffect(() => {
    const interval = setInterval(() => {
      trigger("/api/transactions");
      trigger("/api/goals");
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const { data: personData } = useSWR("/api/persons", fetch);
  const { data: transactionData } = useSWR("/api/transactions", fetch);
  const { data: goalData } = useSWR("/api/goals", fetch);

  const [person] = personData ? personData.results : [initProfile];

  const transactions = transactionData ? transactionData.results : [];

  const [macbookGoal, _, sp500Goal] = goalData ? goalData.results : initGoal;

  return (
    <div style={{ paddingLeft: 10, paddingRight: 10, paddingTop: 20 }}>
      <div
        style={{
          margin: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Avatar className={classes.purpleAvatar}>
          <Typography size={30} color={COLORS.white}>
            {person.name[0]}
          </Typography>
        </Avatar>
        <Typography size={30} bold color={COLORS.darkBlue}>
          {person.balance} $
        </Typography>
        <Typography size={16} color={COLORS.grey}>
          Total balance
        </Typography>
      </div>
      <div style={{ margin: "20px auto" }}>
        <div>
          <RowWithIconText
            icon={
              <Typography size={16} color={COLORS.grey}>
                <FontAwesomeIcon icon={faPig} />
              </Typography>
            }
            content={
              <Typography size={16} color={COLORS.grey}>
                Goals
              </Typography>
            }
          />
        </div>
        <div style={{ margin: "10px auto" }}>
          <GoalCard
            image="/static/bitmap.png"
            content={
              <div>
                <Typography size={16} color={COLORS.primaryColor} bold>
                  {sp500Goal.name}
                </Typography>
                <Typography>${sp500Goal.saving}</Typography>
              </div>
            }
          />
        </div>
        <div style={{ margin: "10px auto" }}>
          <GoalCard
            image="/static/mac.png"
            content={
              <div>
                <Typography size={16} color={COLORS.primaryColor} bold>
                  {macbookGoal.name}
                </Typography>
                <Typography>${macbookGoal.price}</Typography>
              </div>
            }
          />
        </div>
      </div>
      <div style={{ margin: "20px auto" }}>
        <div>
          <RowWithIconText
            icon={
              <Typography size={16} color={COLORS.grey}>
                <FontAwesomeIcon icon={faCreditCard} />
              </Typography>
            }
            content={
              <Typography size={16} color={COLORS.grey}>
                Transactions
              </Typography>
            }
          />
        </div>
        <div style={{ margin: "20px auto" }}>
          <FlipMove>
            {transactions.map(transaction => {
              return (
                <div
                  style={{ margin: "20px auto" }}
                  key={transaction.id}
                  onClick={() => {
                    Router.push({
                      pathname: "/transaction_detail",
                      query: {
                        transaction: transaction.id
                      }
                    });
                  }}
                >
                  <TransactionItem
                    icon={transactionIconMap[transaction.visaMccId]}
                    title={transaction.description}
                    date={transaction.paymentDt}
                    price={transaction.price}
                  />
                </div>
              );
            })}
          </FlipMove>
        </div>
      </div>
    </div>
  );
}
