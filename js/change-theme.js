// change the theme
function changeTheme(id) {
    const theme = document.getElementsByTagName('link')[1];
    switch (id) {
        case "enable-default":
            theme.href = "styles/default.css";
            break;
        case "enable-pop-art":
            theme.href = "styles/pop.css";
            break;
    }
  }
function changeHome(id) {
    const theme = document.getElementsByTagName('link')[1];
    switch (id) {
        case "enable-home-default":
            theme.href = "styles/home.css";
            break;
        case "enable-home-pop-art":
            theme.href = "styles/home_pop.css";
            break;
    }
  }
