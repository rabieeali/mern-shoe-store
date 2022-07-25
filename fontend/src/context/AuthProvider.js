import { createContext, useState, useContext, useEffect } from "react";

export const authContext = createContext();
export const authContextActions = createContext();

const LOCAL_STORAGE_AUTH_KEY = "authState";

const AuthProvider = ({ children }) => {
  const [state, setState] = useState(false);

  useEffect(() => {
    const userData =
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_AUTH_KEY)) || false;
    setState(userData);
  }, []);

  useEffect(() => {
    const data = JSON.stringify(state);
    localStorage.setItem(LOCAL_STORAGE_AUTH_KEY, data);
  }, [state]);

  return (
    <authContext.Provider value={state}>
      <authContextActions.Provider value={setState}>
        {children}
      </authContextActions.Provider>
    </authContext.Provider>
  );
};

export default AuthProvider;

// hooks

export const useAuth = () => useContext(authContext);
export const useAuthActions = () => useContext(authContextActions);
