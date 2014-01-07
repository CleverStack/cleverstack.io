# [CleverStack.io](http://cleverstack.io)

Built using Bootstrap, Jekyll and Grunt.

This repository contains the source for http://cleverstack.io website. Should you be interested in improving our website itself, please feel free. We are accepting pull requests. Get started with instructions below.



### Prerequisites

1. [Install Jekyll](http://jekyllrb.com/docs/installation) (requires v1.x).
    - **Windows users:** read [this unofficial guide](https://github.com/juthilo/run-jekyll-on-windows/) to get Jekyll up and running without problems.
    - There is also a [standalone version of Jekyll](https://www.nuget.org/packages/jekyll-standalone/) which you can use instead.
    - **Windows users:** For Ruby 2.0.0 run `chcp 65001` first to change the command prompt's character encoding.
    - In addition, ensure you have Python installed and added in your `PATH` or the build will fail due to our Pygments dependency.

2. [Install NPM](http://npmjs.org).

3. [Install Grunt](http://gruntjs.com) run `npm install -g grunt-cli`.



### Running locally

1. If necessary, install the Prerequisites above.

2. From the root directory, run `jekyll serve --watch` in the command line. (Optionally) If you wish to change the styles or JavaScript used by Bootstrap. In a seperate terminal, from the root directory run `npm install` and then run `grunt watch`. The latter will auto-build the Bootstrap .less and .js files.

3. Go to `http://localhost:9001` in your browser.



### Troublshooting

Learn more about using Jekyll by reading its [documentation](http://jekyllrb.com/docs/home/).

There is more detailed information on how to run Bootstrap locally in thier [README](https://github.com/twbs/bootstrap/blob/master/README.md).

Should you encounter problems with installing dependencies or running Grunt commands, uninstall all previous dependency versions (global and local). Then, rerun `npm install`.



### Contributing

Please read through our [contributing guidelines](https://github.com/twbs/bootstrap/blob/master/CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

More over, if your pull request contains JavaScript patches or features, you must include relevant unit tests. All HTML and CSS should conform to the [Code Guide](http://github.com/mdo/code-guide), maintained by [Mark Otto](http://github.com/mdo).

Editor preferences are available in the [editor config](.editorconfig) for easy use in common text editors. Read more and download plugins at <http://editorconfig.org>.

**Important:** Once a pull request has been merged, you will need to push the content of the `_gh_pages` folder to this repository: https://github.com/CleverStack/cleverstack.github.io then GitHub will auto generate the docs at cleverstack.github.io.


### Community

Keep track of development and community news.

- Follow [@clevertech on Twitter](http://twitter.com/clevertech).
- Read and subscribe to [The Official Bootstrap Blog](http://blog.getbootstrap.com).
- Chat with fellow Bootstrappers in IRC. On the `irc.freenode.net` server, in the `##twitter-bootstrap` channel.
- Implementation help may be found at Stack Overflow (tagged [`twitter-bootstrap`](http://stackoverflow.com/questions/tagged/twitter-bootstrap)).



### Authors

**[Sam Deering](http://github.com/sdeering)**


### Contributors

Please add your name if you make changes to the docs.



### Copyright and license

Copyright 2014 [Clevertech](http://clevertech.biz), Inc under [the MIT license](LICENSE).

