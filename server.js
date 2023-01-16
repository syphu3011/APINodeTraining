// const http = require("http")
// const course = [{id: 1, name: "nodeJS"}, {id: 2, name: "reactJS"}]
// const server = http.createServer((req, res) => {
//     res.setHeader('Content-type', 'applications/JSON')
//     res.setHeader("X-Powered-By", "Node.js")
//     res.statusCode = 404

//     res.end(JSON.stringify({
//         success: false,
//         error: "Not found!",
//         data: null
//     }))
// })
var createError = require("http-errors")
var express = require('express')
var mongoose = require('mongoose')
const app = express()
app.use(express.json())
const pathConfig = require("./path")
global.__base = __dirname + '/'
global.__path_app = __base + pathConfig.folder_app + '/'

global.__path_schemas = __path_app + pathConfig.folder_schemas + '/'
global.__path_routers = __path_app + pathConfig.folder_routers + '/'
global.__path_models = __path_app + pathConfig.folder_models + '/'
global.__path_configs = __path_app + pathConfig.folder_configs + '/'

const systemConfig = require(__path_configs + 'system')
const databaseConfig = require(__path_configs + 'database')

//local variable
app.locals.systemConfig = systemConfig

mongoose.connect( `mongodb+srv://${databaseConfig.username}:${databaseConfig.password}@cluster0.w3qvkqz.mongodb.net/${databaseConfig.database}?retryWrites=true&w=majority`)
.then(() => {
    console.log("Database connected");
}).catch((err) => {
    console.log("Error connecting to database");
});
app.listen(3000, () => console.log("ok baka"));
app.use('/api/v1', require(__path_routers))




















// let courses = [{id: 1, name: "nodeJS"}, {id: 2, name: "reactJS"}]
// app.get('/',(req,res) => {
//     res.send("Thực hành 1")
// })
// app.get('/api/course',(req,res) => {
//     res.send(courses)
// })
// app.get('/api/course/:id',(req,res) => {
//     const filterCourses = courses.filter(ele => ele.id == req.params.id)
//     filterCourses.length >  0 ? res.send(filterCourses) : res.status(404).send("id không tồn tại")
// })
// app.post('/api/course/add',(req,res) => {
//     const course = req.body
//     courses.push(course)
//     res.send(JSON.stringify({
//         success: true,
//         notice: "Bạn đã thêm thành công!",
//     }))
// })
// app.put('/api/course/edit/:id',(req,res) => {
//     let checkChange = false
//     for (const course of courses) 
//         if (course.id == req.params.id) {
//             course.name = req.body.name
//             checkChange = true
//             break
//         }
//     checkChange ? res.send(JSON.stringify({
//         success: checkChange,
//         notice: "Bạn đã sửa thành công!",
//         data: courses
//     })) :
//     res.status(404).send(JSON.stringify({
//         success: checkChange,
//         notice: "Không tìm thấy!",
//     }))

// })
// app.delete('/api/course/delete/:id',(req,res) => {
//     let lengthCourses = courses.length
//     courses = courses.filter(ele => ele.id != req.params.id)
//     lengthCourses != courses.length ?
//     res.send(JSON.stringify({
//         success: true,
//         notice: "Bạn đã xóa thành công!",
//         data: courses
//     })) :
//     res.status(404).send(JSON.stringify({
//         success: true,
//         notice: "Không tìm thấy!",
//         data: courses
//     }))
// })
// const PORT = process.env.PORT || 3001
// app.listen(PORT, () => console.log(`Sever running on port ${PORT}`))

