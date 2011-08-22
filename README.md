This Git repository includes all of the source code used in creating a tutorial about the NestedList component in Sencha Touch.

The tutorial includes several checkpoints:

* [Blank slate - the application skeleton][00]
* [Basic nested list setup - configuring the nested list with a tree store and model][01] ([view diff][00-01])
* [Create a detail card - making the detail card for leaf nodes][02] ([view diff][01-02])
* [Add metadata to listings - adding metadata to the list items][03] ([view diff][02-03])

Using this repository to follow the screencast
----------------------------------------------

First, you'll have to clone this repository:

    git clone git://github.com/senchalearn/Nested-list-demo.git

Change into the directory:

    cd Nested-list-demo

By default, the `git clone` command will only create the master branch locally. If you want to study the code at each checkpoint, you will have to fetch each of the other branches. You can do so by running the following:

    git checkout -b 00_blank_slate origin/00_blank_slate
    git checkout -b 01_setup_nested_list origin/01_setup_nested_list
    git checkout -b 02_create_detail_card origin/02_create_detail_card
    git checkout -b 03_add_metadata_to_listings origin/03_add_metadata_to_listings

You can review the list of local branches by running:

    git branches

And you can switch between branches with the `checkout` command. For example, to check out the `03_add_metadata_to_listings` branch, run:

    git co 03_add_metadata_to_listings

Live demo
---------

You can try out the demo here:

* [http://senchalearn.github.com/Nested-list-demo/][d]

[00]: https://github.com/senchalearn/Nested-list-demo/tree/00_blank_slate
[01]: https://github.com/senchalearn/Nested-list-demo/tree/01_setup_nested_list
[02]: https://github.com/senchalearn/Nested-list-demo/tree/02_create_detail_card
[03]: https://github.com/senchalearn/Nested-list-demo/tree/03_add_metadata_to_listings

[00-01]: https://github.com/senchalearn/Nested-list-demo/compare/00_blank_slate...01_setup_nested_list
[01-02]: https://github.com/senchalearn/Nested-list-demo/compare/01_setup_nested_list...02_create_detail_card
[02-03]: https://github.com/senchalearn/Nested-list-demo/compare/02_create_detail_card...03_add_metadata_to_listings

[d]: http://senchalearn.github.com/Nested-list-demo/
