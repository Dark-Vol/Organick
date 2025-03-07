import { useSelector } from "react-redux";
import { selectToggleShoppingCart } from "../../../redux/slices/cartSlice";
import { selectVisibleInput } from "../../../redux/slices/inputSlice";

import Header from "../Header";
import ShoppingCart from "../ShoppingCart";
import Input from "../Input";

const Navigation: React.FC = () => {
  const toggleShoppingCart = useSelector(selectToggleShoppingCart);
  const visibleInput = useSelector(selectVisibleInput);

  return (
    <>
      <Header />
      <div
        className={
          toggleShoppingCart || visibleInput
            ? "overlay overlay_visible"
            : "overlay"
        }
      ></div>
      <ShoppingCart />
      <Input />
    </>
  );
};

export default Navigation;
