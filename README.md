# Installation

> This installation guide is based on the steps required for an
> OSX-powered machine with latest updates installed and in clean
> configuration. You may require more or different steps if you are
> using any other operating system.

### Downloading The Source Code

You can either download or clone the repository via *Github*. If you have `git` CLI already installed, you just need to navigate to your projects' directory and simply execute the following command in your command-line:

`git clone git@github.com:ebi-uniprot/react-seed.git`

This should create a directory named `react-seed` in the current directory -- you can check the current working directory by typing `pwd` in the command-line and pressing return/enter key. 

If you have already created a directory or prefer a different name, first navigate inside the desired directory and then run the following command instead of the one mentioned above. This should clone the repository inside your current directory -- without creating a sub-directory:

`git clone git@github.com:ebi-uniprot/react-seed.git .`

### Installing JavaScript Dependencies

Now that you have the source code on your local machine, you would need to follow a few steps in order to get it running. Starting with JavaScript dependencies; Our preferred package manager is `yarn`, however, you may use `NPM` or others in your discretion.

> You would need to have a recent version of *Node.JS*, as well as 
> a package manager e.g. *Yarn* or *NPM*, installed before you can continue.

To install JavaScript dependencies, first make sure you are in the root directory of your `react-seed` project -- this directory should contain a file named `package.json`, then type `yarn` in the command-line and press return. This should download and install the required JavaScript packages -- this may take a few minutes to finish. 

> If the installation was unsuccessful due to any permission/access
> denied related errors -- especially if you are using `NPM`, check your
> package manager's online documentation. [This page](https://docs.npmjs.com/getting-started/fixing-npm-permissions) explains the 
> problem and solution for `NPM` users.






# Usage

Run `yarn run dev-server` and go to [http://localhost:8080](http://localhost:8080) if it didn't open automatically.