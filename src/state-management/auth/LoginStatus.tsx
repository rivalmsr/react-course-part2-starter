import useAuth from "./useAuth";


const LoginStatus = () => {
  const { user, logout, login } = useAuth();

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => logout()} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a onClick={() => login('Mosh Programming')} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
