
function Product (props) {
    const {image, name, desc, size, price} = props;
    
  return (
    <div>
        <img src="{image}" alt="sneakers"></img>
        <h4>{name}</h4>
        <p>{desc}</p>
        <h4>{price}</h4>
        </div>
  )
}

export default Product