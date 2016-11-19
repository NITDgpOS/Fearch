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

##Commit message

firefox-search-extention is in its very early development stage, you can go over the issues on the github issues page and send in a PR.

Your commits in the PR should be of the form:

```
shortlog: commit message

commit body

Fixes #21
```

1. **shortlog** is the area/filename where you make the change. Example **popup.js**: Added warning messages

2. **commit message** is a very brief description of the change made by you.

 Use the **imperative mood** in the commit message. Imperative mood just means "spoken or written as if giving a command or instruction". A few examples:
   
 - Add CONTRIBUTING.MD *instead* of Adding CONTRIBUTING.md
 - Change the header text format *instead* of Changing the header text format
 - Fix text box scaling *instead* of Fixing the text box scaling
 
 Also never use a full stop towards the end of the commit message.

3. **commit body** contains all the additional or extra details about the commit.

 The **commit body need not have imperative mood** you have independence to explain everything normally  
 there. Also here you are free to use all punctuations, also a full stop towards the end.

4. The **Fixes #< issue_no >**  is the issue you are working on.

Happy coding :)

