import policyInfo from "../../../database/about/policyInfo";

const Choose: React.FC = () => {
    return (
        <section className="choose">
            <div className="container">
                <div className="choose__wrapper">
                    <div className="choose__content">
                        <div className="choose__content-info">
                            <div className="choose__content-info-title">
                                <span className="choose__content-info-title-subheading">
                                    Why Choose Us?
                                </span>
                                <h2 className="choose__content-info-title-heading">
                                    We do not buy from the open market & traders.
                                </h2>
                                <p className="choose__content-info-title-description">
                                    At our core, we believe in providing you with the best,
                                    directly from nature.
                                </p>
                            </div>
                            <div className="choose__content-info-organic">
                                <img
                                    src=""
                                    loading="lazy"
                                    alt="Vegan Food"
                                    id="about-us-img"
                                />
                                <div className="choose__content-info-organic-description">
                                    <h4 className="choose__content-info-organic-description-title">100% Natural Product</h4>
                                    <p className="choose__content-info-organic-description-text">
                                        Carefully sourced from organic farms, ensuring purity andquality.
                                    </p>
                                </div>
                            </div>
                            <div className="choose__content-info-organic">
                                <img
                                    src=""
                                    loading="lazy"
                                    alt="Mailbox Quality"
                                    id="about-us-img"
                                />
                                <div className="choose__content-info-organic-description">
                                    <h4 className="choose__content-info-organic-description-title">Increases resistance</h4>
                                    <p className="choose__content-info-organic-description-text">
                                        Our products are formulated to enhance your body's natural
                                        defense mechanisms.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <img src="" alt="ChooseUs-min" />
                    </div>
                    <ul className="choose__feature">
                        {policyInfo.map((item) => (
                            <li key={item.id} className="choose__feature-item">
                                <img src={item.img} alt={item.title} />
                                <h3 className="choose__feature-item-title"> {item.title}</h3>
                                <p className="choose__feature-item-description">{item.descr}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Choose;