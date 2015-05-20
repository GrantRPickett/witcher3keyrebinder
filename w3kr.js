var download = "";
document.getElementById('download').onclick = function() {
    if (download.length <= 0) return
    var blob = new Blob([download], {type:'text/plain;charset=utf-8'});
    saveAs(blob, 'input.settings');
};
(function() { var s;
$('form').jsonForm({
    "schema": {
        "1": {
            "title": "Steel Sword",
            "type": "string"
        },
        "2": {
            "title": "Silver Sword",
            "type": "string"
        },
        "3": {
            "title": "Aard",
            "type": "string"
        },
        "4": {
            "title": "Yrden",
            "type": "string"
        },
        "5": {
            "title": "Igni",
            "type": "string"
        },
        "6": {
            "title": "Quen",
            "type": "string"
        },
        "7": {
            "title": "Axii",
            "type": "string"
        },
        "Alch": {
            "title": "Alchemy",
            "type": "string"
        },
        "Bestiary": {
            "title": "Bestiary",
            "type": "string"
        },
        "CameraLock": {
            "title": "CameraLock",
            "type": "string"
        },
        "Candle": {
            "title": "Incenerate/Extinguish (rebind for looting)",
            "type": "string"
        },
        "CantorGallop": {
            "title": "CantorGallop",
            "type": "string"
        },
        "Character": {
            "title": "Character",
            "type": "string"
        },
        "Craft": {
            "title": "Craft",
            "type": "string"
        },
        "DiveDown": {
            "title": "DiveDown",
            "type": "string"
        },
        "Dodge": {
            "title": "Dodge",
            "type": "string"
        },
        "Down": {
            "title": "Down",
            "type": "string"
        },
        "Down2": {
            "title": "Down2 ",
            "type": "string"
        },
        "Interact": {
            "title": "Interact",
            "type": "string"
        },
        "Escape": {
            "title": "Escape",
            "type": "string"
        },
        "F1": {
            "title": "Show keys",
            "type": "string"
        },
        "Focus": {
            "title": "Focus",
            "type": "string"
        },
        "Follow": {
            "title": "Follow",
            "type": "string"
        },
        "Glossary": {
            "title": "Glossary",
            "type": "string"
        },
        "Gwint": {
            "title": "Gwint",
            "type": "string"
        },
        "Horse": {
            "title": "Horse",
            "type": "string"
        },
        "Inv": {
            "title": "Inv",
            "type": "string"
        },
        "Journal": {
            "title": "Journal",
            "type": "string"
        },
        "Jump": {
            "title": "Jump",
            "type": "string"
        },
        "Left": {
            "title": "Left",
            "type": "string"
        },
        "Left2": {
            "title": "Left2",
            "type": "string"
        },
        "LeftMouse": {
            "title": "LeftMouse",
            "type": "string"
        },
        "Map": {
            "title": "Map",
            "type": "string"
        },
        "Meditation": {
            "title": "Meditation",
            "type": "string"
        },
        "Menu": {
            "title": "Menu",
            "type": "string"
        },
        "MiddleMouse": {
            "title": "MiddleMouse",
            "type": "string"
        },
        "PCALT": {
            "title": "Combat Alternate",
            "type": "string"
        },
          "Parry": {
            "title": "Parry",
            "type": "string"
        },
        "Potion1": {
            "title": "Potion1",
            "type": "string"
        },
        "Potion2": {
            "title": "Potion2",
            "type": "string"
        },
        "Quest": {
            "title": "Quest",
            "type": "string"
        },
        "RadMenu": {
            "title": "Radial Menu (signs and wep wheel)",
            "type": "string"
        },
        "Right": {
            "title": "Right",
            "type": "string"
        },
        "Right2": {
            "title": "Right2",
            "type": "string"
        },
        "Roll": {
            "title": "Roll",
            "type": "string"
        },
        "Sheathe": {
            "title": "Sheathe",
            "type": "string"
        },
        "Sign": {
            "title": "Sign",
            "type": "string"
        },
        "Sprint": {
            "title": "Sprint",
            "type": "string"
        },
        "Surface": {
            "title": "Surface",
            "type": "string"
        },
        "ToggleSprint": {
            "title": "ToggleSprint",
            "type": "string"
        },
        "Up": {
            "title": "Up",
            "type": "string"
        },
        "Up2": {
            "title": "Up2",
            "type": "string"
        },
        "WalkToggle": {
            "title": "WalkToggle",
            "type": "string"
        }
    },
    "value": {
    	 "1": "1",
        "2": "2" ,
        "3": "3" ,
        "4": "4" ,
        "5": "5" ,
        "6": "6" ,
        "7": "7" ,
        "Alch": "L" ,
        "Bestiary": "B" ,
        "CameraLock": "Z" ,
        "Candle": "9" ,
        "CantorGallop": "LShift" ,
        "Character": "K" ,
        "Craft": "O" ,
        "DiveDown": "C" ,
        "Dodge": "LAlt" ,
        "Down": "Down" ,
        "Down2": "S" ,
        "Interact": "E" ,
        "Menu": "Enter" ,
        "Escape": "Escape" ,
        "F1": "F1" ,
        "Focus": "RightMouse" ,
        "Follow": "X" ,
        "Glossary": "G" ,
        "Gwint": "H" ,
        "Horse": "X" ,
        "Inv": "I" ,
        "Journal": "J" ,
        "Jump": "Space" ,
        "Left": "Left" ,
        "Left2": "A" ,
        "LeftMouse": "LeftMouse" ,
        "Map": "M" ,
        "Meditation": "N" ,
        "MiddleMouse": "MiddleMouse" ,
        "PCALT": "LShift" ,
        "Potion1": "R" ,
        "Potion2": "F" ,
        "Quest": "J" ,
        "RadMenu": "Tab" ,
        "Right": "Right" ,
        "Right2": "D" ,
        "Parry": "RightMouse" ,
        "Roll": "Space" ,
        "Sheathe": "C" ,
        "Sign": "Q" ,
        "Sprint": "LShift" ,
        "ToggleSprint": "CapsLock" ,
        "Surface": "Space" ,
        "Up": "Up" ,
        "Up2": "W" ,
        "WalkToggle": "LControl" 
  },
   onSubmit: function (errors, values) {
          if (errors) {
            $('#res').html('<p>I beg your pardon?</p>');
          }
          else {
            // Check for the various File API support.
            if (window.File && window.FileReader && window.FileList && window.Blob) {
              $.get('input-base.settings', function(data) {
                  console.log(typeof(data))
                  $('buffer').html(data);
                  console.log(data.length)
                   var keys = Object.keys(values)
                   console.log(keys.length);
                   for(var i = 0; i<keys.length; i++) {
                        console.log("replacing "+"{"+keys[i]+"}" + " with "+values[keys[i]])
                        data= data.replaceAll("\{"+keys[i]+"\}", values[keys[i]])
                   }
                download = data
                console.log(data.length)
                $('#buffer').html(data);
                });
            } else {
              alert('The File APIs are not fully supported in this browser.');
            }
            $('#res').html('Saved.');
          }
        }
})})();
String.prototype.replaceAll = function(search, replace)
{
    //if replace is not sent, return original string otherwise it will
    //replace search string with 'undefined'.
    if (replace === undefined) {
        return this.toString();
    }

    return this.replace(new RegExp('[' + search + ']', 'g'), replace);
};

