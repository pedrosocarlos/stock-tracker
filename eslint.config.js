export default (async function config() {
  const { default: love } = await import('eslint-config-love')

  return [
    {
      ...love,
      files: ['**/*.js', '**/*.ts'],
    },
    {
		ignores: ["**/temp.js", "config/*", "**/node_modules", "**/dist"],
	  },{
    rules: {
      "no-unreachable": "off",
      "no-console": "off",
      "@typescript-eslint/prefer-destructuring": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/class-methods-use-this": "off",
      "@typescript-eslint/no-magic-numbers": "off",
      "@typescript-eslint/no-unsafe-return": "off"
    }}
  ]
})()
