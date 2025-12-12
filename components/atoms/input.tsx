import * as React from "react"
import { cn } from "@/utils/classname"
import { formatCurrency } from "@/utils/currency"

interface InputProps extends React.ComponentProps<"input"> {
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  variant?: "default" | "currency" | "number"
  currency?: string
  fractionDigits?: number
  styleCurrency?: "currency" | "decimal"
  allowMinusValue?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = "text",
      startIcon,
      endIcon,
      rightIcon,
      variant = "default",
      currency = "IDR",
      fractionDigits = 0,
      value,
      onChange,
      styleCurrency = "currency",
      allowMinusValue = false,
      ...props
    },
    ref
  ) => {
    const [displayValue, setDisplayValue] = React.useState<string>("")

    React.useEffect(() => {
      if (variant === "currency") {
        if (typeof value === "number") {
          setDisplayValue(
            formatCurrency(value, currency, fractionDigits, styleCurrency)
          )
        } else if (typeof value === "string") {
          const raw = Number(value.replace(/\D/g, ""))
          setDisplayValue(
            formatCurrency(raw, currency, fractionDigits, styleCurrency)
          )
        }
      } else if (variant === "number") {
        setDisplayValue(value?.toString() || "")
      }
    }, [value, variant, currency, fractionDigits, styleCurrency])

    const handleCurrencyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const rawValue = e.target.value.replace(/\D/g, "")
      const numericValue = Number(rawValue)

      if (onChange) {
        onChange({
          ...e,
          target: {
            ...e.target,
            value: numericValue.toString(),
          },
        })
      }
    }

    const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const rawValue = e.target.value

      const numericValue = allowMinusValue
        ? Number(rawValue)
        : Math.max(0, Number(rawValue))

      if (onChange) {
        onChange({
          ...e,
          target: {
            ...e.target,
            value: numericValue.toString(),
          },
        })
      }
    }

    return (
      <div className="relative">
        {startIcon && (
          <div className="absolute top-1/2 left-2.5 -translate-y-1/2">
            {startIcon}
          </div>
        )}
        {rightIcon && (
          <div className="text-muted-foreground absolute top-1/2 left-2.5 -translate-y-1/2">
            {rightIcon}
          </div>
        )}
        {endIcon && (
          <div className="absolute top-1/2 right-2.5 -translate-y-1/2">
            {endIcon}
          </div>
        )}
        <input
          ref={ref}
          type={type}
          data-slot="input"
          hidden={type === "file"}
          inputMode={variant === "currency" ? "numeric" : undefined}
          className={cn(
            "text-primary-foreground border-secondary h-10 w-full rounded-full border p-2.5 text-sm",
            "focus:outline-0",
            (startIcon || rightIcon) && "pl-10",
            endIcon && "pr-10",
            className
          )}
          value={
            variant === "currency"
              ? displayValue
              : variant === "number"
              ? displayValue
              : (value as string)
          }
          onChange={
            variant === "currency"
              ? handleCurrencyChange
              : variant === "number"
              ? handleNumberChange
              : onChange
          }
          {...props}
        />
      </div>
    )
  }
)

Input.displayName = "Input"

export { Input }
