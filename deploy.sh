rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git remote add origin git@github.com:JXM-Jason/JV-ui.git &&
git commit -m "Updated" &&
git push -f origin master:gh-pages &&
cd ..