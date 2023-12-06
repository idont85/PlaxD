function moveOver() {
    var link = 'https://beatbump.io'
    window.location.href = link
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
      alert("Welcome again " + user);
    } else {
      user = prompt("Please enter your name:", "");
      if (user != "" && user != null) {
        setCookie("username", user, 365);
      }
    }
  }

function changeTab(tryin,tabpic) {
    setCookie("tab_name", tryin, 365);
    setCookie("tab_pic", tabpic, 365)
    alert("Complete!")

}

function tempCheck() {
    var current = getCookie("tab_name");
    alert(current)
    var next = getCookie("tab_pic");
    alert(next)
}

function startUp() {
  var favicon = getCookie("tab_pic")
  var tabby = getCookie("tab_name")
}