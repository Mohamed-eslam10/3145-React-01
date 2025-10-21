import 'bootstrap/dist/css/bootstrap.min.css';
export function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light  p-3">
            <div className="container-fluid">
               

                <ul className="navbar-nav ms-sm-1 ms-lg-auto  mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Products</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Users</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Services</a>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

