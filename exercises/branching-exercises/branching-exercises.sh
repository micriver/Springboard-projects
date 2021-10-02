
# Branching Exercise
# Part I
# Answer the following questions:
# What git command creates a branch?
# git checkout -b NAME_OF_BRANCH

# What is the difference between a fast-forward and recursive merge?
# A fast forward merge happens when git can chronologically merge commits. A recursive merge is a different algorithm combining commits happening at different times from different branches

# What git command changes to another branch?
# git checkout NAME_OF_BRANCH

# What git command deletes a branch?
# git checkout -d NAME_OF_BRANCH
# git checkout -D NAME_OF_BRANCH

# How do merge conflicts happen?
# When branches with conflicting code are merged onto another branch.

# Part II
# Practice with fast forward and recursive merges! Make a branch and add and commit onto it and merge it back into master.
# Try to create your own merge conflict by modifying the same file on two separate commits on two separate branches.
# Create a folder called branch_time.
mkdir branch_merge_test
# cd into that folder.
cd branch_merge_test
# Initialize an empty git repository.
git init
# Create a file called first.txt, then add and commit the file.
touch first.txt && git add first.txt && git commit -m "adding and committing first.txt"
# add text to first.txt
echo "hello!" > first.txt
# Create a new branch called amazing_feature.
git checkout -b amazing_feature
# modify first.txt so it has conflicting changes with master
echo "something" > second.txt
# Add and commit the file to this new branch.
git add second.txt && git commit -m "adding and committing original second.txt"
# Switch back to the main branch.
git checkout master # main does work on my box, I may have to update git
# make a new second.txt so it has conflicting changes with amazing_feature's second.txt file
echo "something ELSE" > second.txt
# Add and commit those changes to master
git add second.txt && git commit -m "adding and committing changed second.txt"
# Merge your changes from the feature branch into main.
git merge amazing_feature
