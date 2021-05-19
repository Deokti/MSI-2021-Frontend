import React from 'react';
import { BeatLoader } from 'react-spinners';

import './style.scss';

export function LoadingSpinner() {
  return <BeatLoader size={20} />;
}