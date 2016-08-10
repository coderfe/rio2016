window.onload = function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://ziliaoku.sports.qq.com/cube/index?cubeId=34&dimId=67&limit=1000&from=sportsdatabase');
    xhr.setRequestHeader('Access-Control-Allow-Origin', 'https://localhost:3000');
    xhr.onreadystatechange = function() {
        if (xhr.status === 200) {
            if (xhr.readyState === 4) {
                var obj = JSON.parse(xhr.response),
                    allCountry = obj.data.OlyMedalList,
                    d = allCountry.slice(0, 3);
                // console.log(d);
                
                var Gold = document.querySelectorAll('.gold'),
                    Silver = document.querySelectorAll('.silver'),
                    Bronze = document.querySelectorAll('.bronze'),
                    CardTit = document.querySelectorAll('.card_title');
                // console.log(Gold);

                for (var i = 0; i < Gold.length; i++) {
                    Gold[i].innerHTML = d[i].gold;
                }
                for (var i = 0; i < Silver.length; i++) {
                    Silver[i].innerHTML = d[i].silver;
                }
                for (var i = 0; i < Bronze.length; i++) {
                    Bronze[i].innerHTML = d[i].bronze;
                }
                for (var i = 0; i < CardTit.length; i++) {
                    CardTit[i].innerHTML = d[i].countryCnName;
                }

                var Flag = document.querySelectorAll('.card_flag');
                for (var i = 0; i < Flag.length; i++) {
                    var imgHtml = '<img src="./img/';
                    Flag[i].innerHTML = imgHtml + d[i].country + '.png" alt="flag">';
                }
            }
        }
    }
    xhr.send(null);
};