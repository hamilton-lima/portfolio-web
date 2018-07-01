#!/bin/bash

SITENAME="sites/default"

if [[ $# -eq 0 ]] ; then
    echo 'Using default data to build the portfolio website.'
    echo 'Use: build.sh [path to site files]'
else 
    SITENAME=$1
fi

echo Check if node_modules is up to date
NODEMODULE_FILES=$(ls -l ./node_modules | wc -l)

if [[ $NODEMODULE_FILES -eq 0 ]]; then
     npm install
fi

echo Updating index.html
./node_modules/.bin/handlebars $SITENAME/person.json < src/index.hbs > src/index.html

echo Copying favicon.ico from $SITENAME
cp $SITENAME/favicon.ico src/

echo Generating theme.json from $SITENAME/theme.yml
./node_modules/.bin/yaml2json $SITENAME/theme.yml > src/assets/theme.json

echo Generating person.json from $SITENAME/person.yml
./node_modules/.bin/yaml2json $SITENAME/person.yml > src/assets/person.json

echo Generating projects.json from $SITENAME/projects.yml
./node_modules/.bin/yaml2json $SITENAME/projects.yml > src/assets/projects.json

echo Building the Angular web application to dist/portfolio-web
ng build --prod

echo 
./node_modules/.bin/vaca
echo
echo The generated website is saved at the folder /dist/portfolio-web
echo 
echo Have a $(./node_modules/.bin/superb) day.