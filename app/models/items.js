const  MainModel = require(__path_schemas + "items")

module.exports =  {
    listItem:  (params, option) => {
        if (option.task == "all") {
            return MainModel.find({}).select("id name status")
        }
        if (option.task == "one") {
            return MainModel.find({id: params.id}).select("id name status")
        }
    },
    create: items => {
        return  new MainModel(items).save()
    },
    deleteItem: (params, option) => {
        if (option.task == "one") {
            return MainModel.deleteOne({id: params.id})
        }
        if (option.task == "all") {
            return MainModel.deleteMany({status:  params.status})
        }
    }
}