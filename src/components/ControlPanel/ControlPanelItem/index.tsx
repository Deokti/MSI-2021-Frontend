import React, { ReactElement } from 'react';
import clsx from 'clsx';
import Button from '../../Button';

import './style.scss';

interface ManagementItemProps {
  backgroundColor: string
  text: string
  image: string
  active: boolean
}

export function ControlPanelItem({ backgroundColor, text, image, active }: ManagementItemProps): ReactElement<ManagementItemProps> {

  return (
    <span className="control-panel-item">
      <span className="control-panel-item__image" style={{ backgroundColor }}>
        <img src={image} alt="text" />
      </span>
      <Button
        width="100%"
        height={36}
        borderRadius={10}
        fontSize={12}
        fontWeight={600}
        className={clsx('control-panel-item__button', { active: active })}
      >
        {text}
      </Button>
    </span>
  )
}