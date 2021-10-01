# Git merge excercise
# Your Turn
# Practice makes perfect. Walk through the following steps to get more experience with the branching and merging workflow.

# *** run the command "chmod +rx git-merge-exercise.sh" so that you have permissions to run the script ***

# Create a folder called branch_time.
mkdir branch_time
# cd into that folder.
cd branch_time
# Initialize an empty git repository.
git init
# Create a file called first.txt, then add and commit the file.
touch first.txt && git add first.txt && git commit -m "adding and committing first.txt"
# Create a new branch called amazing_feature.
git checkout -b amazing_feature
# Create a file called best.txt.
touch best.txt
# Add the file.
git add best.txt
# Commit the file with the message -m “added best.txt”.
git commit -m "added best.txt"
# Switch back to the main branch.
git checkout master # main does work on my box, I may have to update git
# Merge your changes from the feature branch into main.
git merge amazing_feature
# Delete the feature branch.
git branch -d amazing_feature