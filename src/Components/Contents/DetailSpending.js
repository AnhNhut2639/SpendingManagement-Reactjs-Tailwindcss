import React, { useContext } from "react";
import { spendingContext } from "../../Context/index";

function DetailSpending(props) {
  // testing .......
  const { detail } = useContext(spendingContext);
  return (
    <>
      {detail.map((d) => {
        return (
          <>
            <div key={d.amout}>
              <div>{d.type}</div>
              <div>{d.wallet}</div>
              <div>{d.date}</div>
              <div>{d.amout}</div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default DetailSpending;
