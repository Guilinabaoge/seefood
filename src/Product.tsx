
function Product(props: any) {
  const imageUrl = props.item.product.image
  return (
        <div>
            <img src={imageUrl} style={{ width: '200px', height: '200px' }}></img>
            <div>{props.item.product.categories.da}</div>
            <div>{props.item.offer.originalPrice}&rarr;{props.item.offer.newPrice} </div>
            
        </div>
  );
}

export default Product;