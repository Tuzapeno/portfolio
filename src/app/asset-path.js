export function assetPath(path) {
  return `${process.env.PORTFOLIO_BASE_PATH || ""}${path}`;
}
