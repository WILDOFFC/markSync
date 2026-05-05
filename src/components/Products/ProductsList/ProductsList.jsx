import "./styles.css";
import ProductCard from "./../ProductCard/ProductCard.jsx";

const ProductsList = () => {
  return (
    <>
      <ul className="products-list">
        <li>
          <ProductCard
            productPreview={"./../../../assets/media/productPreview.jpg"}
            productName={"Материнская плата MSI"}
            productMarketplaces={"Ozon, Wildberries"}
            productPrice={"11000р"}
          />
        </li>
        <li>
          <ProductCard
            productPreview={"./../../../assets/media/productPreview.jpg"}
            productName={"Материнская плата MSI"}
            productMarketplaces={"Ozon, Wildberries"}
            productPrice={"11000р"}
          />
        </li>
        <li>
          <ProductCard
            productPreview={"./../../../assets/media/productPreview.jpg"}
            productName={"Материнская плата MSI"}
            productMarketplaces={"Ozon, Wildberries"}
            productPrice={"11000р"}
          />
        </li>
        <li>
          <ProductCard
            productPreview={"./../../../assets/media/productPreview.jpg"}
            productName={"Материнская плата MSI"}
            productMarketplaces={"Ozon, Wildberries"}
            productPrice={"11000р"}
          />
        </li>
        <li>
          <ProductCard
            productPreview={"./../../../assets/media/productPreview.jpg"}
            productName={"Материнская плата MSI"}
            productMarketplaces={"Ozon, Wildberries"}
            productPrice={"11000р"}
          />
        </li>
      </ul>
    </>
  );
};

export default ProductsList;
