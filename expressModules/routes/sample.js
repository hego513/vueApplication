var express = require('express');
var router = express.Router();
const axiosBase = require('axios');
let axios = axiosBase.create({
    baseURL: 'https://connpass.com/api/v1/event', // バックエンドB のURL:port を指定する
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    },
    responseType: 'json'
});

/* サンプルAPI①
 * http://localhost:3000/samples にGETメソッドのリクエストを投げると、
 * JSON形式で文字列を返す。
 */
router.get('/', function (req, res, next) {
    var param = {"値": "これはサンプルAPIです"};
    res.header('Content-Type', 'application/json; charset=utf-8')
    res.send(param);
});

/* サンプルAPI②
 * http://localhost:3000/samples/hello にGETメソッドのリクエストを投げると、
 * JSON形式で文字列を返す。
 */
router.get('/hello', function (req, res, next) {
    var param = {"result": "Hello World !"};
    res.header('Content-Type', 'application/json; charset=utf-8')
    res.send(param);
});

/* サンプルAPI②
 * http://localhost:3000/samples/hello にGETメソッドのリクエストを投げると、
 * JSON形式で文字列を返す。
 */
router.get('/hello', function (req, res, next) {
    var param = {"result": "Hello World !"};
    res.header('Content-Type', 'application/json; charset=utf-8')
    res.send(param);
});

/* サンプルAPI3
 * http://localhost:3000/samples/connpass にGETメソッドのリクエストを投げると、
 * JSON形式で文字列を返す。
 */
router.get('/connpass', function (req, res, next) {

    axios({
        method: 'get',
        params: {
            ymd: getNowYMD()
        }
    })
        .then(function (response) {
            res.send(response.data);
        })
        .catch(function (error) {
            console.log('ERROR!! occurred in Backend.')
        });
});

function getNowYMD() {
    var dt = new Date();
    var y = dt.getFullYear();
    var m = ("00" + (dt.getMonth() + 1)).slice(-2);
    var d = ("00" + dt.getDate()).slice(-2);
    var result = y + m + d;
    return result;
}


module.exports = router;

