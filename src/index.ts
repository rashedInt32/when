function when<T, U>(
  condition: boolean | (() => boolean),
  onTrue: T | (() => T),
  onFalse: U | (() => U)
): T | U {
  const evaluate = <V>(value: V | (() => V)): V =>
    typeof value === "function" ? (value as () => V)() : value;
  return evaluate(condition) ? evaluate(onTrue) : evaluate(onFalse);
}
