const moment = require("moment")
const usercalfood = require("../model/usercalfood")


exports.returndate=async  (req,res)=>{
    const name = req.body.name
    var dates = moment().subtract(3,'days')
    var dateser = dates.format('DD MM YYYY')
    var answer = 0
    var ansarrya = [0,0,0,0,0,0,0]
    var datearra = [0,0,0,0,0,0,0]
    for (let i = 0; i < 7; i = i+1){
        var result = await usercalfood.find({name:name,date:dateser})
            for (let j = 0;j<result.length;j = j+1)
            {
                 answer = answer + await parseFloat(result[j].cal)

            }
        ansarrya[i] = answer
        datearra[i] = dates.format('ddd DD')
        dates.add(1,'days')
        answer = 0
        dateser = dates.format('DD MM YYYY')    
    }
    return res.json({result:ansarrya,date:datearra})
}
    

    
