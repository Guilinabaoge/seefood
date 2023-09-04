import NoImage from '../icons/noimage.jpg'
import '../css/productStyle.css'

function Product(props: any) {
  var imageUrl = props.item.product.image
  if (imageUrl===null) {
    imageUrl = NoImage
  }

  const itemname = props.item.product.categories.da

  return (
        <div className={'flex'}>
            <img src={imageUrl} className={'product-image'}></img>
            <div className={'product-name'}>{itemname}</div>
            <div className={'product-price'}>{props.item.offer.originalPrice}dkk&rarr;{props.item.offer.newPrice}dkk</div>
        </div>
  );
}

export default Product;