
import React from 'react';
import { cn } from '@/lib/utils';

type CardProps = {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  glass?: boolean;
};

const CustomCard = ({
  children,
  className,
  hoverable = false,
  glass = false,
  ...props
}: CardProps) => {
  return (
    <div
      className={cn(
        "rounded-2xl bg-card p-6 shadow-subtle",
        hoverable && "card-hover",
        glass && "glass",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

type CardHeaderProps = {
  children: React.ReactNode;
  className?: string;
};

const CardHeader = ({
  children,
  className,
  ...props
}: CardHeaderProps) => {
  return (
    <div
      className={cn("mb-4", className)}
      {...props}
    >
      {children}
    </div>
  );
};

type CardTitleProps = {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

const CardTitle = ({
  children,
  className,
  as: Component = 'h3',
  ...props
}: CardTitleProps) => {
  return (
    <Component
      className={cn("font-semibold text-foreground", className)}
      {...props}
    >
      {children}
    </Component>
  );
};

type CardDescriptionProps = {
  children: React.ReactNode;
  className?: string;
};

const CardDescription = ({
  children,
  className,
  ...props
}: CardDescriptionProps) => {
  return (
    <p
      className={cn("text-muted-foreground", className)}
      {...props}
    >
      {children}
    </p>
  );
};

type CardContentProps = {
  children: React.ReactNode;
  className?: string;
};

const CardContent = ({
  children,
  className,
  ...props
}: CardContentProps) => {
  return (
    <div
      className={cn("mt-4", className)}
      {...props}
    >
      {children}
    </div>
  );
};

type CardFooterProps = {
  children: React.ReactNode;
  className?: string;
};

const CardFooter = ({
  children,
  className,
  ...props
}: CardFooterProps) => {
  return (
    <div
      className={cn("mt-6 flex items-center", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export {
  CustomCard,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
};
