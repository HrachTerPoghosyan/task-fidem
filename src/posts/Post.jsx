import "./post.css";

const Post = () => {
    return (
        <div className="container">
            <div className="article">
                <h1 className="line">Gallery</h1>
                <img src="/2jpeg.jpg" alt="" width="198" height="149"/>
            </div>
            <div className="article">
                <img  src="/111jpg.jpg" alt="" width="198" height="149"/>
            </div>
            <div className="article">
                <img src="/4peg.jpg" alt="" width="198" height="149"/>
            </div>
            <div className="article">
                <img src="/112jpeg.jpg" alt="" width="198" height="149"/>
            </div>
            <div className="article">
                <img src="/9jpeg.jpg" alt="" width="198" height="149"/>
            </div>
            <span style={{color: "blue"}} className="para">See All</span>

            <div className="article">
                <h1 className="line">Rooms</h1>
                <p className="p1">Standart</p>
                <img src="/2jpeg.jpg" alt="" width="198" height="149"/>
            </div>
            <div className="article">
                <p className="p2">Deluxe</p>
                <img  src="/5jpeg.jpg" alt="" width="198" height="149"/>
            </div>
            <div className="article">
                <p className="p3">Family</p>
                <img src="/4peg.jpg" alt="" width="198" height="149"/>
            </div>
            <div className="article">
                <p className="p4">Shale</p>
                <img src="/12jpeg.jpg" alt="" width="198" height="149"/>
            </div>
            <div className="article">
                <p className="p5">Vestibulum</p>
                <img src="/9jpeg.jpg" alt="" width="198" height="149"/>
            </div>
            <span style={{color: "blue"}} className="para">See All</span>

            <div className="article">
                <h1 className="line">Services</h1>
                <img src="/19jpeg.jpg" alt="" width="198" height="149"/>
            </div>
            <div className="article">
                <p className="p6">Spa Programs</p>
                <img  src="/14jpeg.jpg" alt="" width="198" height="149"/>
            </div>
            <div className="article">
                <p className="p7">Gym</p>
                <img src="/15jpeg.jpg" alt="" width="198" height="149"/>
            </div>
            <div className="article">
                <p className="p8">Tours</p>
                <img src="/16jpeg.jpg" alt="" width="198" height="149"/>
            </div>
            <div className="article">
                <p className="p9">Bike Rental</p>
                <img src="/17jpeg.jpg" alt="" width="198" height="149"/>
            </div>
            <span style={{color: "blue"}} className="para">See All</span>
        </div>

    );
};

export default Post;