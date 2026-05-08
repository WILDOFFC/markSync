import "./styles.css";

const ProductCard = ({
  productPreview,
  productName,
  productMarketplaces,
  productPrice,
}) => {
  return (
    <>
      <div className="product-card">
        <div className="product-preview">
          <img
            src={productPreview}
            alt="Превью товара"
            className="product-preview__image"
          />
        </div>
        <div className="product-name">{productName}</div>
        <div className="product-marketplaces">{productMarketplaces}</div>
        <div className="product-price">{productPrice}</div>
        <div className="product-actions">
          <button className="product-action">Изменить</button>
          <button className="product-action">Удалить</button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
