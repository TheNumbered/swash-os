import React, { createContext, ReactNode, useContext, useState } from 'react';

// Define a type for the global state
interface GlobalState {
  isLoggedIn: boolean;
  user: User | null;
  theme: 'light' | 'dark';
}

// Define a type for the user
interface User {
  name: string;
  // Add other properties as needed
}

// Define a type for the context value
interface GlobalContextValue extends GlobalState {
  toggleTheme: () => void;
  login: (user: User) => void;
  logout: () => void;
}

// Create a context with a default value
const GlobalContext = createContext<GlobalContextValue | undefined>(undefined);

// Create a custom hook to use the GlobalContext
export const useGlobalContext = (): GlobalContextValue => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};

// Create a provider component
interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [state, setState] = useState<GlobalState>({
    isLoggedIn: false,
    user: null,
    theme: 'light',
  });

  const toggleTheme = () => {
    setState((prevState) => ({
      ...prevState,
      theme: prevState.theme === 'light' ? 'dark' : 'light',
    }));
  };

  const login = (user: User) => {
    setState((prevState) => ({
      ...prevState,
      isLoggedIn: true,
      user,
    }));
  };

  const logout = () => {
    setState((prevState) => ({
      ...prevState,
      isLoggedIn: false,
      user: null,
    }));
  };

  return (
    <GlobalContext.Provider value={{ ...state, toggleTheme, login, logout }}>
      {children}
    </GlobalContext.Provider>
  );
};
