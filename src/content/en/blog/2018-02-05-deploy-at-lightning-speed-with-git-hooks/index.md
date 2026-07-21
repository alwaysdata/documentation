---
title: "Deploy at lightning speed with Git hooks"
description: "Deploy with Git"
date: 2018-02-05
authors: ["Matthias Dugué"]
---

Many protocols are available at *alwaysdata* for accessing your accounts remotely: SSH, FTP, WebDAV, etc. However, it seems that deploying an app in production suffers from a lack of flexibility. So, we decided to take care of that.

![](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExemtrNnl1anc5Y3h5Y2FjaTByc3ZnZWhtZWdocnE4Y2gxYTU4bmhmbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT9IgFlWsUMDFzVIu4/giphy.gif)

## Please, *alwaysdata*, tell us about deployment again!

Some things are simpler than others for a developer. Unfortunately, deployment isn't one of those simple things, being stuck between legacy FTP delivery, file copy over SFTP, patch release remotely, etc. Each project has its constraints and choices.

Solutions like [Heroku](https://www.heroku.com/) learned early on that the one who produces the code shouldn't have to take care of the deployment processes. The one producing the code just has to stay focused on their job: producing good code. However, not everybody has a DevOp available to release the last production build. In this situation, you only have the option of doing it yourself.

Because *alwaysdata* is designed by developers, we took some time to brainstorm about the best way to deploy in production. We've got some ideas for an integrated tool that will allow you to deploy automatically, but our priority goes to other technologies like **HTTP/2**.

So, we want to give you a solution that makes your life easier. Like you, we prefer to deliver our code in one single command in our terminal. So, we took a look at how to deploy using *Git*.

## Git `push`. Period.

![](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWJ0b3hlOXFnNGVybnE5cjBtbWswajQ5cDVrY2N1YWVybGd4bGY2cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5VKbvrjxpVJCM/giphy.gif)

Here is our proposal, which is based on another solution that uses containers: Simply `git push` your production branch, and it's done.

*TL;DR*: If you want to understand how it works (because you're curious), continue reading. If you just want to use it, you can go to our GitHub repository [alwaysdata/autodeploy-git-hook](https://github.com/alwaysdata/autodeploy-git-hook) where a short *README* will guide you through the configuration process.

Let's dive in. You will need:

- a **SSH** access to set it
- your codebase versioned using **Git**
- known *git-hooks* principles (but we will explain them later)
- ~~eggs, flour, milk~~

### On the Server-side

Let's begin by creating a repository in your *alwaysdata* account (feel free to adapt paths; nothing here is mandatory):

```shell
$ ssh my-account@ssh-my-account.alwaysdata.net
$ git init --bare ~/my-project.git
```

We create it *bare* flavor. This means it will contain only the *config* and *versioning* parts. We don't need more here for deployment.

Then, we will create a script for the `post-receive` hook. Like its name suggests, it will handle the `push` action to the repository and will be executed right after by taking a reference to the pushed branch. We will use it to test the branch (namely a `production` branch) and deploy its content to a directory that contains the codebase served by our Apache instance. On your server, create a file named `~/my-project.git/hooks/post-receive` with the following content:

```shell
#!/bin/bash
while read oldrev newrev ref
do
    if [[ $ref = refs/heads/production ]];
    then
        echo "Deploying 'production' branch to production"
        git --work-tree=$HOME/www/my-project --git-dir=$(dirname $PWD) checkout --force production
        exit 0
    fi
done
```

We need to test whether the pushed branch is the `production` one and then *checkout* its content to the `~/www/my-project` directory (the path you defined in your cockpit's website settings section), which contains the codebase served by your HTTP server.

Don't forget to make the script executable with `chmod +x ~/my-project.git/hooks/post-receive`.

### On the Local-side

Back to your local repository in your development device. Go to your project directory, and add the *alwaysdata* deploy repository:

```shell
$ cd my-project
$ git remote add deploy my-account@ssh-my-account.alwaysdata.net:~/my-project.git
```

It's done! You now just need to push your `production` branch to the `deploy` remote, and deployment will be finished:

```shell
$ git push deploy production
Counting objects: 3, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 291 bytes | 291.00 KiB/s, done.
Total 3 (delta 1), reused 0 (delta 0)
remote: Deploying 'production' branch to production
remote: Already on 'production'
To my-account@ssh-my-account.alwaysdata.net:~/my-project.git
   39949b8..86bd6c7  production -> production
```

On your `production` branch, you just have to *merge* the version that you want to deploy, and *push* it to the `deploy` remote. That's all.

## Cool, but I don't only deploy static files

You're right. We just take a simple use-case, and we know that you often need to do more things when deploying.

You probably want to restart your Apache instance to take changes into account. For this use-case, simply add this instruction to the `post-receive` script, just after the `git checkout` branch:

```shell
curl --basic --user "API_KEY account=ACCOUNT:" --data '' --request POST https://api.alwaysdata.com/v1/site/SITE_ID/restart/
```

It performs a cURL request that will call the *alwaysdata* API, using your *API key*, your *account name*, and the *site ID* you want to perform an action on; it also restarts the instance transparently.

Here again, nothing more to do than pushing your `production` branch.

## More!

![](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmU4NHRkdmd3Nnl6OG81eDVwaGV2MGZpdDQ1dTJ6cjB2MG9rMHNzaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0Exdm9UbTHAFcJi0/giphy.gif)

Want more? Alright!

You probably need more things to automate your whole release process. So we open-sourced the code for this hook to the [alwaysdata/autodeploy-git-hook](https://github.com/alwaysdata/autodeploy-git-hook) GitHub repository. The script is configurable using shell variables at the top of the file. You just have to make small changes to adapt it to your workflow.

We are aware that this script is far from being complete. You probably have some migrations to do on your databases or some static files generation to perform when you update your app. Give us some feedback at **[issues](https://github.com/alwaysdata/autodeploy-git-hook/issues)** or submit [pull-requests](https://github.com/alwaysdata/autodeploy-git-hook/pulls) so we can improve it together.

![](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDBwOGJvZ3NvbGVsNDB0ODA2d2k4MGI4eWN1azUxdG13MTRyd2JyZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0ErK5H6exTmBN7ri/giphy.gif)
