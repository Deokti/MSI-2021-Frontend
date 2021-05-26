import React from 'react';
import { BeatLoader } from 'react-spinners';

import './style.scss';

export function LoadingSpinner() {
  return (
    <div className="loading-spinner">
      <BeatLoader size={20} />
    </div>
  );
}