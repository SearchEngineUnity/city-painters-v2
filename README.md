# TEP

## Links to the deployed frontend and backend

* [Sanity (CMS) Studio]()

## How to install and run the project

### Node/NPM versions

* node v20.11.1

### Install

1. Git clone project
2. Install Lerna `npm install -g lerna@6.6.2` 
3. Install Sanity cli `npm install -g @sanity/cli`
4. Install Gatsby cli `npm install -g gatsby-cli@`
5. Run `npm install` from the root folder of the repo. This should install npms in both packages (studio + web).

### Run Sanity CMS locally

*Even though you can start the studio from the root, we prefer to cd into the folder directly as it provides better terminal logs when things go awry.*

1. `cd packages/studio` from root
2. Log into Sanity account if opening the studio for the first time by typing `sanity login` and follow the prompts
3. Start the Sanity Studio in develop mode with the command `sanity dev`
4. If you have incorrect credential you should logout using `sanity logout` and repeat from step 2
5. Access Sanity development server on `localhost:3333`

### Run Gatsby locally

*Even though you can start Gatsby from the root, we prefer to cd into the folder directly as it provides better terminal logs when things go awry.*

1. `cd packages/web` from root
2. Run `gatsby develop`
3. Access Gatsby development server on `localhost:8000`
4. Access GraphiQL on `localhost:8000/___graphql`
5. View a list of all available pages on `localhost:8000/404`

## Setup Notes

Please use node 18.13.0 and npm 8.19.3.

This is a lerna mono repo, to install for all packages run `npm install` from the root folder. Refer to the **Script Overview** section below for details.

This project is set up with eslint and prettier following Airbnb template + custom rules. The code will be auto linted and fixed precommit (set up via husky + lint-staged). This [ref for precommit linting](https://laurieontech.com/posts/husky/) is used for set up. The difference is that we have used a .lintstagedrc file for the lint-staged configuration instead of putting the instructions directly in the package.json file. The prettier command is not included as it is integrated in to eslint already.

## Scripts Overview

All the common commands can be accessed directly via the root folder via `npm run <script-name>` . We no longer have to access the sub folders to start local servers / deploy / etc. Here are the common commands that we will access.
* [sanity:dev] - starts local sanity dev server
* [sanity:deploy] - deploys Sanity graphql then the studio
* [gatsby:dev] - starts local gatsby dev server
* [gatsby:clean] - remove .cache and public folders in /web
* [clean] - removes all node modules in the individual packages folder (node modules should only exist for root)

**Breaking change for Studio script**
Sanity has repurposed the [start] command. [sanity start] will now start a preview for the static builds. To run a development server from the studio folder, use the [npm run dev] or [sanity dev] command instead.

## Using Lerna^6.6.2

### Clean up node modules

Run `npm run clean` or `lerna clean -y` from the root folder to remove node modules for the packages. The node_modules folder at root level will need to be deleted manually.

### Add NPM dependencies to the project's packages

Use `lerna add a` to install a new dependency to all managed packages. You can scope the add command to individual packages using the `--scope=<package-name>` flag. This will install a given dependency only to `<package-name>`:
```
lerna add a --scope=b

# add package "a" to multiple packages
lerna add a --scope=b --scope=c --scope=d  
```

Here’s a concrete example installing **dotenv** as a dependency to the **@cp/web** package:
```
lerna add dotenv --scope=@cp/web  
```

Run `npm run clean` should you accidentally installed a dependency inside the package itself then rerun `npm install --legacy-peer-deps` from the root folder.

### Lerna Setup Resources

Here are some resources consulted by SC when setting up this project.
* [Publish Multiple Gatsby Sites in a Monorepo, Using Lerna, Travis & Vercel](https://www.gatsbyjs.com/blog/2019-01-01-publish-multiple-gatsby-sites/)
* [Building a JavaScript Monorepo with Lerna](https://javascript.plainenglish.io/javascript-monorepo-with-lerna-5729d6242302)
* [@lerna/bootstrap](https://www.npmjs.com/package/@lerna/bootstrap)
* [Lerna Getting Started](https://lerna.js.org/docs/getting-started)

2. [Document action](https://www.sanity.io/docs/document-actions)

3. [Code for the plugin - Use this code to build our preview instead of installing it directly as this plugin is not Sanity V3 compatible](https://www.npmjs.com/package/%40nwazuo/sanity-plugin-gatsby-cloud-preview?activeTab=explore)
