import React from 'react';
import Button from '../../Button';

import './style.scss';

interface ManagementItemProps {
  backgroundColor: string
  text: string
  image: string
}

export function ControlPanelItem({ backgroundColor, text, image }: ManagementItemProps): React.ReactElement<ManagementItemProps> {

  return (
    <span className="control-panel">
      <span className="control-panel__image" style={{ backgroundColor }}>
        <img src={image} alt="text" />
      </span>
      <Button
        width="100%"
        height={36}
        borderRadius={10}
        fontSize={12}
        fontWeight={600}
        className="control-panel__button"
      >
        {text}
      </Button>
    </span>
  )
}