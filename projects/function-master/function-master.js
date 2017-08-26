
//13 global object values
function objectValues(data) {
    var toArray = Object.values(data);
    return toArray;
    };
     
//14 keys to string     
function keysToString(data) {
    var keysArray = [];
    for (var i = 0; i < Object.keys(data).length; i++) {
        keysArray.push(Object.keys(data)[i]);
        };
    var keysString = keysArray.join(" ");
    return keysString;
};

//15 values to string
function valuesToString(data) {
    var toArray = Object.values(data);
    var strArray = [];
    for (var i = 0; i < toArray.length; i++) {
        if (typeof toArray[i] === "string") {
            strArray.push(toArray[i]);
        }
    }
    var toString = strArray.join(" ");
    return toString;
};

//16 array or object
function arrayOrObject(arg) {
    if (Array.isArray(arg)) {
        return "array";
    } 
    return typeof arg;
}

//17 capitalize word
function capitalizeWord(arg) {
    return arg.charAt(0).toUpperCase() + arg.substring(1);
}

//18 capitalize all words
function capitalizeAllWords(arg) {
    var wordArray = arg.split(" ");
    var capWordArray = [];
    for (var i = 0; i < wordArray.length; i++) {
        var caps = wordArray[i].charAt(0).toUpperCase() + wordArray[i].substring(1);
        capWordArray.push(caps);
    }
    var newCapString = capWordArray.join(" ");
    return newCapString;
}

//19 welcome message
function welcomeMessage(arg) {
    var name = arg["name"].charAt(0).toUpperCase() + arg["name"].substring(1);
    return "Welcome " + name + "!";   
}

//20 profile info
function profileInfo(arg) {
    var name = arg["name"].charAt(0).toUpperCase() + arg["name"].substring(1); 
    var species = arg["species"].charAt(0).toUpperCase() + arg["species"].substring(1);
    return name + " is a " + species;
}

//21 maybe noises
function maybeNoises(arg) {
    if (Object.keys(arg).length === 0) {
    return "there are no noises"; 
    } else if (arg["noises"].length > 1) {
        return arg["noises"].join(" ");
    } else if (arg["noises"].length === 0) {
    return "there are no noises";
    }
}

//22 has word
function hasWord(arg, word) {
    return arg.search(word) > -1;
}

//add friend
function addFriend(name, obj) {
    obj["friends"].push(name);
    return obj;
}

//23 is friend
function isFriend(name, obj) {
    if (Object.keys(obj).length < 1) {
        return false;
    } else if (Object.keys(obj).length > 0) {
        for (var i = 0; i < obj["friends"].length; i++) {
            if (obj["friends"][i] === name) {
                return true;
            } 
        }
        return false;
    } 
}

//24 non friends

function nonFriends(name, data) {
    var nonFr = [];
    
    var indexOf = function(array, value) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] === value) {
                return i;
            } 
        } return -1;
    }
  for (var i = 0; i < Object.keys(data).length; i++) {
    if (name !== data[i]["name"]) {
      if (indexOf(data[i]["friends"], name) === -1) {
        nonFr.push(data[i]["name"]);
      }  
    }
  } 
  return nonFr;
}


//25 update object

function updateObject(obj, key, val) {
    obj[key] = val;
    return obj;
}

//26 remove properties

function removeProperties(obj, arr) {
    for (var i = 0; i < arr.length; i++) {
      key = arr[i];
      delete obj[key];
    }  
    console.log(obj);
}



//28 dedup
function dedup(data) {
    var dedupSet = new Set(data);
    var dedupArray = Array.from(dedupSet);
    return dedupArray;
}



