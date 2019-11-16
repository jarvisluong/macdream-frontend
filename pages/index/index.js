import React from "react";
import FlipMove from "react-flip-move";
import { Grid, Avatar } from "@material-ui/core";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
import Typography from "../../components/Typography";
import { COLORS } from "../../config/color";
import { RowWithIconText, Row } from "../../components/Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPig, faWineGlassAlt, faSackDollar, faCashRegister, faBolt, faHomeLgAlt } from "@fortawesome/pro-regular-svg-icons";
import { faCreditCard } from "@fortawesome/pro-light-svg-icons";
import { makeStyles } from "@material-ui/core/styles";
import GoalCard from "../../components/GoalCard";
import TransactionItem from "./Transaction/TransactionItem";
import axios from "axios";
import {
  faCoffeeTogo,
  faBurgerSoda,
  faHammerWar
} from "@fortawesome/pro-regular-svg-icons";
import useSWR from "swr";

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

const fetch = key => axios.get(key).then(({ data }) => data);

const transactionIconMap = {
  Alcohol: faWineGlassAlt,
  Food: faBurgerSoda,
  Deposit: faSackDollar,
  Coffee: faCoffeeTogo,
  Withdrawal: faCashRegister,
  Rent: faHomeLgAlt,
  Electronics: faBolt
}

export default function Profile() {
  const classes = useStyles();

  const { data: personData } = useSWR("/api/persons", fetch);
  const { data: transactionData } = useSWR("/api/transactions", fetch);
  const [person] = personData ? personData.results : [initProfile];

  const transactions = transactionData ? transactionData.results : [];

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
                  SFP500ETF
                </Typography>
                <Typography>9600,0$</Typography>
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
                  SFP500ETF
                </Typography>
                <Typography>9600,0$</Typography>
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
                <div style={{ margin: "20px auto" }} key={transaction.id}>
                  <TransactionItem
                    icon={transactionIconMap[transaction.visaMcc]}
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
