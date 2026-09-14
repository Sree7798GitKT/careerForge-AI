import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("careerforge_user");

    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = (email, password) => {
    const savedAccount = localStorage.getItem(
      "careerforge_account"
    );

    if (!savedAccount) {
      return {
        success: false,
        message: "No account found. Please register first.",
      };
    }

    const account = JSON.parse(savedAccount);

    if (
      account.email !== email ||
      account.password !== password
    ) {
      return {
        success: false,
        message: "Invalid email or password.",
      };
    }

    const loggedInUser = {
      name: account.name,
      email: account.email,
    };

    localStorage.setItem(
      "careerforge_user",
      JSON.stringify(loggedInUser)
    );

    setUser(loggedInUser);

    return {
      success: true,
    };
  };

  const register = (name, email, password) => {
    const existingAccount = localStorage.getItem(
      "careerforge_account"
    );

    if (existingAccount) {
      const account = JSON.parse(existingAccount);

      if (account.email === email) {
        return {
          success: false,
          message: "An account with this email already exists.",
        };
      }
    }

    const account = {
      name,
      email,
      password,
    };

    localStorage.setItem(
      "careerforge_account",
      JSON.stringify(account)
    );

    return {
      success: true,
    };
  };

  const logout = () => {
    localStorage.removeItem("careerforge_user");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        isLoggedIn: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}