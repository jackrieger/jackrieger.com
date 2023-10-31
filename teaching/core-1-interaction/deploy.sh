# Step 1: Navigate to the second repository (Jekyll site) and build it
cd /path/to/second-website
jekyll build

# Step 2: Copy the '_site' directory to the target folder in the first website's repository
cp -r _site/* /path/to/first-website/target-folder/

# Step 3: Navigate to the first repository, commit, and push the changes
cd /path/to/first-website
git add .
git commit -m "Updated Jekyll site content."
git push

echo "Deployment complete!"

# Make the script executable:
# Open a terminal and navigate to the directory where this file is saved.
# Run the following command to make the script executable:
# chmod +x deploy.sh

# Run the script:
# Once the script is executable, you can run it using:
# ./deploy.sh
