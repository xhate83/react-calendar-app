
export const NavBar = () => {
  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4">
        <div className="navbar-brand">
            <i className="fas fa-calendar-alt"></i>
            <span className="m-2">
                Julian
            </span>
        </div>

        <button className="btn btn-outline-danger">
            <i className="fas fa-sign-out-alt"></i>
            <span>Salir</span>
        </button>
    </div>
  )
}
