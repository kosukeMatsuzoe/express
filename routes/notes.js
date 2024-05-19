var express = require('express');
var router = express.Router();

//response data
const responseObjectDataAll ={
    textObject :{
        id:1,
        title:'ノート１のタイトル',
        subTitle:'ノート１のサブタイトル',
        bodyText:'ノート１の本文'
    },
    textObject2 :{
        id:2,
        title:'ノート2のタイトル',
        subTitle:'ノート2のサブタイトル',
        bodyText:'ノート2の本文'
    },
};

/**
 * メモを全権取得するAPI
 * @returns{Object[]}data
 * @returns{number}data.id - ID
 * @returns{string}data.title - タイトル
 * @returns{string}data.text - 内容
 */

router.get('/',function(req,res,next){
    //全件取得して返す
    res.json(responseObjectDataAll);
})

module.exports = router;