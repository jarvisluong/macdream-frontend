import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default function Text({
  textAlign,
  color,
  variant,
  fontFamily,
  children,
  bold,
  size,
  component
}) {
  const useStyles = makeStyles({
    root: {
      color: color ? color : "black",
      textAlign: textAlign ? textAlign : "start",
      fontFamily: fontFamily || (bold ? "MontserratSemiBold" : "Montserrat"),
      fontSize: size ? `${size}px` : "14px"
    }
  });
  const classes = useStyles();
  return (
    <Typography className={classes.root} component={component}>
      {children}
    </Typography>
  );
}
