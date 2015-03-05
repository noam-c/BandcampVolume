/**
 * Copyright 2015 Noam Chitayat. All rights reserved.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

(function() {
   var playerCell = document.querySelector(".inline_player");
   if(!playerCell) {
      // By this time, the Bandcamp page has already loaded.
      // However, if there is no audio player div to add a volume control to
      // at this point, then there's no need to add a volume control.
      return;
   }

   // If we have an audio element on the page,
   // initialize the volume slider with its volume.
   var audio = document.querySelector("audio");
   var startVolume = 0.7;
   
   if(audio) {
      startVolume = audio.volume;
   }

   // Create the volume slider itself
   var volumeControl = document.createElement("input");
   volumeControl.setAttribute("type", "range");
   volumeControl.setAttribute("min", "0");
   volumeControl.setAttribute("max", "100");
   volumeControl.className = "volumeControl";

   var volumeIcon = document.createElement("span");
   volumeIcon.className = "ui-icon ui-icon-volume-on volumeIcon";

   // Create a div to contain both the volume control
   // and its icon 
   var volumeDiv = document.createElement("div");
   volumeDiv.appendChild(volumeIcon);
   volumeDiv.appendChild(volumeControl);

   var updateAudioElements = function () {
      // Bootstrap has two volume icons (on/off)
      // Toggle between the two depending on whether
      // the volume slider is at zero or not.

      var classToAdd = "ui-icon-volume-on";
      var classToRemove = "ui-icon-volume-off";

      if(volumeControl.value === "0") {
         var classToAdd = "ui-icon-volume-off";
         var classToRemove = "ui-icon-volume-on";
      }

      volumeIcon.classList.add(classToAdd);
      volumeIcon.classList.remove(classToRemove);

      // Update volume on every <audio> element on the page
      var audioElements = document.querySelectorAll("audio");
      if(audioElements) {
         Array.prototype.forEach.call(audioElements, function () {
            audio.volume = (volumeControl.value / 100);
         });
      }
   };

   // Listen for input *and* change so we update volume as
   // the volume scrubber is being dragged.
   volumeControl.addEventListener("input", updateAudioElements);
   volumeControl.addEventListener("change", updateAudioElements);

   // Place the volume slider near the inline player
   playerCell.appendChild(volumeDiv);
})();
