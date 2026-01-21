/*
Program-42: Products Pagination
Notes:
1. useState used to track current item offset.
2. itemsPerPage defines number of items per page.
3. slice() used to get current page items.
4. ReactPaginate handles page buttons, next/prev.
5. handlePageClick calculates new offset: selected * itemsPerPage % totalLength.
6. pageCount is Math.ceil(totalItems/itemsPerPage).
7. Spread operator ensures state change triggers re-render.
8. Dynamic rendering of products using map() inside Bootstrap cards.
9. Inline styles used for scrollable description.
10. Pagination CSS ensures consistent layout and styling.
11. Can be extended to include sorting/filtering along with pagination.
12. Each page re-renders only visible items for performance.
13. Functional components with hooks simplify state management for pagination.
*/

import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import productsArr from "./Products.json";
import "./ProductsPagination.css";

export default function ProductsPagination() {
  const itemsPerPage = 4;
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const filteredProducts = productsArr.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(productsArr.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % productsArr.length;
    setItemOffset(newOffset);
  };

  return (
    <div>
      <h2>Products with Pagination</h2>
      <div className="row">
        {filteredProducts.map((product) => (
          <div className="col-sm-3" key={product.id}>
            <div className="card text-center">
              <img src={product.image} alt={product.title} style={{ height: "150px" }} />
              <div className="card-body">
                <h5>{product.category}</h5>
                <p>{product.title}</p>
                <p style={{ height: "100px", overflow: "scroll" }}>{product.description}</p>
                <p>{product.price}</p>
                <button className="btn btn-primary">BUY NOW</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        containerClassName="pagination"
        pageLinkClassName="page-num"
        activeLinkClassName="active"
      />
    </div>
  );
}
