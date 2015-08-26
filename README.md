# AngularJS opinionated startup project

## Prerequsites

* NodeJS

Install prerequisites

```
npm install -g grunt-cli yo bower
npm install -g generator-cg-angular
```

If you're on OSX:

```
sudo npm install -g grunt-cli yo bower
sudo npm install -g generator-cg-angular
```


## Setup

* 1. Clone this repository
* 2. Enter the cloned directory ```cd angular-opinionated-startup```
* 3. Install npm packages
```javascript
npm install
npm install grunt-ng-annotate --save-dev
```
For OSX
```
sudo npm install
sudo npm install grunt-ng-annotate --save-dev
```
* 4. Install bower components
```
bower install
```

## Development

To serve the application to a local server run:
```
grunt serve
```

Open the browser and navigate to http://localhost:9001/

## Deployment
```
grunt build
```

The final compiled result is in ./dist folder


