#!/bin/bash
echo 'what is your name?'
read name
echo 'Hi' $name

#first we download package.json to set up the npm
npm init

#download node packages
npm install babel-cli -D #downloads node pakcage with babel command lines
npm install babel-preset-env -D #downloads node package that maps es6+ to es5

echo '{"presets": ["env"] }' >> .babelrc
