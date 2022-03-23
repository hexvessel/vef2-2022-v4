import React from 'react';


export function Form(props) {
  const {children } = props;



  return (
    <form className="field field--textarea">{children}</form>
  );
}