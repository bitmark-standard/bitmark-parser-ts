/*
 * index.js 
 *
 * Usage:
 *  $ node main-ts.js ../tests/assets/serkb2.txt
 *
 *
 *
 *
 */
import {BitmarkParser} from "./src/index.ts";

function parse(text:string):string {

  let options = {
    trace: false,
    debug: false,
    need_error_report: false,
  };
  let bitmark = new BitmarkParser(text, options);
    // Returns JSON
  return bitmark.parse(text); 
};

var bit1 = "[.conversation-right-1]\nYoo!\n";
var bit2 = `
[.bot-action-response]
===
[!Ja, das weiss ich]
[%A]
[@reaction:celebrate]
👍 Cool!
===
[!Das war mir nicht bewusst]
[%B]
😅
[@reaction:like]
===
THIS IS THE FOOTER
`;

var json = parse(bit2);
console.log(json);

