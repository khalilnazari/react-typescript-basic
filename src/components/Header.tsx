import React from 'react'

// Implementing Typescript
type HeaderProps = {
  // String type, children is ReactNode
  children: string;
};

// use above type
const Header = (props: HeaderProps) => {
  return <h4>{props.children}</h4>;
};

export default Header;
