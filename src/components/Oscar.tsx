import React from 'react';

// Implementing Typescript
type OscarType = {
  children: React.ReactNode;
};

// Use above typescript
const Oscar = (props: OscarType) => {
  return <div>{props.children}</div>;
};

export default Oscar;
