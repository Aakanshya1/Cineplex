import { useLocation,useNavigate } from "react-router-dom";
import { useEffect } from "react";
function RefreshHandler({ setIsAuthenticated }) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");

    if (token) {
      setIsAuthenticated(true);

      if (
        location.pathname === "/" ||
        location.pathname === "/login" ||
        location.pathname === "/signup"
      ) {
        navigate("/home");
      }
    } else {
      setIsAuthenticated(false);

      if (
        location.pathname !== "/login" &&
        location.pathname !== "/signup"
      ) {
        navigate("/login");
      }
    }
  }, [location, navigate, setIsAuthenticated]);

  return null;
}
export default RefreshHandler;
