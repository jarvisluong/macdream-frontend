import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default function Text({
  textAlign,
  color,
  variant,
  children,
  bold,
  size
}) {
  const useStyles = makeStyles({
    root: {
      color: color ? color : "black",
      textAlign: textAlign ? textAlign : "start",
      fontFamily: bold ? "MontserratBold" : "MontserratMedium",
      fontSize: size ? `${size}px` : "14px"
    }
  });
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.root}>{children}</Typography>
    </div>
  );
}
