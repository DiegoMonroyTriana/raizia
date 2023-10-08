'use client'
import Link from "next/link";

type ButtonVariantType = 'fill' | 'outline'

interface ButtonProps {
  href?: string;
  variant?: ButtonVariantType;
  children: React.ReactNode;
  className?: string;
  action?: () => void;
  type?: 'submit' | 'button';
}

function Button({ children, action, variant = 'fill', href, className, type = 'button' }: ButtonProps) {
  const style = {
    fill: 'bg-lightGreen border-2 border-lightGreen text-prussianBlue text-lg py-2 px-4 rounded-md font-bold hover:brightness-105 transition-all',
    outline: 'bg-transparent border-2 border-lvory text-lvory text-lg py-2 px-4 rounded-md font-bold hover:brightness-105 transition-all',
  }
  const styledClass = `${style[variant]} ${className ?? className}`

  if (href) {
    return (
      <Link href={href} className={styledClass}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={action} className={styledClass}>
      {children}
    </button>
  )
}

export default Button;
