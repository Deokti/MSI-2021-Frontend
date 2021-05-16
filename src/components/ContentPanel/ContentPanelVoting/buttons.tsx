import { AiOutlineHeart } from "react-icons/ai";
import { CgSmileSad } from "react-icons/cg";
import { FiSmile } from "react-icons/fi";
import { API_KEY } from "../../../config/API_KEY";
import { IVoting } from "../../../interfaces/reducers";

export const BUTTONS = [
  {
    id: 'onLikes',
    children: <FiSmile size={35} color="#fff" />,
    backgroundColor: '#97EAB9',
    borderRadius: "20px 0 0 20px"
  },
  {
    id: 'onFavourites',
    children: <AiOutlineHeart size={35} color="#fff" />,
    backgroundColor: '#FF868E',
    borderRadius: "0 0 0 0"
  },
  {
    id: 'onDislikes',
    children: <CgSmileSad size={35} color="#fff" />,
    backgroundColor: '#FFD280',
    borderRadius: "0 20px 20px 0"
  }
];

async function votingHistory() {
  const response = await fetch('https://api.thedogapi.com/v1/votes', {
    headers: { 'x-api-key': API_KEY },
  });
  const json = await response.json();
  console.log(json);
}

async function fetchVoting(voting: IVoting, value: number) {
  const likes = { image_id: voting.VOTING?.id, value }

  const PARAMS = {
    method: 'POST',
    headers: {
      'x-api-key': API_KEY,
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(likes),
  }

  await fetch('https://api.thedogapi.com/v1/votes', PARAMS);
  votingHistory();
}
