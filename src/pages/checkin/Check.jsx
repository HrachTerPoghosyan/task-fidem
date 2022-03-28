import "./check.css"

const Check = () => {
    return (
        <div className="modal">
            <div className="modal_content">
                <div className="post">
                        <span className="post_content">
                            <strong className="strong">Check in</strong>
                            <div>
                               21.02.2022
                            </div>
                        </span>
                    <span className="post_content">
                            <strong className="strong">Check Out</strong>
                            <div className="div2">
                                dd.mm.yyyy
                            </div>
                        </span>
                    <span className="post_content">
                            <strong className="strong">Rooms</strong>
                            <div className="strong">
                                - 1 +
                            </div>
                        </span>
                    <span className="post_content">
                            <strong className="strong">Adults</strong>
                            <div className="strong">
                                - 2 +
                            </div>
                        </span>
                    <span className="post_content">
                            <strong className="strong">Children</strong>
                            <div className="strong">
                                - 0 +
                            </div>
                        </span>
                        <button className="myBtn">Check Availability</button>
                </div>
            </div>
        </div>
    );
};

export default Check;

