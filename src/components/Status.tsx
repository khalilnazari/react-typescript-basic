import React from 'react'

// Implementing Typescript
type statusProps = {
  // Strict props type

  // status: string; // this does not work
  status: "loading" | "success" | "error";
};

// use above type
const Status = ({ status }: statusProps) => {
  let message = "";
  if (status === "loading") {
    message = "Loading...";
  } else if (status === "success") {
    message = "Data fetched successfully : )";
  } else if (status === "error") {
    message = "Error in fetching data";
  }

  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default Status;
