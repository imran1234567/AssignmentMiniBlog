import React, { createContext, useState, ReactNode } from 'react';

export type UserRole = 'poster' | 'viewer';

interface AuthContextType {
  role: UserRole | null;
  setRole: (role: UserRole) => void;
}

export const AuthContext = createContext<AuthContextType>({
  role: null,
  setRole: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [role, setRole] = useState<UserRole | null>(null);

  return (
    <AuthContext.Provider value={{ role, setRole }}>
      {children}
    </AuthContext.Provider>
  );
};
