import "./styles.css";
import ProductCard from "./../ProductCard/ProductCard.jsx";
import DashboardPanel from "../../Dashboard/DashboardComponents/DashboardPanel/DashboardPanel.jsx";
import ProductPreview from "./../../../assets/media/productPreview.jpg";

const ProductsList = () => {
  return (
    <>
      <DashboardPanel panelHeader={"Товары"}>
        <ul className="products-list">
          <li>
            <ProductCard
              productPreview={"./../../../assets/media/productPreview.jpg"}
              productName={"Материнская плата MSI"}
              productMarketplaces={"Ozon, Wildberries"}
              productPrice={"11000р"}
              productPreview={ProductPreview}
            />
          </li>
          <li>
            <ProductCard
              productPreview={"./../../../assets/media/productPreview.jpg"}
              productName={"Материнская плата MSI"}
              productMarketplaces={"Ozon, Wildberries"}
              productPrice={"11000р"}
              productPreview={ProductPreview}
            />
          </li>
          <li>
            <ProductCard
              productPreview={"./../../../assets/media/productPreview.jpg"}
              productName={"Материнская плата MSI"}
              productMarketplaces={"Ozon, Wildberries"}
              productPrice={"11000р"}
              productPreview={ProductPreview}
            />
          </li>
          <li>
            <ProductCard
              productPreview={"./../../../assets/media/productPreview.jpg"}
              productName={"Материнская плата MSI"}
              productMarketplaces={"Ozon, Wildberries"}
              productPrice={"11000р"}
              productPreview={ProductPreview}
            />
          </li>
          <li>
            <ProductCard
              productPreview={"./../../../assets/media/productPreview.jpg"}
              productName={"Материнская плата MSI"}
              productMarketplaces={"Ozon, Wildberries"}
              productPrice={"11000р"}
              productPreview={ProductPreview}
            />
          </li>
        </ul>
      </DashboardPanel>
    </>
  );
};

export default ProductsList;
