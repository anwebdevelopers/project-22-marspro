//Вджет facebook
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v2.7";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

//Вджет VK
VK.Widgets.Group("vk_groups", {redesign: 1, mode: 3, width: "270", height: "400", color1: 'FFFFFF', color2: '111111', color3: '5E81A8'}, 112433595);
