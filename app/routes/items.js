var express = require("express")
var router = express.Router()
var MainModel = require(__path_models+"/items")

router.get('/', async (req,res,next) => {
    try {
        let data = await MainModel.listItem({},{"task":"all"})
        res.status(200).json({
            success: true,
            data: data
        })
    }
    catch(e) {
        console.log(e);
        res.status(400).json({success: false})
    }
})
router.get("/:id", async (req,res,next) => {
    try {
        let data = await MainModel.listItem({id: req.params.id},{"task":"one"})
        res.status(201).json({
            success: true,
            data: data
        })
    }
    catch(e) {
        console.log(e);
        res.status(400).json({success: false})
    }
})
router.post('/add', async (req,res,next) => {
    try {
        let a = {id: initID(8),name: req.body.name, status: req.body.status}
        console.log(a)
        const data = await MainModel.create(a)
        res.status(201).json ({
            success: true,
            data: data
        })
    }
    catch(e) {
        console.log(e);
        res.status(400).json({success:false})
    }
})
router.put('/put/:id', (req,res,next) => {
    try {
        res.send("Sửa đối tượng có id "+req.params.id+" thành "+JSON.stringify(req.body))
    }
    catch(e) {
        console.log(e);
        res.status(400).json({success:false})
    }
})
router.delete('/delete/:id', async(req,res,next) => {
    try {
        let data = await MainModel.deleteItem({id: req.params.id},{task: "one"})
        res.status(201).json({
            success: true,
            data: data
        })
    }
    catch(e) {
        console.log(e);
        res.status(400).json({success: false})
    }
})
initID = (number) => {
    return Math.floor(Math.random() * Math.pow(10,number))
}
module.exports = router
