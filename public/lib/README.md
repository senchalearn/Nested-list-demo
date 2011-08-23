Installing Sencha Touch
-----------------------

Download the Sencha Touch v1.1 SDK from [here][download] and place (or symlink) the unzipped directory, renamed to <code>touch</code>, into this <code>lib</code> folder.

Working offline
---------------

The `index.html` file in this repository uses the JS and CSS touch libraries hosted on Sencha's content delivery network (CDN). This should work fine for you so long as you have an internet connection, but if you want to work offline, you can link to local versions of the files instead.

If you've followed the **Installing Sencha Touch** instructions above, then you can use your text editor's find and replace function with these parameters:

    search:   http://cdn.sencha.io/touch/1.1.0
    replace:  lib/touch

This should change the lines that load the JS and CSS libraries from this:

    <link  href="http://cdn.sencha.io/touch/1.1.0/resources/css/sencha-touch.css" type="text/css"/>
    <script src="http://cdn.sencha.io/touch/1.1.0/sencha-touch.js" type="text/javascript"></script>

to this:

    <link  href="lib/touch/resources/css/sencha-touch.css" type="text/css"/>
    <script src="lib/touch/sencha-touch.js" type="text/javascript"></script>

[download]: http://www.sencha.com/products/touch/download/