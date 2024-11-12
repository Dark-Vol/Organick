import offerCatalog from "../../database/about/offerCatalog";

const MiniOffer: React.FC = () => {
    return (
        <section className="mini-offer">
            <div className="container">
                <div className="mini-offer__content">
                    <div className="mini-offer__content-title">
                        <span className="mini-offer__content-title-subheading">
                            The Products
                        </span>
            
                        <h2 className="mini-offer__content-title-heading">
                            What We Offer Organic for You
                        </h2>
                    </div>
        
                    <ul className="mini-offer__content-items">
                        {offerCatalog.map((item) => (
                            <li key={item.id} className="mini-offer__content-items-item">
                                <img
                                    className="mini-offer__content-items-item-img"
                                    loading="lazy"
                                    src={item.img}
                                    alt={item.name}
                                />
                
                                <h3 className="mini-offer__content-items-item-text">
                                    {item.name}
                                </h3>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default MiniOffer;