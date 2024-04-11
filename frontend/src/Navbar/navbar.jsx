import './navbar.css';
function Navbar() {
    return (
        <div className="header">
            <div className="logo-container"> 
                <p className="logo-text">Logo</p>
            </div>

            <div className="search-container">
                <input type="text" />
                <button>search</button>
            </div>

            <nav className="navbar">  
                <ul className="nav-menu">
                    <li className="nav-item">Orders</li>
                    <li className="nav-item">Account</li>
                    <li className="nav-item">Cart</li>
                </ul>
            </nav>


        </div>
    )
}
export default Navbar;