import "./topBar.css"

const TopBar = () => {
    return (
        <div className="container">
            <div className="navBar">
                <img className="logo" src="/logo.jpg" alt="photo"/>
                <nav>
                    <ul>
                        <li style={{color: "blue"}}>Home</li>
                        <li>Gallery</li>
                        <li>Services</li>
                        <li>Rooms</li>
                    </ul>
                </nav>
                <img className="menu-icon" src="/Vector.png" alt="photo" />
                <p className="cart">Cart</p>
            </div>
        </div>
    );
};

export default TopBar;