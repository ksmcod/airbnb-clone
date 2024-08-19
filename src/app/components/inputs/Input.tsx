"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";

interface InputProps {
  id: string;
  placeholder: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

export default function Input({
  id,
  placeholder,
  type = "text",
  disabled,
  formatPrice,
  required,
  register,
  errors,
}: InputProps) {
  return (
    <div
      className={`w-full p-2 font-light bg-white border-2 rounded-md  transition relative flex items-center ${
        errors[id]
          ? "border-rose-500 focus:border-rose-500"
          : "border-neutral-300 focus:border-black"
      }`}
    >
      {formatPrice && <BiDollar size={20} className="text-neutral-700" />}

      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder={placeholder}
        type={type}
        className={`w-full outline-none disabled:opacity-70 disabled:cursor-not-allowed `}
      />
    </div>
  );
}
