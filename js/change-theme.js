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