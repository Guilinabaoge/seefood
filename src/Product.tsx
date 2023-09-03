import NoImage from './icons/noimage.jpg'
function Product(props: any) {
  var imageUrl = props.item.product.image
  if (imageUrl===null) {
    imageUrl = NoImage
  }

  const itemname = props.item.product.categories.da

  return (
        <div>
            <img src={imageUrl} style={{ width: '200px', height: '200px' }}></img>
            <div>{itemname}</div>
            <div>{props.item.offer.originalPrice}dkk&rarr;{props.item.offer.newPrice}dkk</div>
        </div>
  );
}

export default Product;