import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { createTransaction } from "../api/transactions";

export default function TransactionButton() {
  let [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      <Button
        onClick={async () => {
          setIsLoading(true);
          fetch("/api/transactions", {
            method: "POST"
          })
            .then(res => console.log({ res }))
            .catch(err => console.log({ err }));
          setIsLoading(false);
        }}
        disabled={isLoading}
      >
        Create transaction
      </Button>
    </div>
  );
}
