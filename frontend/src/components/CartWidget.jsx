import { CgShoppingBag } from "react-icons/cg";
import { IconButton } from "@material-ui/core";
import { Badge } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { useLocation } from "react-router";

export default function CartWidget() {
  const [{ basket }, dispatch] = useStateValue();
  const location = useLocation();

  return (
    <Link to="cart">
      {location.pathname === "/" && (
        <IconButton aria-label="show cart items">
          <Badge badgeContent={basket?.length} color="secondary">
            <CgShoppingBag size="1.5rem" />
          </Badge>
        </IconButton>
      )}
    </Link>
  );
}
