import { useState, useEffect } from "react";
import "./App.css";

const backgrounds = [
  "https://www.themealdb.com/images/media/meals/rvypwy1503069308.jpg",
  "https://www.themealdb.com/images/media/meals/xxpqsy1511452222.jpg",
  "https://www.themealdb.com/images/media/meals/1548772327.jpg",
  "https://www.themealdb.com/images/media/meals/1529446352.jpg",
  "https://www.themealdb.com/images/media/meals/rvypwy1503069308.jpg",
];

const App = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch recipes data from API or any data source
    // For demonstration, I'll use a mock data array
    const mockRecipes = [
      { name: "Recipe 1", desc: "20 mins | 4 servings" },
      { name: "Recipe 2", desc: "25 mins | 3 servings" },
      { name: "Recipe 3", desc: "30 mins | 2 servings" },
      { name: "Recipe 4", desc: "15 mins | 5 servings" },
      { name: "Recipe 5", desc: "35 mins | 6 servings" },
    ];
    setRecipes(mockRecipes);
  }, []);

  return (
    <div className="app">
      <div className="header-div">
        <h6 className="head-name">RECOMMENDED</h6>
        <span className="recipes">Recipes</span>
      </div>
      <div className="recipes-grid">
        {recipes.map((recipe, index) => (
          <div key={index} className="recipes-card">
            <div className="recipes-card-inner">
              <div className="recipes-card-front">
                <img
                  src={backgrounds[index % backgrounds.length]}
                  alt={`Recipe ${index + 1}`}
                  className="recipes-img"
                />
                <p className="recipes-name">{recipe.name}</p>
                <p className="recipes-desc">{recipe.desc}</p>
              </div>
              <div className="recipes-card-back">
                <div className="order-button">
                  <img
                    src={backgrounds[index % backgrounds.length]}
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
