const usercalfood = require("../model/usercalfood")
const usercalact = require("../model/usercalact")

exports.info = (req,res)=>{
    const {name} = req.body
    usercalact.find({name:name}).then(result=>{
        if(!result[0]){
            return res.json({result:"not found"})
        }
        else
        {
            const pipeline = [
                {
                    '$match':{
                        'name':name
                    }
                },{
                    '$addFields':{
                        'actcal' : result
                    }
                }
            ]
            usercalfood.aggregate(pipeline,function(err,data){
                if (err){throw err}
                else{
                    return res.json(data[0])
                }
            })
        }
    })
}