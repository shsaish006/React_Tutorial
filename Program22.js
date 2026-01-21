// Program-22: ProductList & Product Component (Single File)
// *******************************************
// 🔹 Concept Covered:
// 1. Rendering list using map()
// 2. Passing objects as props
// 3. Reusable components
// 4. key prop for list rendering
// 5. JSX rules (className vs class)
// 6. Parent → Child communication
// 7. Best practices for rendering lists
// *******************************************

import React, { Component } from 'react'; 

// Child Component: Product
class Product extends Component {
    render() {
        const { pId, name, price } = this.props.product; // destructuring props
        return (
            <div className="product" style={{ border: '1px solid gray', padding: '10px', margin: '5px' }}>
                <p>ID: {pId}</p>
                <p>Name: {name}</p>
                <p>Price: ${price}</p>
                <button className="btn btn-success">Buy Now</button>
            </div>
        )
    }
}

// Parent Component: ProductList
export default class ProductList extends Component {

    // Sample product data
    productList = [
        { pId: 101, name: "iPhone", price: 5000 },
        { pId: 102, name: "Samsung", price: 4000 },
        { pId: 103, name: "Oppo", price: 3000 },
    ];

    render() {
        return (
            <div>
                <h1>This is Product-List Component</h1>

                {/* Render list of Product components */}
                {this.productList.map(item => (
                    <Product key={item.pId} product={item} />
                ))}
            </div>
        )
    }
}
