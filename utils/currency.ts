export const formatCurrency = (
  amount: number,
  currency?: string,
  fractionDigits?: number,
  style?: "currency" | "decimal"
) => {
  return new Intl.NumberFormat("id-ID", {
    style: style ?? "currency",
    currency: currency ?? "IDR",
    minimumFractionDigits: fractionDigits ?? 0,
    maximumFractionDigits: fractionDigits ?? 0,
  }).format(amount)
}
