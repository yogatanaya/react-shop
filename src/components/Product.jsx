import React  from 'react'
import PropTypes from 'prop-types'
import Price from '../components/Price'
const Product = ({product, commitAddToCart})=>(
    <div>
        <br/>
        <div className='card'>
            <div className='card-image'>
                {/* <figure>
                    <img src={product.imageSrc} alt={product.name}/>
                </figure> */}
            </div>
            <div className='card-content'>
                <h3>{product.name}</h3>
                <p>{product.desc}</p>
                <hr/>
                <b><Price amount={Product.price}/></b>
            </div>
            <hr/>
            <br/>
            <div className="card-content">
                <button className='btn btn-danger'><i className='material-icons'>delete</i></button>
                {" "}
                <button className='btn btn-info'><i className='material-icons'>edit</i></button>
                {" "}
                <button className='btn btn-primary'
                onClick={()=>commitAddToCart(product)}
                >
                <i className='material-icons'>add_shopping_cart</i>
                </button>
            </div>
        </div>
    </div>
);

Product.propTypes={
    product: PropTypes.shape({
        imageSrc:PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    }),
    commitAddToCart:PropTypes.func.isRequired
};
export default Product