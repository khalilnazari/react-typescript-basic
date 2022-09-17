
import React from 'react'

// Implementing Typescript
type listType = {
  // Array type

  // list: [{ firstName: string; lastName: string }];
  // OR
  list: { firstName: string; lastName: string }[];
};
const PersonList = ({ list }: listType) => {
  
  return (
    <div>
      {list.map((person) => (
        <p key={person.firstName}>
          {person.firstName} {person.lastName}
        </p>
      ))}
    </div>
  );
};

export default PersonList;
