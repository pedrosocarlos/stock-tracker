export default (async function config() {
  const { default: love } = await import('eslint-config-love')

  return [
    {
      ...love,
      files: ['**/*.js', '**/*.ts'],
    },
    {
		ignores: ["**/temp.js", "config/*", "**/node_modules", "**/dist"],
	  }
  ]
})()
