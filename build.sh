#!/bin/bash

SITENAME="sites/default"

if [[ $# -eq 0 ]] ; then
    echo 'Using default data to build the portfolio website.'
    echo 'Use: build.sh [path to site files]'
else 
    SITENAME=$1
fi

echo Copying files from $SITENAME

set -e
set -o xtrace
cp $SITENAME/favicon.ico src/
cp $SITENAME/theme.json src/assets
cp $SITENAME/person.json src/assets
cp $SITENAME/projects.json src/assets

ng build --prod

echo 'The generated website is saved at the folder /dist'
