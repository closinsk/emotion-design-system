import React from 'react';
import './Button.css';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', ...rest }) => (
  <button className={`eds-button eds-button--${variant}`} {...rest}>{children}</button>
);

export default Button;
