# Part I
# Let’s start by taking a bit of time to practice the git workflow below. It is so valuable to just practice this workflow a couple times, since you will most likely doing it professionally as well as in your individual projects and open source contributions. Here are some things to do.
# 
# Create a local repository and add and commit some files
mkdir github-test-repo 
cd github-test-repo
touch one.txt two.txt three.txt
git init
git remote add origin https://github.com/micriver/github-exercise.git
git add .
git commit -m "first push, adding .txt files"
# Create a remote repository and push your code from the local repo to the remote
git push -u origin master #
# Create a local branch and add and commit some files
git checkout -b new_branch
touch four.txt
git add .
git commit -m "second push, adding four.txt"
# Push that local branch to GitHub to create a remote branch
git push origin new_branch
git log
# Part II - Put your memory game on GitHub pages
# Using GitHub pages, deploy your memory game from the previous unit so that you can share them with anyone!
# Click this link! ---->  https://mikerivera.dev/sb-memory-game/