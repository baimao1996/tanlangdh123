var BaseUrl =  "http://43.240.73.13:1995";
var ResourceUrl = 'http://43.240.73.13:1996/ttxinshenshou/';

if(window.location.pathname!='/'
    &&window.location.pathname!='/index.html'
    &&window.location.pathname!='/site/login.html'
    &&window.location.pathname!='/site/wxredd.html')
{
    var wwid=window.localStorage.getItem("wwid");
    if(!wwid)
    {
        localStorage.setItem('enter_url',encodeURIComponent(window.location.href))

        alert('请先登录');
        window.location.href = '/index.html';
    }
}


        