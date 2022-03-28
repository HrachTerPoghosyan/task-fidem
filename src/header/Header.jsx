import "./header.css"

const Header = () => {
    return (
        <div className="header">
            <div className="headerTitles">
                <h2 className="headerTitleSmall">Stay With Us <br/> Feel Like Home <br/></h2>
                <br/>
                <h2 className="headerTitleLg">Leo Malesuada Porta Ultricies Vel Fusce.Faccibus Nulla <br/>
                Vitae Faucbus Netus Tristicue Integer Ultricies
                </h2>
            </div>
            <p className="fig"><img className="headerImg" src="/photo1.png"  width="320" height="181" alt="Фотография"/>
            </p>

        </div>
    );
};

export default Header;
