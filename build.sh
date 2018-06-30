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
echo files=$NODEMODULE_FILES

if [[ $NODEMODULE_FILES -eq 0 ]]; then
     npm install
fi

echo Updating index.html
./node_modules/.bin/handlebars $SITENAME/person.json < src/index.hbs > src/index.html

echo Copying files from $SITENAME

set -e
set -o xtrace
cp $SITENAME/favicon.ico src/
cp $SITENAME/theme.json src/assets
cp $SITENAME/person.json src/assets
cp $SITENAME/projects.json src/assets

ng build --prod

echo 'The generated website is saved at the folder /dist'
