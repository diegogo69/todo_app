# Deploying project to github pages

##  Make new branch to deploy 

`git branch gh-pages`


##  Change branch and sync your changes from main  

`git checkout gh-pages && git merge main --no-edit`


##  Bundle application into dist 

`npm run build`


##  Run each of these in order: 

`git add dist -f && git commit -m "Deployment commit" `   

`git subtree push --prefix dist origin gh-pages `  

`git checkout main`


