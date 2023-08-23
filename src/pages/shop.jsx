import { Productlar } from "../components/products"
import Item from '../components/Item'

function Shop() {




  return (

    <div>
      {
        Productlar.length > 0 && Productlar.map((product) => (
          <Item key={product.id} id={product.id} name={product.name} image={product.image} title={product.title} price={product.price} />
        ))
      }
    </div>

  )
}

export default Shop