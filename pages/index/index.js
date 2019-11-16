import React from "react";
import { Grid, Avatar } from "@material-ui/core";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
import Typography from "../../components/Typography";
import { COLORS } from "../../config/color";
import { RowWithIconText, Row } from "../../components/Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPig } from "@fortawesome/pro-regular-svg-icons";
import { faCreditCard } from "@fortawesome/pro-light-svg-icons";
import { makeStyles } from "@material-ui/core/styles";
import GoalCard from "../../components/GoalCard";
import TransactionItem from "./Transaction/TransactionItem";
import {
  faCoffeeTogo,
  faBurgerSoda,
  faHammerWar
} from "@fortawesome/pro-regular-svg-icons";

const useStyles = makeStyles({
  purpleAvatar: {
    margin: 10,
    height: 100,
    width: 100,
    color: "#fff",
    backgroundColor: deepPurple[500]
  }
});

export default function Profile() {
  const classes = useStyles();
  return (
    <div>
      <div style={{ margin: "20px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <Avatar className={classes.purpleAvatar}>
          <Typography size={30} color={COLORS.white}>
            J
          </Typography>
        </Avatar>
        <Typography size={30} bold color={COLORS.darkBlue}>
          14406,6$
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
          <div style={{ margin: "20px auto" }}>
            <TransactionItem
              icon={faCoffeeTogo}
              title="Coffee Shop"
              date={new Date()}
              price={2.2}
            />
          </div>
          <div style={{ margin: "20px auto" }}>
            <TransactionItem
              icon={faBurgerSoda}
              title="Burger Shop"
              date={new Date()}
              price={10.35}
            />
          </div>
          <div style={{ margin: "20px auto" }}>
            <TransactionItem
              icon={faHammerWar}
              title="Subscription"
              date={new Date()}
              price={12.99}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
