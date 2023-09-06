import NoImage from '../icons/noimage.jpg'
import '../css/productStyle.css'

function Product(props: any) {
  var imageUrl = props.item.product.image
  if (imageUrl===null) {
    imageUrl = NoImage
  }

  const itemname = props.item.product.categories.da

  // console.log(itemname)

  return (
        <div className='product'>
            <div className='image-container'>
              <img src={imageUrl} className={'product-image'}></img>
            </div>
            <div className='details-container'>
              <p className={'product-name'}>{itemname}</p>
              <p className={'product-price'}>{props.item.offer.originalPrice}dkk&rarr;{props.item.offer.newPrice}dkk</p>
            </div>
        </div>
  );
}

export default Product;