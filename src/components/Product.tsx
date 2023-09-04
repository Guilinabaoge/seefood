import NoImage from '../icons/noimage.jpg'
function Product(props: any) {
  var imageUrl = props.item.product.image
  if (imageUrl===null) {
    imageUrl = NoImage
  }

  const itemname = props.item.product.categories.da

  return (
        <div>
            <img src={imageUrl} style={{ width: '100%', aspectRatio: '1 / 1' }}></img>
            <div style={{ width: '100%', aspectRatio: '4 / 1' }}>{itemname}</div>
            <div style={{ width: '100%', aspectRatio: '8 / 1' }}>{props.item.offer.originalPrice}dkk&rarr;{props.item.offer.newPrice}dkk</div>
        </div>
  );
}

export default Product;