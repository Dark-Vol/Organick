import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setShowNoResults,
  selectInputResults,
  selectIsSkeletonLoading,
} from "../../../redux/slices/inputSlice";

import Search from "../Search";
import NoResults from "../NoResults";

export interface Product {
  id: string;
  parent_id: number;
  description: string;
  descriptionMore: string;
  additionalInfo: string;
  tag: string;
  isNew?: boolean;
  isSalePrice: boolean;
  img: string;
  name: string;
  price: number;
  salePrice?: number;
  percentage?: number;
  counter: number;
  modifiedPrice: number;
}

const SearchModal: React.FC = () => {
  const dispatch = useDispatch();

  const { searchProduct, showNoResults, inputProducts } =
    useSelector(selectInputResults);
  const isSkeletonLoading = useSelector(selectIsSkeletonLoading);

  const filteredProducts = inputProducts.filter(
    (product: Product) =>
      product.name.toLowerCase().includes(searchProduct.toLowerCase()) ||
      product.tag.toLowerCase().includes(searchProduct.toLowerCase())
  );

  let toLocaleString = filteredProducts.length > 1 ? "Results" : "Result";

  useEffect(() => {
    filteredProducts.length <= 0 || searchProduct === ""
      ? dispatch(setShowNoResults(true))
      : dispatch(setShowNoResults(false));
  }, [searchProduct, filteredProducts]);

  return (
    <>
      {isSkeletonLoading ? (
        <div className="no-results">
          <div className="no-results__content">
            <div className="no-results__content-search">
              <svg width="60" height="60" viewBox="0 0 35 35">
                <g>
                  <g>
                    <g>
                      <path
                        d="m22.3 24.4s2.5.2 5 2.3c0 0-7.2 4.5-12.3-.7-5 5.2-12.2.7-12.2.7 2.5-2.1 5-2.3 5-2.3-5-3.5-6-13.3-6-13.3 5.1.1 9.8 5.4 9.8 5.4-3.8-7.9 3.5-15 3.5-15s7.3 7.1 3.5 15c0 0 4.6-5.3 9.8-5.4-.1.1-1.1 9.9-6.1 13.3z"
                        fill="#f58570"
                      ></path>
                    </g>
                    <g>
                      <path d="m21.1 29.5c-2.3 0-4.3-.7-6-2.2-1.7 1.4-3.7 2.2-6 2.2-3.6 0-6.7-1.9-6.8-1.9-.3-.2-.4-.5-.5-.8 0-.3.1-.6.4-.8 1.3-1 2.6-1.7 3.6-2-4-4.3-4.9-12.3-4.9-12.7 0-.3.1-.6.3-.8s.5-.4.7-.3c3 0 5.8 1.7 7.8 3.2-1-7 4.6-12.6 4.7-12.6.4-.4 1-.4 1.4 0 .1.1 5.7 5.6 4.8 12.6 2-1.5 4.8-3.1 7.8-3.2.3 0 .6.1.8.3s.3.5.3.8c0 .4-.9 8.4-4.9 12.7 1 .4 2.3 1 3.6 2 .2.2.4.5.4.8s-.2.6-.5.8c-.4.1-3.4 1.9-7 1.9zm-6-4.5c.3 0 .5.1.7.3 1.4 1.5 3.2 2.2 5.3 2.2 1.7 0 3.2-.5 4.3-.9-1.7-1-3.1-1.1-3.2-1.1-.4 0-.8-.3-.9-.7s.1-.8.4-1.1c3.6-2.5 5-8.7 5.4-11.3-4.2.8-7.8 4.9-7.9 4.9-.3.4-.9.4-1.3.2-.4-.3-.6-.8-.3-1.3 2.8-5.8-.9-11.2-2.6-13.1-1.7 1.9-5.4 7.3-2.6 13.1.2.5.1 1-.3 1.3s-1 .2-1.3-.2c0 0-3.7-4.2-7.9-4.9.4 2.6 1.8 8.9 5.4 11.3.3.2.5.7.4 1.1s-.5.7-.9.7c0 0-1.5.2-3.2 1.1 1.1.4 2.6.9 4.3.9 2.1 0 3.9-.7 5.3-2.2.4-.2.6-.3.9-.3z"></path>
                    </g>
                    <g>
                      <path d="m16.2 34.1c-2.1-1.6-2.9-4.9-2.1-8.3.1-.5.7-.9 1.2-.7.5.1.9.7.7 1.2-.6 2.6-.1 5.2 1.3 6.3.4.3.5 1 .2 1.4-.3.3-.9.4-1.3.1z"></path>
                    </g>
                  </g>
                  <g>
                    <circle cx="19.6" cy="22.3" fill="#fff" r="7.6"></circle>
                  </g>
                  <g>
                    <path
                      d="m32.5 32.4c-1.1 1.4-3.2 1.5-4.5.2l-4-4.1c.6-.4 1.1-.9 1.5-1.5.5-.7.9-1.4 1.2-2.1l4.9 3c1.7 1 2.1 3.1.9 4.5z"
                      fill="#08a650"
                    ></path>
                  </g>
                  <g>
                    <path
                      d="m19.6 30.9c-2 0-3.9-.7-5.4-1.9-1.8-1.4-2.9-3.5-3.2-5.8s.4-4.6 1.8-6.4c1.6-2.1 4.1-3.2 6.8-3.2 2 0 3.9.7 5.4 1.9 3.7 3 4.3 8.4 1.4 12.2-1.7 2-4.1 3.2-6.8 3.2zm.1-15.3c-2 0-3.9.9-5.2 2.5-1.1 1.4-1.6 3.1-1.4 4.9s1.1 3.3 2.5 4.5c1.2 1 2.6 1.5 4.1 1.5 2 0 3.9-.9 5.2-2.5 2.3-2.9 1.8-7.1-1-9.3-1.3-1.1-2.7-1.6-4.2-1.6z"
                      fill="#010101"
                    ></path>
                  </g>
                  <g>
                    <path
                      d="m27.3 33.3-4-4.1c-.2-.2-.3-.5-.3-.8s.2-.6.4-.7c.5-.3.9-.8 1.3-1.3.5-.6.8-1.2 1-1.9.1-.3.3-.5.6-.6s.6-.1.9.1l4.9 3c1 .6 1.6 1.6 1.8 2.7s.1 2.4-.6 3.3c-1.5 1.9-4.3 2-6 .3zm-1.7-4.7 3.2 3.3c.8.8 2.3.8 3-.1.8-1 .5-2.3-.5-2.9l-4-2.4c-.2.5-.5.9-.9 1.3-.3.2-.5.5-.8.8z"
                      fill="#010101"
                    ></path>
                  </g>
                  <g opacity=".1">
                    <path
                      d="m22.4 15.1c-2.1.1-4.2 1.1-5.6 2.9-2.6 3.3-2.1 8.1 1.2 10.7.6.5 1.3.9 2 1.2-1.8.1-3.6-.5-5.1-1.7-3.3-2.6-3.8-7.4-1.2-10.7 2.1-2.7 5.7-3.5 8.7-2.4z"
                      fill="#030303"
                    ></path>
                  </g>
                </g>
              </svg>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "20px",
                }}
              >
                <h4 className="no-results__content-search-text">
                  Searching...
                </h4>
                <p className="no-results__content-return">
                  Hold on, our search wizards are working their magic!
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          {showNoResults ? (
            <NoResults />
          ) : (
            <>
              <p className="search-iner">
                {toLocaleString} for:
                <span className="search-iner__text">"{searchProduct}"</span>
                <span className="search-iner__value">
                  ({filteredProducts.length})
                </span>
              </p>

              <ul
                className={
                  searchProduct !== ""
                    ? "search-items search-items_active"
                    : "search-items"
                }
              >
                {filteredProducts.slice(0, 4).map((product: Product) => (
                  <li className="search-items__item" key={product.parent_id}>
                    <Search {...product} />
                  </li>
                ))}
              </ul>
            </>
          )}
        </>
      )}
    </>
  );
};

export default SearchModal;
