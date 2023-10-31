# Step 1: Navigate to the Jekyll site and build it
# cd /path/to/second-website # not necessary if run inside root folder
bundle exec jekyll build
if [ $? -ne 0 ]; then
  echo "Jekyll build failed."
  exit 1
fi

# Step 2: Copy the '_site' directory to the target folder in the first website's repository
cp -r _site/* /Users/jack/Documents/website/jackrieger.com/teaching/core-1-interaction
if [ $? -ne 0 ]; then
  echo "Copy operation failed."
  exit 1
fi

# Step 3: Navigate to the main repository, commit, and push the changes
cd /Users/jack/Documents/website/jackrieger.com/teaching/core-1-interaction
if [ $? -ne 0 ]; then
  echo "Navigation to main repository failed."
  exit 1
fi

git add .
if [ $? -ne 0 ]; then
  echo "Git add operation failed."
  exit 1
fi

# Prompt for commit message
read -p "Enter commit message: " commitMessage

git commit -m "$commitMessage"
if [ $? -ne 0 ]; then
  echo "Git commit failed."
  exit 1
fi

git push
if [ $? -ne 0 ]; then
  echo "Git push failed."
  exit 1
fi

echo "Deployment complete!"

# Make the script executable:
# Open a terminal and navigate to the directory where this file is saved.
# Run the following command to make the script executable:
# chmod +x deploy.sh

# Run the script:
# Once the script is executable, you can run it using:
# ./deploy.sh
