export function formatNaira(amount) {
  return `₦${Math.round(amount).toLocaleString('en-NG')}`
}
