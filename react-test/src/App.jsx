import "./App.css";

const backgrounds = [
  "https://www.themealdb.com/images/media/meals/rvypwy1503069308.jpg",
  "https://www.themealdb.com/images/media/meals/xxpqsy1511452222.jpg",
  "https://www.themealdb.com/images/media/meals/1548772327.jpg",
  "https://www.themealdb.com/images/media/meals/1529446352.jpg",
  "https://www.themealdb.com/images/media/meals/rvypwy1503069308.jpg",
];

const App = () => {
  return (
    <div className="app">
      <h6 className="head-name">RECOMMENDED</h6>
      <span className="recipes">Recipes</span>
      <div className="recipes-grid">
        {backgrounds.map((background, index) => (
          <div key={index} className="recipes-card">
            <div className="recipes-card-inner">
              <div className="recipes-card-front">
                <img
                  src={background}
                  alt={`Recipe ${index + 1}`}
                  className="recipes-img"
                />
                <p className="recipes-name">THANG NOODLE</p>
                <p className="recipes-desc">20 mins | 4 servings</p>
              </div>
              <div className="recipes-card-back">
                <div className="order-button">
                  <img
                    src={background}
                    alt={`Recipe ${index + 1}`}
                    className="recipes-img"
                  />
                  {/* <button className="button">Order Now</button> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
