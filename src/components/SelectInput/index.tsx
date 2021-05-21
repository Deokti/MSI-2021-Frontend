import React, { ReactElement, useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

import './style.scss';
import '../../assets/styles/scroll.scss';

// interface TValue {
//   id: string | number
//   label: string
// }

interface SelectInputProps {
  defaultValue?: string | number
  values?: Array<string | number> | null
  label?: string
  onClick: (defaultValue: string | number) => void
}

export function SelectInput({ values, label, defaultValue, onClick }: SelectInputProps): ReactElement<SelectInputProps> {
  const [active, setActive] = useState<boolean>(false);

  function onSetActive() { return setActive(!active) }

  return (
    <div className="select-input" onClick={onSetActive}>
      <span className="select-input__active" key={Date.now()}>{label && `${label}:`} {defaultValue}</span>

      <MdKeyboardArrowDown fontSize={20} className="select-input__arrow" />

      {
        active &&
        (
          <ul className="select-input__list scroll">
            {
              values && values.map((value) => {
                return (
                  <li key={value}
                    className="select-input__item"
                    onClick={() => onClick(value)}
                  >
                    {label && `${label}:`} {value}
                  </li>
                )
              })
            }
          </ul>
        )
      }
    </div>
  )
}

