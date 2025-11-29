import React, { forwardRef, InputHTMLAttributes, useState, useEffect } from "react";
import { Icon } from "../icons/icon";
import { IconName } from "../icons";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  className?: string;
  icon?: IconName;
  iconPosition?: "left" | "right";
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  error,
  className = "",
  icon,
  iconPosition = "left",
  value: valueProp,
  defaultValue,
  onChange,
  ...rest
}, ref) => {

  const [internalValue, setInternalValue] = useState<string>(
    valueProp !== undefined ? String(valueProp) : defaultValue ? String(defaultValue) : ""
  );
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (valueProp !== undefined) setInternalValue(String(valueProp ?? ""));
  }, [valueProp]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (valueProp === undefined) setInternalValue(e.target.value);
    onChange?.(e);
  };

  const hasValue = internalValue !== "";

  const iconPadding = icon
    ? iconPosition === "left"
      ? "pl-10 pr-4"
      : "pl-4 pr-10"
    : "";

  return (
    <div className="relative w-full flex flex-col">
      <div className="relative">
        {label && (
          <label
            className={`
              pointer-events-none absolute left-3 text-neutV-800 transition-all duration-150 top-3
              transform origin-left text-xl ms-6 text-black dark:text-white
              ${isFocused || hasValue ? "-translate-y-[26px] scale-75 -translate-x-[24px] bg-limeV-50 px-1 " : "translate-y-0 scale-100"}
              ${error ? "text-redV-700" : "text-neutral-900"}
            `}
          >
            {label}
          </label>
        )}

        {icon && (
          <span
            className={`absolute top-1/2 -translate-y-1/2 text-neutV-700 ${iconPosition === "left" ? "left-3" : "right-3"}`}
            aria-hidden
          >
            <Icon name={icon} className="text-limeV-700"/>
          </span>
        )}

        <input
          {...rest}
          ref={ref}
          value={valueProp !== undefined ? valueProp : internalValue}
          onChange={handleChange}
          onFocus={(e) => {
            setIsFocused(true);
            rest.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            rest.onBlur?.(e);
          }}
          className={`
            peer w-full ${iconPadding} py-3 border rounded-sm transition-all
            border-neutV-900 text-neutV-700 placeholder-transparent bg-white/20     
                 focus:outline-none focus:bg-limeV-50 focus:border-limeV-700
            hover:bg-limeV-50 hover:border-limeV-900 disabled:bg-neutral-100 disabled:cursor-not-allowed disabled:border-0
            ${error ? "bg-redV-50 border-redV-700 text-redV-700" : ""}
            ${className}
          `}
          placeholder={rest.placeholder ?? " "}
        />
      </div>

      {error && <p className="mt-1 ps-2 text-sm text-redV-700">{error}</p>}
    </div>
  );
});

Input.displayName = "Input";
export default Input;
