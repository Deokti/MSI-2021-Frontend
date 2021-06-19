import React from 'react';
import { RowProps, TRow } from './Row.props';

export function Row(
  { left, right,
    display = 'flex',
    justifyContent = 'space-between',
    marginLeft = 0, marginRight = 0
  }: RowProps): React.ReactElement<RowProps> {

  function processСomponent(Component: TRow) {
    return typeof Component === 'function'
      ? <Component />
      : Component
  }

  return (
    <div style={{ display, justifyContent, marginLeft, marginRight }}>
      {processСomponent(left)}
      {processСomponent(right)}
    </div>
  )
}