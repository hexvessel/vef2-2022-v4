import React from 'react';


export function Button(props) {
  const { children, onClick } = props;



  return (
    <button onClick={onClick} data-testid="login-button" >{children}</button>
  );
}