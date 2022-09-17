import React from "react";

// Implementing Typescript
type eventPropsType = {
  /**
   * Event type,
   * receive nothing,
   * returns void(emtpy,nothing);
   */
  noEventClick: () => void;

  /**
   * Event type. 
   * Recive button click event & id type number.
   * Return void.
   * React.MouseEvent defines event is from mouse.
   * <HTMLButtonElement> defines event is from HTML button element.
   */
  handleEventClick: (event: React.MouseEvent<HTMLButtonElement>, id:number) => void, 
};

// Use above type
export const EventProps = (props: eventPropsType) => {
  const { noEventClick, handleEventClick } = props;


   /**
   * Event type. 
   * Recive button click event & id type number.
   * Return void.
   * React.MouseEvent defines event is from mouse.
   * <HTMLButtonElement> defines event is from HTML button element.
   */
  const localClickEventHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Handle events localy");
    console.log(e);
  };

  // jsx
  return (
    <div>
      <button onClick={noEventClick}>Click - no event</button>
      <hr />
      <button onClick={(e) => handleEventClick(e, 1000)}>Click + event</button>
      <hr />
      <button onClick={(e) => localClickEventHandler(e)}>
        Click - local event
      </button>
    </div>
  );
};
