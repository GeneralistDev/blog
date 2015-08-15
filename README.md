[![Build Status](https://travis-ci.org/rlgod/blog.svg?branch=release)](https://travis-ci.org/rlgod/blog)

# The details
* Single page Angular.js app
* Builds performed by Grunt
* Server script in server.js

# Deployment
* Pushing to origin/release will cause Travis CI to run a build, package and deployment.
* Deployments go to AWS Elastic Beanstalk and then on to EC2 t2.micro instances.
