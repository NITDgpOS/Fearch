##Getting started

In order to contribute to the firefox version do the following :

Firstly you need to fork the repository to get your own copy

Secondly you need to clone the firefox branch, this can be done as follows:

```
git clone -b firefox repo-url

```

Now you are all set to hack the code


##Updating the codebase

All the code for the popup panel is located in data/panel.html

To run the extension after changing code use:

```
jpm run

```
This is the jpm command to run a new instance of Firefox with your add-on installed.

If Firefox can not be located or you have installed Firefox Developer as an alternate browser, you may need to provide the path to it (example in Ubuntu):

```
jpm run -b /usr/bin/firefox

```
To know about add-on development in details do visit [MDN Add-on SDK](https://developer.mozilla.org/en-US/Add-ons/SDK)

firefox-search-extention is in its very early development stage, you can go over the issues on the 
github issues page and send in a PR.

Note: The PR should should be sent to the firefox branch and not the master branch.

your commits in the PR should be of the form:

```
shortlog: commit message

commit body
```

where short log is the area/filename where you make the change
commit message is the very brief description of the change made by you and any
other additional details go into the commit body.

Happy coding :)
