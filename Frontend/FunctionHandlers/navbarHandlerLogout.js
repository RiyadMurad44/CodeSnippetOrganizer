// navbarHandlerLogout.js
import axiosBaseUrl from "../Axios/axiosConfig";

const handleLogout = async (e, navigate) => {
  try {
    e.preventDefault();
    const response = await axiosBaseUrl.post("/users/logout");
    localStorage.clear();
    navigate("/");
  } catch (error) {
    console.log("The Error", error);
  }
};

export default handleLogout;
