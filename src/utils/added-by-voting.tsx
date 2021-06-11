import React, { ReactNode } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { CgSmileSad } from "react-icons/cg";
import { FiSmile } from "react-icons/fi";

interface IResult {
  text?: string
  icon?: ReactNode
}

export function addedByVoting(value: number) {

  const added = 'добавлено';

  const result: IResult = {};

  switch (value) {

    case 0: {
      result['text'] = `${added} в Не понравилось`
      result['icon'] = <CgSmileSad size={20} color="#FFD280" />;
      break;
    }

    case 1: {
      result['text'] = `${added} в Понравилось`;
      result['icon'] = <FiSmile size={20} color="#97EAB9" />;
      break;
    }

    case undefined: {
      result['text'] = `${added} в Фавориты`;
      result['icon'] = <AiOutlineHeart size={20} color="#FF868E" />;
      break;
    }
  }

  return result;
}




