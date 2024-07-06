import { useAuthStore } from "../../hooks"

export const NavBar = () => {

  const {user, startLogout} = useAuthStore();

  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4">
        <div className="navbar-brand">
            <i className="fas fa-calendar-alt"></i>
            <span className="m-2">
                {user.name}
            </span>
        </div>

        <button onClick={startLogout} className="btn btn-outline-danger">
            <i className="fas fa-sign-out-alt"></i>
            &nbsp;
            <span>Salir</span>
        </button>
    </div>
  )
}
