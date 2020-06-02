var jsonMapInfo = {
    "maps": [{
            "mapID": "bank",
            "mapName": "Bank",
            "imageDir": "map-bank.jpg",
            "description": "Team Rainbow has been called to raid a major bank. The focus is on providing a sense of progression for attackers as they make their way through progressively more fortified areas of the building.",
            "location": "Los Angeles, California, USA",
            "gamemode": ["Quick Match", "Ranked", "Quarantine"]
        },
        {
            "mapID": "border",
            "mapName": "Border",
            "imageDir": "map-border.jpg",
            "description": "Team Rainbow has been called in to assist the local law enforcement and regain control of the border. A mix of old and new buildings with open air pathways make this the most destructible and open planned map to date.",
            "location": "Middle East",
            "gamemode": ["Quick Match", "Ranked", "Quarantine"]
        },
        {
            "mapID": "clubhouse",
            "mapName": "Clubhouse",
            "imageDir": "map-clubhouse.jpg",
            "description": "This map depicts an assault on a biker gang clubhouse. Featuring a full bar, gaming tables and leather furniture, this mixed interior/exterior layout offers a host of interesting tactical possibilities for both attacker and defender.",
            "location": "Hanover, Germany",
            "gamemode": ["Quick Match", "Ranked"]
        },
        {
            "mapID": "coastline",
            "mapName": "Coastline",
            "imageDir": "map-coastline.jpg",
            "description": "Team Rainbow has been called to safeguard the seashore of Ibiza, Spain. Stationed on Ibiza’s rocky shore, course through Balearic ruins and navigate booming bars to neutralize the threat. Get ready for a surround flow of combat laced with chaotic rushes as you explore a paradise gone wrong.",
            "location": "Ibiza, Spain",
            "gamemode": ["Quick Match", "Ranked", "Quarantine"]
        }
    ]
};

// Obtained from https://davidwalsh.name/query-string-javascript for JavaScript URL Query String
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

function loadElements() {
    var mapID = getUrlParameter("id");

    if (mapID === null) {
        window.location.replace("../HTML/Maps.html");
    }

    var mapObject = jsonMapInfo;
    var mapProperties;
    mapObject.maps.forEach(map => {
        if (map.mapID === mapID) {
            mapProperties = map;
            return;
        }
    });

    if (mapProperties === null) {
        window.location.replace("../HTML/Maps.html");
    }

    document.getElementById("map-title").innerHTML = mapProperties.mapName;
    document.getElementById("map-image").src = "../Assets/Images/Maps/map-" + mapID + ".jpg";
    document.getElementById("description").innerHTML = mapProperties.description;
    document.getElementById("location").innerHTML = mapProperties.location;
    document.getElementById("gamemode").innerHTML = mapProperties.gamemode.join(", ");

}