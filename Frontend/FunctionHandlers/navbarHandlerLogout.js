const handleLogout = async (e) => {
  try {
    e.preventDefault();
    const response = await axiosBaseUrl.delete("/users/logout");
    localStorage.clear();
    navigate("/");
  } catch (error) {
    console.log("The Error", error);
  }
};

export default handleLogout;