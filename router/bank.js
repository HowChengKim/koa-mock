const Router = require('koa-router');
const router = new Router();
const Mock = require('mockjs');

router.prefix = '/resource';
let n = 0;
let mockData;

router.get('/getBankList', async(ctx) => {
    ctx.body = JSON.stringify(Mock.mock({
        "code": 200,
        "msg": "请求成功",
        "resData": {
            "bankList|30": [
                {
                    "bankOrgCode|+1": 1,
                    "bankCode": function () {
                        return this.bankOrgCode + '';
                    },
                    "bankName": function () {
                        return "中国银行存管" + this.bankOrgCode;
                    },
                    "bankLogoURL": function () {
                        return "c://" + this.bankOrgCode;
                    }
                }
            ]
        }
    }));
});

module.exports = router;