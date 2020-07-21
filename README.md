### This app is hosted on Azure Websites here: http://msa-2020-webapp-tom-g.azurewebsites.net/.

## About
This React web app was developed for the [Microsoft Student Accelerator](https://github.com/NZMSA/2020-Phase-1) Programme. It uses the [WorldTimeAPI](http://worldtimeapi.org/) to provide time and daylight savings time data for cities around the world and the [Material-UI](https://material-ui.com/) library for display components.

## Screenshots
![](https://i.imgur.com/OtEQt1E.png)
![](https://i.imgur.com/BKDmT6P.png)
![](https://i.imgur.com/dVv9hAQ.png)

## Build Process Description
This app is built and hosted on the cloud using Azure DevOps Pipelines. The build pipeline is described in the azure-pipelines.yaml file. It is run when a commit is pushed onto either the develop or master branches of this repo. The app is built by a virtual machine running Ubuntu using NPM and is published as a ZIP file. New releases are deployed to the website by a release pipeline on Azure DevOps. This only accepts new releases on the master branch and releases the app to be viewable by anyone online.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
