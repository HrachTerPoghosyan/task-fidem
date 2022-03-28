import "./footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="topLeft2">
                <i className="topIcon2 fa-brands fa-facebook-f"></i>
                <i className="topIcon2 fa-brands fa-twitter"></i>
                <i className="topIcon2 fa-brands fa-instagram"></i>
            </div>
            <div className="topCenter">
                <ul className="topList2">
                    <li className="topListItem2">About Us</li>
                    <li className="topListItem2">Contact Us</li>
                    <li className="topListItem2">Terms Of Use</li>
                    <li className="topListItem2">Privacy Policy</li>
                </ul>
                <hr className="hr"/>
                <p className="col-sm">
                    &copy;{new Date().getFullYear()}  All right reserved
                </p>
            </div>
            <div className="topRight"></div>
        </div>
    );
};

export default Footer;



