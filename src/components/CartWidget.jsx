import { ShoppingCart } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { Badge } from "@material-ui/core";

export default function CartWidget() {
  return (
    <IconButton aria-label="show cart items">
      <Badge badgeContent={1} color="primary">
        <ShoppingCart />
      </Badge>
    </IconButton>
  );
}
