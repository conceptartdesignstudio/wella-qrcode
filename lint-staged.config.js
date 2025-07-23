const hooks = {
  '**/*.{js,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '**/*.{json,md,css,scss}': ['prettier --write'],
  '!src/assets/**/*': 'prettier --ignore-unknown'
}

export default hooks
