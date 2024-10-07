import os

# Specify the directory where the files are located
directory = './'

# Loop through all files in the directory
for filename in os.listdir(directory):
    # Check if '-min' is in the filename
    if '-min' in filename:
        # Create the new filename by removing '-min'
        new_filename = filename.replace('-min', '')
        # Rename the file
        os.rename(os.path.join(directory, filename), os.path.join(directory, new_filename))

print("Renaming complete!")
