var pageMod = require("sdk/page-mod");

// We want to target all BandCamp pages with
// the page modification script
pageMod.PageMod({
   include: "*.bandcamp.com",
   contentScriptFile: "./volumeControl.js",
   contentStyleFile:  "./volumeControl.css",
});
