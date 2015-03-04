# Eloquent YWeb

A companion workbook for [_Eloquent JavaScript, Second Edition_ by Marijn Haverbeke](http://eloquentjavascript.net/), designed for the [YWeb Career Academy](http://ywebca.org) (whose [living curriculum can be found here](https://github.com/adorableio/YWebCA/wiki)).

This workbook is a true-to-industry environment chock full of exercises to drill beginning JavaScript and practice using common build tools, versioning and source control, and automated testing.

**Table of Contents:**

1. [Installation](#installation)
2. [Your First Pull Request](#your-first-pull-request) (and all future submissions)
3. [How to Complete Your Workbook](#how-to-complete-your-workbook)

## Installation

### Install Homebrew

Homebrew is a command-line package manager for OS X, which means it is a tool that helps you find, install, and update other tools that were not installed on your system when it came out of the factory. ([Go here](http://brew.sh/) if you'd like to learn more about Homebrew.)

Copy and paste this into the terminal:

    ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

Type this to verify your installation:

    brew -v

You should get something like this:

    Homebrew 0.9.5

### Install and Configure Git and GitHub

#### Install Git

Git is the most popular versioning and source control software currently in use. It allows you to keep past working versions of your code safe from experimentation, and it allows multiple developers to work on the same code base without interfering with each other.

See if you have Git installed by typing

    git --version

If you get something like

    git version 2.x.x

go on to the next step. Otherwise, use Homebrew to install Git with

    brew install git

Now check your version again to verify your install.

#### Configure Git

If you already have a GitHub account for whatever reason, be absolutely certain which email address it uses, because you must use the same email address here. Either way, remember the email you use.

Type the following, substituting your actual name and email address. You must use the quotation marks if spaces are involved.

    git config --global user.name "Your Actual Name"
    git config --global user.email "Your Actual Email"

You can check your configuration by typing

    git config --list

If you like, you can make your Git output colorful with

    git config --global color.ui auto

#### Generate an SSH Key

If you already have an SSH key for some reason, check by typing

    ls ~/.ssh/id_rsa

and you'll see something like

    /Users/YourName/.ssh/id_rsa

which means you're done with this step (move on to the GitHub section). If you get a `No such file or directory` message, you'll have to generate a new key.

Again, be absolutely certain you use the same email address for configuring Git, and type the following, substituting your actual email address:

    ssh-keygen -C student@example.com -t rsa

Press enter to accept the default key save location.

Hit enter to accept blank passphrase, then hit enter again.

You should get some output like this:

    Generating public/private rsa key pair.
    Enter file in which to save the key (/Users/student/.ssh/id_rsa):
    Created directory '/Users/student/.ssh'.
    Enter passphrase (empty for no passphrase):
    Enter same passphrase again:
    Your identification has been saved in /Users/student/.ssh/id_rsa.
    Your public key has been saved in /Users/student/.ssh/id_rsa.pub.
    The key fingerprint is:
    88:54:ab:77:fe:5c:c3:7s:14:37:28:8c:1d:ef:2a:8d student@example.com

Finally, we'll add the key to the authentication agent with

    ssh-add ~/.ssh/id_rsa

You should get some output like this:

    Enter passphrase for /Users/student/.ssh/id_rsa:
    Identity added: /Users/student/.ssh/id_rsa (/Users/student/.ssh/id_rsa)"

#### GitHub

Originally Git was invented to help developers work on the Linux kernel, and code was distributed peer-to-peer. It was so loved that GitHub was created: a web-based Git repository hosting service that added many new features such as visualization tools, social networking, wikis, and more.

If you don't already have a GitHub account, go to http://github.com and register for one. Remember to use that same email address!

To add your SSH key to your GitHub account, first copy it to the clipboard with

    pbcopy < ~/.ssh/id_rsa.pub

Navigate to http://github.com and make sure you are logged in. Click the black gear icon in the top right corner. This will take you to the account settings page.

On the account setting page, select **SSH Keys** from the column on the left.

If you've installed *GitHub for Mac* already, you should see your key here, in which case you're done with this step.

If you don't see a key assigned to your computer, click the button that says **Add SSH Key**. In the title field give a name for your key that makes sense, such as your computer's name. In the key field, paste the key you copied.

Click **Add Key**.

Confirm the action by providing your GitHub password.

### Install Node.js

Node is an open-source, cross-platform runtime environment for server-side applications. Node apps are written in JavaScript (even though JS was ostensibly developed for front-end scripts). Node also comes with a REPL (read-eval-print loop) and can be used to run scripts on the command line (so all calls to `console.log()` print to the terminal).

Use Homebrew to install Node with

    brew install node

Verify your installation with

    node --version

You should expect some output like this:

    v0.10.35

You can play around with Node REPL by typing

    node

It will give you a prompt (`>`) that you can use like a JS console. Quit the REPL by pressing `^c` (Control+C) twice.

### Fork the Workbook

The workbook lives in&mdash;or, actually *is* this very repository on GitHub. You need your own, local copy to work on, so you'll have to fork it and then clone it.

Navigate to [the workbook at https://github.com/YWebCA/EloquentYweb](https://github.com/YWebCA/EloquentYweb). At the top-right of the page, click the **Fork** button. If asked what account to fork it under, select your personal account.

Your browser will be moved to your fork of the repo on GitHub (if not, go there now. The URL should be in the form of https://github.com/YourName/EloquentYWeb). The following steps will then make a local clone of your fork. In the right column, change the clone URL to SSH and then click the clipboard button.

In the terminal type the following:

    mkdir ~/git
    cd ~/git

Then type `git clone ` and paste the SSH clone URL. Your full command should look something like this:

    git clone git@github.com:YourName/EloquentYWeb.git

When it's done, change into your repo's directory:

    cd EloquentYWeb/

Normally forks are meant to diverge from the original repo such that if changes are made to the original, they won't affect your fork. However, for this workbook you want to make sure to receive changes made to the "mothership," so you have to tell Git to listen for them. Type

    git remote add upstream git@github.com:YWebCA/EloquentYWeb.git

Verify your list of your remote addresses with

    git remote -v

You should get something like this:

    YWebCA    git@github.com:YWebCA/EloquentYWeb.git (fetch)
    YWebCA    git@github.com:YWebCA/EloquentYWeb.git (push)
    origin    git@github.com:YourName/EloquentYWeb.git (fetch)
    origin    git@github.com:YourName/EloquentYWeb.git (push)
    upstream  git@github.com:YWebCA/EloquentYWeb.git (fetch)
    upstream  git@github.com:YWebCA/EloquentYWeb.git (push)

The remote origin is your fork, and the remote upstream is the "mothership." Because the YWebCA organization owns the EloquentYWeb repo, YWebCA will show up as a remote if you are a member of the organization.

### Bower Components

The workbook includes a lot of other useful components that were, themselves, installed by Bower, a package manager for front-end libraries and frameworks. Because they're already included, you don't need to install Bower, yourself, although you may want to in the future.

Here are the included packages:

* **Jasmine**: A JavaScript testing framework. The workbook uses it to check your work and to help you troubleshoot problems.

* **JSHint**: A JavaScript linter, which checks that code follows validity and stylistic rules. It's a good way to catch (some) errors before scripts are actually run.

* **JQuery**: A framework that drastically simplifies DOM querying and manipulation with JavaScript. In addition to being useful on its own, many other components require it.

* **Underscore.js**: A JavaScript library that provides utility functions for common programming tasks.

* **Bootstrap**: A framework created by Twitter that gives access to a large library of visual components, including responsive grids, interactive widgets, and a comprehensive theme.

* **Font Awesome**: A library of common, easy-to-use icons.

### Install Dependencies

Type this into the terminal:

    npm install

`npm` is short for Node Package Manager, another package management tool that searches, installs, and updates modules just for Node.js. `npm install` reads the `package.json` file in the repo and installs all the things the package file says it needs. In addition to Bower and Grunt, useful build tools, it installs FactoryB, a tool that helps you generate dummy data to test on (elsewhere known as "fixtures").

### Hosting EloquentYWeb from Your Computer

Some of the exercises and test for EloquentYWeb require for the worksheets to be hosted as a website. We will need to download an easy to use app to do this for us.

 1. Go [here](http://anvilformac.com) and hit the download link.
 2. Once you have downloaded the app move it to your Applications directory and run it.
 3. I small anvil shaped icon will appear in your status bar. Click it.
 4. A button saying that you need to install pow will pop up below the icon. Click that and wait for the install.
 5. Once Pow is installed the popup dialog under the anvil will have a button to add a a site. Click it.
 6. Browser to and then select the EloquentYWeb directory.
 7. You can got to you EloquentYWeb site anytime Anvil is running by clicking on it in Anvil or going to [eloquentyweb.dev](http://eloquentyweb.dev).

## Your First Pull Request

First, it's vitally important to keep both your fork and your local clone of your fork updated:

    git checkout master
    git pull --rebase upstream master

This changes to your master branch, unwinds any of your commits, plays the upstream changes, and then replays your commits.

See your current branches with

    git branch

Next, start a new branch with

    git checkout -b first-pr

(If you omit the `-b`, you can checkout a pre-existing branch.)

Do your work in this new branch (not on master). Open the `README.md` file in your text editor. At the very bottom of the file, make a few blank lines and then

    # This Fork Belongs To...

and then put your name. Save the file.

You can see your modifications by typing this in the terminal:

    git status

Unstaged changes are in red, which means that they won't be part of your commit. Stage all modified files with

    git add --all

Try `git status` again to see that your modified files have been staged (in green). Now you're ready to commit.

    git commit -m "Write a commit message"

Commit messages should be quite short.

In general, remember to make commits when you have finished a bite-sized problem. The goal is to move from working state, to working state&mdash;do not commit while your code is broken. Do not make huge commits.

Make sure your last commit is the way you want it with

    git show

When you're done with your branch, merge it into your local master and push all your changes to your remote origin (your fork of EloquentYWeb out on GitHub):

    git checkout master
    git merge first-pr
    git push origin master

When you're ready to submit your pull request, go to your workbook fork on GitHub and submit a pull request (click that green button). Then use the following options:

> Base fork: YWebCA/EloquentYWeb

> Base: YourGitHubUserName

> Head fork: YourGitHubUserName/EloquentYWeb

> Compare: master

This will merge your remote origin (your current, theoretically unbroken fork) into your personal branch on the upstream repo.

Write a meaningful message and leave any comments if necessary. Then submit the pull request. Your PR will be reviewed by an instructor or volunteer and merged if accepted. If your PR is not accepted, it will be closed and you can submit another one after correcting your work.

Any time you work on some homework and turn it in, do it this way!

## How to Complete Your Workbook

For each chapter...

1. Create and/or check out a branch that corresponds to the chapter.

2. Open `index.html` in your browser and read the instructions for the exercises.

3. Open `spec.html` in your browser and see how all the tests are currently failing. Your task is to make them all pass.

4. Open `exercises.js` in your text editor. All your JavaScript will go in here. It should have some functions skeletoned out for you so the tests run properly.

    1. If the exercises include DOM manipulation, use the `exercises.html` file as your HTML workspace.

5. As you complete the exercises, save your work and refresh `spec.html` to watch your tests start passing!

    1. If you're having trouble figuring out what the tests want, open `spec.js` in a text editor and take a look. (Do not edit the tests&mdash;that is super cheating and we will notice.)


    # This Fork Belongs To Erica
