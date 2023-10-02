const multer = require("multer")
let storage = multer.diskStorage({
    destination: function (req,file,cb) {
        cb(null, "public/images/upload")
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toJSON().slice(0,10) + '-' + path.basename(file.originalname))
    }
})

module.exports = multer({storage: storage})