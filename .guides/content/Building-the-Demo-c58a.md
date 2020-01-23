----------

## Building the Demo

Instruction through Codio is built around the guides feature. This is a brief description on how the demo on the previous page was built. Please see the [documentation](https://codio.com/docs/content/authoring/) for more information about content authoring with guides.

Take a look "under the hood" of this demo by navigating to "Tools > Guide > Edit" on the top tool bar.

![.guides/img/editGuide](.guides/img/editGuide.png)


### Page Layout
Each page in the guide can have its own layout. You can select how many panels you want, and what information goes in each panel. The most common layout is a two panels without the tree. The guide is in one panel and the code editor is in the other. Click the gear in the top-right corner of Codio. You can select the layout from here. The default layout is copy the previous page, and Codio does not close any open tabs.

![Layout](.guides/img/layout.png)

It is a good idea to explicitly state the layout you want. Closing tabs from previous pages also keeps the UI free from unnecessary clutter.

### Code Editor
To use the code editor, add a programming file to your project. Right-click on the name of your project or book in the directory tree on the left. Select `New File...` and then type its name and file extension.

The next step is to load this file into a panel of your layout. Click on the gear icon again, and click on the `Open Tabs` button. You can click the button and type the file's path to add a new file to the layout. Or, you drag the file from the directory tree onto the page.

This file will open with the guide. The file will remain opened until the student closes the tab. This is why it is a good idea to tell Codio to close any previously opened tabs when selecting the layout.

### Terminal/Command Line
You can open a terminal for students automatically, and even pre-populate what commands you would like to be run upon open.

In this example, to prevent the user from having to type it, we pre-populated the `mysql` command so they start in the querying environment.

### SQL Databases and Tables
You can easily template querying environments with pre-populated tables using Codio's "Stack" feature. This means as you write the assignment, you can setup the data as you normally would, and simply mark "Stack Modified" when you publish since the data lives outside of the workspace directory.

Alternatively, you could prepare .sql files that create data (see files in `.guides/sampledata`) and have a script run the file upon box startup (see `.guides/lib/startup.sh`). This allows you to have a simple set of scripts with only one stack configuration if you needed diverse datasets across assignments.

### Markdown
Guides are authored with [markdown](https://codio.com/docs/content/authoring/page-edit/edit/), but you can use any HTML to author content. The drop-down text is an example of the `<details>` and `<summary>` tags.

### Images
You will notice a folder called `.guides` in the directory tree. All of the information in this folder is hidden from students. There is a subfolder called `img` where you can upload any images you want to appear in the guide. Right-click on the `img` folder and select `Upload...`.

![.guides/img/upload](.guides/img/upload.png)

Add the image to the guide using markdown syntax or by dragging the image file from the directory tree onto the guide page where you want to insert the image.

### Button

Codio has syntax to add a [custom button](https://codio.com/docs/content/authoring/page-edit/buttons/) to your guide. On the previous page, the `Reset EPDriver Database` button runs the command `node .guides/sqltests/fw-sql-reset-epdriver.js`. You can check out the script via the file tree once you are in Edit Mode (which you reach by navigating to "Tools > Guide > Edit" on the top tool bar).