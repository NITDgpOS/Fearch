var data = require("sdk/self").data;
// Construct a panel, loading its content from the "text-entry.html"
// file in the "data" directory, and loading the "get-text.js" script
// into it.
var panel = require("sdk/panel").Panel({
  height: 280,
  contentURL: data.url("panel.html"),
  

  onHide : handleHide
  
});

var {ToggleButton} = require('sdk/ui/button/toggle');

// Create a button
var button = ToggleButton({
  id: "show-panel",
  label: "Instant Search",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onChange: handleChange
});

// Show the panel when the user clicks the button.
function handleChange(state) {
  if(state.checked){
  	panel.show({
  		position : button
  	});
  }
}

// When the panel is displayed it generated an event called
// "show": we will listen for that event and when it happens,
// send our own "show" event to the panel's script, so the
// script can prepare the panel for display.
panel.on("show", function() {
  panel.port.emit("show");
});

// Listen for messages called "text-entered" coming from
// the content script. The message payload is the text the user
// entered.
// In this implementation we'll just log the text to the console.


function handleHide() {
	  button.state('window', {checked: false});
}

var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: ["*"],
  contentScriptFile: data.url("googleScript.js"),
  contentScriptWhen: "end"
});