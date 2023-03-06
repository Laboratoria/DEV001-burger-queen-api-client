import { Navigate, Outlet } from "react-router-dom";
import { PRIVATE } from "../../config/routes/paths";
import { useAuthContext } from "../../Context/authContext";

export default function PublicRoute() {
  const { isAuthenticated } = useAuthContext();

  if (isAuthenticated) {
    return <Navigate to={PRIVATE} />;
  }
  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  );
}
