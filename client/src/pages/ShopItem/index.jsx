import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ShopItem() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [item, setItem] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const fetchItems = async () => {
    const fetchItem = await fetch(
      `https://fortnite-api.com/v2/cosmetics/br/${id}`
    );
    const data = await fetchItem.json();
    setItem(data.data);
  };
  console.log(item);
  return (
    <div>
      {Object.keys(item).length && (
        <>
          <h1>{item.name}</h1>
          <img src={item.images.icon} alt="" />
          <button onClick={() => navigate("/shop")}>Back to shop</button>
        </>
      )}
    </div>
  );
}

export default ShopItem;
