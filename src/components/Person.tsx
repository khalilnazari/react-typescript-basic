import React from 'react'

// Implementing Typescript
type personProps = {
  // Object type
  detail: {
    // String type
    name: string;
    email: string;
    address: string;

    // Number type
    age: number;
  };
};


// Use above type
const Person = (props: personProps) => {
  const {name, age, email, address, } = props.detail;

  // jsx
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <p>{email}</p>
      <p>{address}</p>
    </div>
  );
};

export default Person;
