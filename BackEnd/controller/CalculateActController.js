 const met = require("../model/Activity.json")
 const jwt = require('jsonwebtoken');
 const Activity = require("../model/Activity.json")
 exports.calAct = (req,res)=>{
<<<<<<< Updated upstream
     const Token = req.body.userToken
     const userid = jwt.decode(Token)
     console.log(userid.userid);
     const mets = req.body.mets
     const minute = parseInt(req.body.minutes)
     const mass = parseInt(req.body.weight)
     const nameact = req.body.nameact
     console.log(Activity[nameact][mets]);

    if (!mass) {
        return res.json({"result":"Couldn't find weight"})  
    } else {
    var result = (((Activity[nameact][mets])*3.5*mass)/200)*minute
    console.log(result);
    res.status(200).json({result:result})
    }
 }
=======
    const Token = req.body.userToken
    const userid = jwt.decode(Token)
    console.log(userid.userid);
    const nameact = req.body.mets
    const minute = parseInt(req.body.minutes)
    const mass = userinfodb.findById(userid.userid,{weight:"weight"})
    console.log(mass);
   if (!mass) {
       return res.json({"result":"Couldn't find weight"})
   } else {
   const result = (((met[nameact])*3.5*mass.weight)/200)*minute
   res.status(200).json({result:result})
   }
}
>>>>>>> Stashed changes
