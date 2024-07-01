const multer =require('multer') ;
const path =require('path');

const storage =multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,path.join(__dirname,'../files')) ;
    } ,
    filename:(req,file,cb)=>{
        cb(null,Date.now()+'_'+file.originalname) ;
    }
})


const AppMulter=multer({
                storage:storage,
                limits: {
                    fileSize: 20000000 // 1MB
                  },
                fileFilter:(req,file,cb)=>{
                    const allowedTypes = ['image/jpeg','image/jpg', 'image/png', 'image/gif'];
                     if (!allowedTypes.includes(file.mimetype)) {
                       const error = new Error('Invalid file type');
                       error.code = 'INVALID_FILE_TYPE';
                       return cb(error, false);
                     }
                     cb(null, true);
                } 
                
                }) ;

module.exports=AppMulter ;