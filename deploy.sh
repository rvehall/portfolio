git add .
git commit -m "Deploy"
git push origin master

yarn build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:rvehall/portfolio.git master:gh-pages

cd ..