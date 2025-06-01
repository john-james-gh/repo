export async function myLib(): Promise<string> {
  // async/await always uses __awaiter (from tslib) instead of inlining it,
  // if you have `"importHelpers": true` in tsconfig.
  const result = await Promise.resolve("my-lib")
  return result
}
