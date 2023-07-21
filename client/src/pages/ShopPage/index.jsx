import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const response = await fetch("https://fortnite-api.com/v2/cosmetics/br");
    const fortniteData = await response.json();
    setItems(fortniteData.data);
  };

  return (
    <div>
      <h1>Shop Page</h1>
      <div className="items">
        {items.map((el) => (
          <p key={el.id}>
            <Link to={`/shop/${el.id}`}>{el.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
}

export default Shop;
