import React from "react";

const NewArrivals = () => {
  const containerStyle = {
    textAlign: "center",
    padding: "50px 0",
    backgroundColor: "#f8f9fa",
  };

  const titleStyle = {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "30px",
    color: " #212121",
  };

  const gridStyle = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
  };

  const cardStyle = {
    position: "relative",
    width: "250px",
    height: "500px", // Card ki height ko lamba kiya hai
    overflow: "hidden",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
  };

  const imgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const overlayStyle = {
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "100%",
    background: "rgba(0, 0, 0, 0.31)",
    color: "white",
    padding: "10px",
    textAlign: "left",
  };

  const priceStyle = {
    color: "#FFA15C",
    fontWeight: "bold",
    fontSize: "16px"
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Checkout New Arrivals</h2>
      <div style={gridStyle}>
        {[
          { img: "src/assets/img/gallery/Party.jpeg", name: "Flat Hill Slingback", price: "$175" },
          { img: "src/assets/img/gallery/BESPARED _ Men's Upcycled Cashmere Knitwear.jpeg", name: "Ocean Blue Ring", price: "$175" },
          { img: "src/assets/img/gallery/ocean-blue.png", name: "Brown Leathered Wallet", price: "$175" },
          { img: "src/assets/img/gallery/sweater.png", name: "Silverside Wristwatch", price: "$175" },
        ].map((item, index) => (
          <div key={index} style={cardStyle}>
            <img src={item.img} alt={item.name} style={imgStyle} />
            <div style={overlayStyle}>
              <h4 className="text-white">{item.name}</h4>
              <p style={priceStyle}>{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;

