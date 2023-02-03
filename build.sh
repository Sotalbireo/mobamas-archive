ls
git clone --depth=1 https://${GITHUB_USER}:${GITHUB_TOKEN}@github.com/${GITHUB_REPOSITORY} data
nuxt build
mkdir -p .vercel/output/functions/index.func
cp -r data .vercel/output/functions/index.func
