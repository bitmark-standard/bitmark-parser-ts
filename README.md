# Bitmark-parser-ts

A typescript bitmark-parser


#### On the fresh start (one time only)

    $ npm install

#### Building the parser typescript source files:

    $ npm run build-ts

#### To run with ts-node:

    $ cd src
    $ ts-node --esm call.ts tests/bug.bit


#### Building the Parcel bundle (with an example html)

Example HTML is the bundle-test.html, and the example main is main.ts. At the root of the package, do

    $ npm run build-bundle

This command will build the html, js bunlde and map in the /dist directory.

You need to tweak dist/bundle-test.html -- the default src specification is `src="/main.aa9d12ad.js"`. You will need to copy dist/* to your local apache www directory. But you will have to tweak this src value (location of the file) if you are copying the files to a different directory. For me the js files reside in the same direcory as the html, I just add '.' like this `src="./main.aa9d12ad.js"`. Below is a generated bundle-test.html.
```
<!doctype html><!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]--><!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]--><!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]--><!--[if gt IE 8]><!--><html class="no-js"><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><title></title><meta name="description" content=""><meta name="viewport" content="width=device-width, initial-scale=1"><script src="./main.aa9d12ad.js" crossorigin></script></head><body> </body></html>
```
And you also need to tweak the map file location in the js file. It is usually specified at the end of the bundle js file.
e.g. you see I added '.' before /main.aa9d12ad.js.map.
```
arse(n)}var r="[.conversation-right-1]\nYoo!\n",o="\n[.bot-action-response]\n===\n[!Ja, das weiss ich]\n[%A]\n[@reaction:celebrate]\n👍 Cool!\n===\n[!Das war mir nicht bewusst]\n[%B]\n😅\n[@reaction:like]\n===\nTHIS IS THE FOOTER\n",t=n(o);console.log(t);
},{"./src/index.ts":"B6dB"}]},{},["ZCfc"], null)
//# sourceMappingURL=./main.aa9d12ad.js.map
```
That's it. You copy the three files `dist/bundle-test.html, dist/main.aa9d12ad.js, dist/main.aa9d12ad.js.map` to your webserver document directory.

