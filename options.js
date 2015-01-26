document.addEventListener('DOMContentLoaded', function() {
  restore_options();
  userRailsOauth();
  document.getElementById('myonoffswitch').addEventListener('click', save_options);
});

function save_options() {
  var twitterSwitch = document.getElementById("twitterOn").checked;
  var faceBookSwitch = document.getElementById("facebookOn").checked;
  var fbFloorSwitch = document.getElementById("facebookCharFloor").checked;
  var alwaysUrlSwitch = document.getElementById("alwaysAddUrl").checked;

  chrome.storage.sync.set({
    twitterOn: tw,
    facebookOn: fb,
    facebookCharFloor: fbFloor,
    alwaysAddUrl: url

  }, function() {
    var status = document.getElementById('status');
    status.textContent = 'Options saved!';

    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

function restore_options() {
  chrome.storage.sync.get({
    //send key value pairs of user's changed options to update. Make async.
  }, function(items) {
    //Luke Kedz wrote this callback. It should act like a switch..case for checked
    //boxes.
    document.getElementById("twitterOn").checked = items.twitterOn;
    document.getElementById("facebookOn").checked = items.facebookOn;
    document.getElementById("facebookCharFloor").checked = items.facebookCharFloor;
    document.getElementById("alwaysAddUrl").checked = items.alwaysAddUrl;
  });
};

function userRailsOauth() {
  chrome.identity.getProfileUserInfo(function(userInfo) {

  });
};
