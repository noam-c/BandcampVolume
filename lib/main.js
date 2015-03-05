/**
 * Copyright 2015 Noam Chitayat. All rights reserved.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

var pageMod = require("sdk/page-mod");

// We want to target all BandCamp pages with
// the page modification script
pageMod.PageMod({
   include: "*.bandcamp.com",
   contentScriptFile: "./volumeControl.js",
   contentStyleFile:  "./volumeControl.css",
});
