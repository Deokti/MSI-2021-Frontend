import React from 'react';

type TRow = React.ReactElement | React.FC | JSX.Element

interface RowProps {
  left: TRow
  right: TRow
  display?: string
  justifyContent?: 'initial' | 'space-between' | 'space-around' | 'space-evenly'
  marginLeft?: number
  marginRight?: number
}

export function Row(
  { left, right,
    display = 'flex',
    justifyContent = 'space-between',
    marginLeft, marginRight
  }: RowProps): React.ReactElement<RowProps> {

  function processСomponent(Component: TRow) {
    return typeof Component === 'function'
      ? <Component />
      : Component
  }

  return (
    <div style={{
      display,
      justifyContent,
      marginLeft,
      marginRight
    }}>
      {processСomponent(left)}
      {processСomponent(right)}
    </div>
  )
}