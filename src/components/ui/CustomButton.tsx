
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  to?: string;
  href?: string;
  className?: string;
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
};

const CustomButton = ({
  variant = 'primary',
  size = 'md',
  children,
  to,
  href,
  className,
  isLoading = false,
  disabled = false,
  onClick,
  type = 'button',
  ...props
}: ButtonProps) => {
  // Styles based on variant
  const variantStyles = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90 button-animation',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 button-animation',
    outline: 'border border-primary text-primary hover:bg-primary/10 button-animation',
    ghost: 'text-primary hover:bg-primary/10 button-animation',
  };

  // Styles based on size
  const sizeStyles = {
    sm: 'text-sm px-3 py-1.5 rounded-full',
    md: 'text-base px-5 py-2 rounded-full',
    lg: 'text-lg px-6 py-3 rounded-full',
  };

  // Base styles
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50 disabled:opacity-70 disabled:cursor-not-allowed';

  // Combined styles
  const buttonStyles = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  // Loading indicator
  const LoadingIndicator = () => (
    <span className="mr-2 loader">
      <span className="visually-hidden">Loading...</span>
    </span>
  );

  // Render as Link if "to" is provided (internal)
  if (to) {
    return (
      <Link
        to={to}
        className={buttonStyles}
        {...props}
      >
        {isLoading && <LoadingIndicator />}
        {children}
      </Link>
    );
  }

  // Render as anchor if "href" is provided (external)
  if (href) {
    return (
      <a
        href={href}
        className={buttonStyles}
        rel="noopener noreferrer"
        target="_blank"
        {...props}
      >
        {isLoading && <LoadingIndicator />}
        {children}
      </a>
    );
  }

  // Render as button (default)
  return (
    <button
      type={type}
      className={buttonStyles}
      onClick={onClick}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <LoadingIndicator />}
      {children}
    </button>
  );
};

export default CustomButton;
