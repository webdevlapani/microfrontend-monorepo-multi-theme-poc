import React, { ReactNode, createContext, useContext, useState } from 'react';
type contextType = {
  permissions: any;
  setPermissions: React.Dispatch<React.SetStateAction<any>>;
  theme: any;
  setTheme: React.Dispatch<React.SetStateAction<any>>;
  companyId: any;
  setCompanyId: React.Dispatch<React.SetStateAction<any>>;
};
const AuthContext = createContext<contextType>({
  permissions: {},
  setPermissions: () => {},
  theme: {},
  setTheme: () => {},
  companyId: '1',
  setCompanyId: () => {}
}) as any;

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [permissions, setPermissions] = useState({});
  const [theme, setTheme] = useState({});
  const [companyId, setCompanyId] = useState('1');
  return (
    <AuthContext.Provider
      value={{
        permissions,
        setPermissions,
        theme,
        setTheme,
        companyId,
        setCompanyId
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): contextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('Can not use useAuth Outside Provider <AuthProvider />');
  }
  return context as contextType;
};
