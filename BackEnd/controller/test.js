const userinfodb = require('../model/userinfo')

 userinfodb.findOne({_id:"635959667d650eb7ad76c68b"}).exec((err,data)=>{
    console.log(data);
 })


