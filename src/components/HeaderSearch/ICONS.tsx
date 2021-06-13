import { AiOutlineHeart } from "react-icons/ai";
import { CgSmileSad } from "react-icons/cg";
import { FiSmile } from "react-icons/fi";
import { ROUTER_PATH } from "../../config/ROUTER_PATH";

const sizeIcon: number = 25;
const colorUcon: string = '#FF868E'
export const ICONS = [
  {
    id: 0,
    children: <FiSmile size={sizeIcon} color={colorUcon} />,
    route: ROUTER_PATH.likes
  },
  {
    id: 1,
    children: <AiOutlineHeart size={sizeIcon} color={colorUcon} />,
    route: ROUTER_PATH.favorites
  },
  {
    id: 2,
    children: <CgSmileSad size={sizeIcon} color={colorUcon} />,
    route: ROUTER_PATH.dislikes
  },
];