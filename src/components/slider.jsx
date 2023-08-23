import img1 from '../assets/shop1.png'
import img2 from '../assets/shop3.jpg'
import img3 from '../assets/shop4.jpg'
import img4 from '../assets/shop5.webp'
import img5 from '../assets/shop6.jpg'
import Marquee from "react-fast-marquee";
const slider = () => {
    return (
        <>

            <section className="hero p-4">
                <div className="container-xxl">
                    <Marquee>
                        <div className="row">
                            <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 hero-details">
                                <div className="row g-4 justify-content-center justify-content-md-between align-items-center">
                                    <div className="col-6 col-md-4 col-lg-2">
                                        <div className="card text-center m-auto">
                                            <img src={img1} className="card-img-top img-fluid m-auto" alt="Fast Orders" />
                                            <div className="card-body">
                                                <p className="card-text mb-0">Fast Orders</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-6 col-md-4 col-lg-2">
                                        <div className="card text-center m-auto">
                                            <img src={img2} className="card-img-top img-fluid m-auto" alt="Quick Shipping" />
                                            <div className="card-body">
                                                <p className="card-text mb-0">Quick Shipping</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-6 col-md-4 col-lg-2">
                                        <div className="card text-center m-auto">
                                            <img src={img3} className="card-img-top img-fluid m-auto" alt="High Saves" />
                                            <div className="card-body">
                                                <p className="card-text mb-0">High Saves</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-6 col-md-4 col-lg-2">
                                        <div className="card text-center m-auto">
                                            <img src={img4} className="card-img-top img-fluid m-auto" alt="24/7 Support" />
                                            <div className="card-body">
                                                <p className="card-text mb-0">24/7 Support</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-6 col-md-4 col-lg-2">
                                        <div className="card text-center m-auto">
                                            <img src={img5} className="card-img-top img-fluid m-auto" alt="Online Orders" />
                                            <div className="card-body">
                                                <p className="card-text mb-0">Online Orders</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Marquee>
                </div>
            </section>

        </>
    )
}

export default slider
