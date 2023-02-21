import {
  createContext,
  useCallback,
  useMemo,
  useState,
  useContext,
} from "react";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

export const AuthContext = createContext();
export function AuthContextProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("users") ?? false
  );

  const peticion = useCallback(function (email1, password1) {
    fetch("http://localhost:5000/login", {
      method: "POST",
      body: JSON.stringify({
        email: email1,
        password: password1,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        //Guardar token en local storage
        localStorage.setItem("users", JSON.stringify(data));
        data.accessToken ? setIsAuthenticated(true) : setIsAuthenticated(false);
        const readLocalStorage = JSON.parse(localStorage.getItem("users"));

        if (readLocalStorage === "Cannot find user")
          //return alert("Cannot find user");
          return Swal.fire({
            icon: "error",
            title: "Error",
            text: "Cannot find user!",
          });

        if (readLocalStorage === "Incorrect password")
          return Swal.fire({
            icon: "error",
            title: "Error",
            text: "Incorrect password!",
          });
      })
      .catch(() =>
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "No se pudo conectar, intenta más tarde",
        })
      );
  }, []);

  const logout = () => {
    setIsAuthenticated(false);
  };

  const value = useMemo(
    () => ({
      peticion,
      logout,
      isAuthenticated,
    }),
    [peticion, logout, isAuthenticated, setIsAuthenticated]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
AuthContextProvider.propTypes = {
  children: PropTypes.object,
};

export function useAuthContext() {
  return useContext(AuthContext);
}
