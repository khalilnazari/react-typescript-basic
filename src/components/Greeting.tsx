import React from 'react';

// Implementing typescript
type GreetingProps = {
  // string type
  name: string;

  // number type
  messageCount?: number;

  // boolean type
  isLoggedIn: boolean;
};


// Using above typescript
const Greeting = (props: GreetingProps) => {
  const { messageCount = 0, isLoggedIn, name } = props;
  
  // jsx
  return (
    <div>
      {isLoggedIn ? (
        <p>
          Hi, {name}. You have {messageCount} unread messages.
        </p>
      ) : (
        <p>Welcome guest</p>
      )}
    </div>
  );
};

export default Greeting;
