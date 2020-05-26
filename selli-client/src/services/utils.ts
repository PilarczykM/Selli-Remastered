export const checkIfNotEmpty = <T>(args: T[]) => {
  args.forEach((arg) => {
    if (arg == null) {
      return false
    } else if (typeof arg === 'undefined') {
      return false
    }
  })
  return true
}
