import React, { ReactElement, useState, useRef, useEffect } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import './style.scss';
import '../../assets/styles/scroll.scss';

/* 
  defaultValue - базовое значение, которое всегда будет отображаться
  values - все значения, которые будут входить в состав отображаемого при клике 
  label - дополнительный тектовый элемент, позволяющий добавит текст вперёд и затем двуеточие
  onClick - функция при активировании которой меняется active и select открывается или закрывается
*/

export interface SelectInputProps {
  defaultValue?: string | number
  values?: Array<string | number> | null
  label?: string
  onClick: (defaultValue: string | number) => void
}

export function SelectInput({ values, label, defaultValue, onClick }: SelectInputProps): ReactElement<SelectInputProps> {
  const selectInputRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<boolean>(false);

  function onSetActive() { return setActive(!active) }

  useEffect(() => {
    // Вешаем событие
    document.addEventListener('click', closeSelect);

    return () => {
      // Удаляем событие
      document.removeEventListener('click', closeSelect);
    }
  })


  // Если произошёл клик не по элементу, то активируется функция и закроет окно
  function closeSelect(event: any) {
    const path = event.path || (event.composedPath && event.composedPath());
    const elementToPath = path.includes(selectInputRef.current);
    if (path && !elementToPath) return setActive(false);
  }


  return (
    <div className="select-input" onClick={onSetActive} ref={selectInputRef}>
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

