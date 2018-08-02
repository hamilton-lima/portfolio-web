# PortfolioWeb

This project generates an interactive portfolio website based on configuration files.

## Step by step

- clone the project
- copy the files from sites/default to your site folder
- update person.yml with your personal information
- update projects.yml with your projects
- execute ./build.sh <folder with yuor files>
- copy the content of dist/portfolio-web to your hosting

## Tricks and tips

- The build script will download any image that is defined for the avatar and in the projects, feel free to add public url, all the images will be saved to the final package
- keep your avatar image at gravatar.com 
- save temporary images in public google drive, and use the file id to create the public url of the image, https://drive.google.com/uc?id=[id goes here]

Enjoy!
