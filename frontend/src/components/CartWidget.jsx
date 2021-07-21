import { ShoppingCart } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { Badge } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";

export default function CartWidget() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <Link to="cart">
      <IconButton aria-label="show cart items">
        <Badge badgeContent={basket?.length} color="secondary">
          <ShoppingCart />
        </Badge>
      </IconButton>
    </Link>
  );
}
