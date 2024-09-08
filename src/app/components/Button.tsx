"use client";

import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

export default function Button({
  label,
  onClick,
  disabled,
  icon: Icon,
  outline,
  small,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full
        ${
          outline
            ? "bg-white hover:bg-neutral-100 active:bg-neutral-300/90 border-black text-black"
            : "bg-rose-500 hover:bg-rose-500/95 border-rose-500 text-white"
        }
        ${
          small ? "py-1 text-sm  border" : "py-2 text-md font-semibold border-2"
        }
        `}
    >
      {Icon && <Icon size={18} className="absolute left-4 top-3" />}
      {label}
    </button>
  );
}
