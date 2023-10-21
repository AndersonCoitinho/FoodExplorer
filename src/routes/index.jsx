import { BrowserRouter } from "react-router-dom";
import { useAuth } from '../hooks/auth'
import { AppRoutes } from "./app.routes";
import { AppRoutesAdmin } from "./app.routesAdmin";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  const { user } = useAuth();

  if (user) {
    if (user.isAdmin) {
      return (
        <BrowserRouter>
          <AppRoutesAdmin />
        </BrowserRouter>
      );
    } else {
      return (
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      );
    }
  } else {
    return (
      <BrowserRouter>
        <AuthRoutes />
      </BrowserRouter>
    );
  }


}