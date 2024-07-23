import React from "react";
import Link from "next/link";
import Image from "next/image";
import * as Icon from "react-feather";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import QtyForm from "./QtyForm";

const CartContent = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const total = useSelector((state) => state.total);
  // console.log(cart)

  const removeItem = (pId) => {
    dispatch({
      type: "REMOVE_ITEM",
      id: pId,
    });
    toast.success("Cart Removed Successfully");
  };

  const reset = () => {
    dispatch({
      type: "RESET",
    });
    toast.success("Thanks for your order.");
    router.push("/");
  };

  return (
    <>
      <div className="cart-table table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Name</th>
              <th scope="col">Unit Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
            </tr>
          </thead>

          <tbody>
            {cart.length ? (
              cart.map((crt) => (
                <tr key={crt.id}>
                  <td className="product-thumbnail">
                    <Link href="/products/[id]" as={`/products/${crt.id}`}>
                      <Image src={crt.image} alt="item" width={80} height={100} />
                    </Link>
                  </td>

                  <td className="product-name">
                    <Link href="/products/[id]" as={`/products/${crt.id}`}>
                      {crt.name}
                    </Link>
                  </td>

                  <td className="product-price">
                    <span className="unit-amount">${crt.price}</span>
                  </td>

                  <td className="product-quantity">
                    <QtyForm {...crt} />
                  </td>

                  <td className="product-subtotal">
                    <span className="subtotal-amount">
                      ${(crt.quantity * crt.price).toFixed(2)}
                    </span>

                    <a
                      href="#"
                      className="remove"
                      onClick={() => {
                        removeItem(crt.id);
                      }}
                    >
                      <Icon.Trash2 />
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  Empty
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="cart-buttons">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-7 col-sm-7">
            <div className="continue-shopping-box">
              <Link href="/shop/" className="btn btn-light">
                Continue Shopping
              </Link>
            </div>
          </div>

          <div className="col-lg-5 col-md-5 col-sm-5 text-right">
            <button type="button" className="btn btn-light">
              Update Cart
            </button>
          </div>
        </div>
      </div>

      <div className="cart-totals">
        <h3>Cart Totals</h3>

        <ul>
          <li>
            Subtotal <span>${total.toFixed(2)}</span>
          </li>
          <li>
            Shipping <span>$10.00</span>
          </li>
          <li>
            Total{" "}
            <span>
              <b>${(total + 10).toFixed(2)}</b>
            </span>
          </li>
        </ul>

        <Link
          href="#"
          onClick={(e) => {
            e.preventDefault();
            reset();
          }}
          className="btn btn-primary"
        >
          Proceed to Checkout
        </Link>
      </div>
    </>
  );
};

export default CartContent;
