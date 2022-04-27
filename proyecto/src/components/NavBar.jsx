import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand ps-3" href="#">WE GO GYM <br/> MUSCLE SHOP</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link text-white" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Productos </a>
                                <ul class="dropdown-menu bg-dark"aria-labelledby="navbarDropdownMenuLink">
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">Lorem</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">Lorem</a>
                                </li>
                                </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Marcas </a>
                                <ul class="dropdown-menu bg-dark"aria-labelledby="navbarDropdownMenuLink">
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">Lorem</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">Lorem</a>
                                </li>
                                </ul>
                        </li>
                        <li className="nav-item">
                                    <a className="nav-link text-white" href="#">Quiénes somos</a>
                        </li>
                    </ul>
                </div>
                <a className="navbar-brand navbar__logo-right" href="#">WE GO GYM <br/> MUSCLE SHOP</a>
            </div>
        </nav>
    )
}

export default NavBar