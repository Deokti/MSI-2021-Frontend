import React from 'react';

type TRow = React.ReactElement | React.FC | JSX.Element

interface RowProps {
  left: TRow
  right: TRow
}

export function Row({ left, right }: RowProps): React.ReactElement<RowProps> {

  function processСomponent(Component: TRow) {
    return typeof Component === 'function'
      ? <Component />
      : Component
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between'
    }}>
      {processСomponent(left)}
      {processСomponent(right)}
    </div>
  )
}