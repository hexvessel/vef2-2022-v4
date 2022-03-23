import React, { useState } from 'react'

const defaultLogin = false;

export const Context = React.createContext({
  login: defaultLogin,
  toggleLogin: () => {},
});

export function LoginProvider({ children }) {
  const [login, setLogin] = useState(defaultLogin);

  const toggleLogin = () => {
    setLogin(login === false ? true : false);
  }

  return (
    <Context.Provider value={{
      login,
      toggleLogin,
    }}>
      {children}
    </Context.Provider>
  )
}
