// Program-26: Props Destructuring & children (Single File)
// *******************************************
// 🔹 Concept Covered:
// 1. Destructuring props for cleaner code
// 2. Using props.children for nested content
// 3. Reusable components
// *******************************************

import React, { Component } from 'react';

// Child Component: Product
class Product extends Component {
    render() {
        const { pId, name, price } = this.props.prodObj;
        return (
            <div style={{ border: '2px solid red', padding: '10px', margin: '5px' }}>
                <p>ID: {pId}</p>
                <p>Name: {name}</p>
                <p>Price: ${price}</p>
                <button className="btn btn-success">Buy Now</button>
                <h3>{this.props.children}</h3>
            </div>
        )
    }
}

// Parent Component: ProductList
export default class ProductList extends Component {

    productList = [
        { pId: 101, name: "iPhone", price: 5000 },
        { pId: 102, name: "Samsung", price: 4000 },
    ];

    render() {
        return (
            <div>
                <h1>Product List</h1>
                {this.productList.map(item => (
                    <Product key={item.pId} prodObj={item}>
                        This is extra content for {item.name}
                    </Product>
                ))}
            </div>
        )
    }
}
