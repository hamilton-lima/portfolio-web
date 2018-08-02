# PortfolioWeb

This project generates an interactive portfolio website based on configuration files.

See here one example: https://hamilton-lima.github.io/portfolio-web/

![screenshot](https://github.com/hamilton-lima/portfolio-web/raw/master/src/images/screenshot.png "Screenshot")

## Step by step

- clone the project
- copy the files from sites/default to your site folder
- update person.yml with your personal information
- if you are publishing the site as a github page make sure to update the basehref with the project name, see sites/default for example
- update projects.yml with your projects
- execute ./build.sh <folder with your files>
- copy the content of dist/portfolio-web to your hosting

## Tricks and tips

- The build script will download any image that is defined for the avatar and in the projects, feel free to add public url, all the images will be saved to the final package
- keep your avatar image at gravatar.com 
- save temporary images in public google drive, and use the file id to create the public url of the image, https://drive.google.com/uc?id=[id goes here]

```


                 (__)
                 (oo)
                  \/
                  ||
                  ||
                  ||
                  ||
          /------- /
         / |     ||
        *  ||----||
           ^^    ^^
           Cowraffe


The generated website is saved at the folder /dist/portfolio-web

Have a dandy day.
```

