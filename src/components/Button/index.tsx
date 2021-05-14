import React, { memo } from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';

export interface ButtonProps {
  children?: any
  width?: number | string
  height?: number | string
  border?: string
  cursor?: 'pointer' | 'text' | 'auto'
  backgroundColor?: string
  color?: string
  fontSize?: number
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
  borderRadius?: number | string
  onClick?: () => {}
  type?: 'button' | 'submit',
  isLoading?: boolean
  LoadingIcon?: JSX.Element | undefined
  disabled?: boolean,
  className?: string
}

function Button({
  type = 'button',
  children = 'Нажми на меня',
  width,
  height,
  border = 'none',
  cursor = 'pointer',
  backgroundColor,
  color,
  fontSize = 16,
  fontWeight,
  borderRadius = 0,
  onClick,
  LoadingIcon,
  isLoading = false,
  className
}: ButtonProps) {

  return (
    <button
      className={clsx(styles.button, { isLoading: styles.isLoading }, className)}
      type={type}
      style={
        {
          cursor,
          width,
          height,
          border,
          backgroundColor,
          color,
          fontSize,
          fontWeight,
          borderRadius
        }
      }
      disabled={isLoading}
      onClick={onClick}
    >
      {isLoading ? LoadingIcon : children}
    </button>
  );
}

export default memo(Button);
