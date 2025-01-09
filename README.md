# GAC Website

A React based website for the Harvard Graduate Advisory Committee 


## Developer Set Up

You will need to have Node.js installed to use npm. 

1. clone the repo

`git clone https://github.com/iacs-gac/iacs-gac.github.io.git`

2. cd into repo 

`cd iacs-gac.github.io.git`

3. install dependencies

`npm install`

Note: if you get errors here, try downgrading the version of Node.js and/or deleting the package-lock.json

4. run dev server

`npm start`

5. app will be accessable in http://localhost:3000/


## Deployment

Run `npm run deploy`

If deployment is large you may need to run: 

`git config --global http.postBuffer 524288000`