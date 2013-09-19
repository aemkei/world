fs = require("fs");
highlight = require("cardinal").highlight;
uglify = require("uglify-js").minify;
beautify = require('js-beautify').js_beautify;


raw = "(function(){"+fs.readFileSync("./script.js").toString()+"})()";
ugly = uglify(raw, {fromString: true}).code.slice(12,-5);

ugly = ugly.replace(/\bvar\s([a-z][,;])*/g, "");

beauty = beautify(ugly);
pretty = highlight(beauty);

ugly = ugly.replace(/\\/g, "\\\\");
//ugly = ugly.replace('"zw24l6k4e3t4jnt4qj24xh242kty24wrt413n243n9h243pdxt41csb43iyb6k43pk7243nmr24"', '"zw24l6k4e3t4jnt4qj24xh242"+"kty24wrt413n243n9h243pdxt41csb4"+"3iyb6k43pk7243nmr24"');
//ugly = ugly.replace('n="', 'n=("');
//ugly = ugly.replace('43nmr24"', '43nmr24")');
ugly = ugly.replace(/(\')/g, '\\$1'); // escape ' => \'
ugly = ugly.replace("function z(){", "eval(z='");
ugly = ugly.replace("}z()", "')");
ugly = ugly.replace('<pre', '<"+"pre');
ugly = ugly.replace('Z', 'z');



function bytes(s){
  return encodeURI(s).replace(/%../g, 'i').length + " b";
}

console.log(pretty);
console.log("\n" + ugly, "\n");
console.log("\n" + ugly.replace(/(.{64})/g, "$1\\\n"), "\n");

fs.writeFileSync("./script.min.js", ugly);

console.log("Raw:   "+  bytes(raw));
console.log("Ugly:  "+  bytes(ugly));