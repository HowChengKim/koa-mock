const Router = require('koa-router');
const router = new Router();
const Mock = require('mockjs');

router.prefix = '/mapPoint';

let imgWidth = 30,
  imgHeight = 50;
router.get('/getPoints', async (ctx) => {
  ctx.body = JSON.stringify(Mock.mock({
    'code': 200,
    'msg': '请求成功',
    'resData': {
      'points|10': [
        {
          'id': '@guid',
          'title':'@cname',
          'text':'@cparagraph(2)',
          'bigImage':'@image(139x104,@color)',
          'imageUrl': 'http://192.168.8.134:8080/test/static/images/baojing.png',
          'width': imgWidth,
          'height': imgHeight,
          'lng': ()=>{
            return Math.random() * 40 + 85;
          },
          'lat': ()=>{
            return Math.random() * 30 + 21;
          }
        }
      ]
    }
  }));
});
router.get('/getMarkers', async (ctx) => {
  ctx.body = JSON.stringify(Mock.mock({
    'code': 200,
    'msg': '请求成功',
    'resData': {
      'points|10': [
        {
          'id': '@guid',
          'title':'@cname',
          'text':'@cparagraph(30)',
          'bigImage':'@image(139x104,@color)',
          'imageUrl': 'http://192.168.8.134:8080/test/static/images/cameraSel.png',
          'width': imgWidth,
          'height': imgHeight,
          'lng': ()=>{
            return Math.random() * 40 + 85;
          },
          'lat': ()=>{
            return Math.random() * 30 + 21;
          }
        }
      ]
    }
  }));
});
module.exports = router;