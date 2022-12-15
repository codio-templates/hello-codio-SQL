----------

## Building the Demo

Instruction through Codio is built around the guides feature. This is a brief description on how the demo on the previous page was built. Please see the [documentation](https://docs.codio.com/courses/authoring/) for more information about content authoring with guides.

||| info
### To try this out
You’ll need to be in Edit Mode. From the top tool bar menu, select  **Tools->Guide->Edit**.


![.guides/img/editGuide](.guides/img/editGuide.png)
|||

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

Alternatively, you could prepare .sql files that create data (see files in `.guides/sampledata`) and have a script run the file upon box startup (see `.guides/startup.sh`). If you don't see the File Tree, select **View->File Tree**. This allows you to have a simple set of scripts with only one stack configuration if you needed diverse datasets across assignments. To cause the script to run at startup, go to `Tools >Install Software` and click the download/install button next to `Autostart Support`. This will cause Codio to automatically look for startup.sh in the workspace folder and/or .guides. Also note that you should **delete** the data before stack creation so that students get fresh data from the script when they start or re-start the assignment (since it only installs if the database is missing).

### Markdown
Guides are authored with [markdown](https://docs.codio.com/courses/authoring/#markdown-content-editing), but you can use any HTML to author content. The drop-down text is an example of the `<details>` and `<summary>` tags.

### Images
You will notice a folder called `.guides` in the directory tree. All of the information in this folder is hidden from students. There is a subfolder called `img` where you can upload any images you want to appear in the guide. Right-click on the `img` folder and select `Upload...`.

![.guides/img/upload](.guides/img/upload.png)

Add the image to the guide using markdown syntax or by dragging the image file from the directory tree onto the guide page where you want to insert the image.

### Button

Codio has syntax to add a [custom button](https://docs.codio.com/courses/authoring/#custom-buttons) to your guide. On the previous page, the `Reset EPDriver Database` button runs the command `sh .guides/restart.sh`. You can check out the script via the file tree once you are in Edit Mode (which you reach by navigating to "Tools > Guide > Edit" on the top tool bar).