import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DataProvider } from "../../ContextProvider/ContextProvider";

function ProtectedRoute({ children, msg, redirect }) {
  const navigate = useNavigate();
  const [{ user }, dispatch] = useContext(DataProvider);
  useEffect(() => {
    if (!user) {
      navigate("/auth", { state: { msg, redirect } });
    }
  }, [user]);

  return children;
}

export default ProtectedRoute;
