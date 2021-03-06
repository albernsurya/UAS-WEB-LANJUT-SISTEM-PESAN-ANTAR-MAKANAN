const jwt = require('jsonwebtoken')
const mysql = require('./dbconfig')
const auth = (req,res,next)=>{
    if(
        req.headers['authorization'] && 
        req.headers['authorization'].startsWith('Bearer')
        ){
            const jwt_token = req.headers['authorization'].substr(7)
            req.headers.auth_token=jwt_token
            mysql.execute('SELECT token FROM revoked_token where token=? and is_revoked=1',[jwt_token],
            (err,result, field)=>{
                if(err){
                    res.send({
                        success:false,
                        msg: err
                    })
                }else{
                    if(result.length > 0){
                        res.send({
                            success:false,
                            msg: 'token expired'
                        })
                    }else{
                        try{
                            const user=jwt.verify(jwt_token,process.env.APP_KEY)
                            next()
                        }catch(e){
                            res.send({success:false,msg:e})
                        }
                    }
                }
            })
        }else{
            res.send({success:false,msg:'silahkan login dahulu'})

        }
}

const admin = (req,res,next)=>{
    const {id_role} = req.headers
    if(id_role == '1'|| id_role == '2'|| id_role == '3'){
        next()
    }else{
        res.send({success:false,msg:'akses ditolak'})
    }
}

const restaurant = (req,res,next)=>{
    const {id_role} = req.headers
    if(id_role == '1' || id_role == '2'){
        next()
    }else{
        res.send({success:false,msg:'akses ditolak'})
    }
}

const customer = (req,res,next)=>{
    const {id_role} = req.headers
    if(id_role == '1' || id_role == '3'){
        next()
    }else{
        res.send({success:false,msg:'akses ditolak'})
    }
}

const allusers = (req,res,next)=>{
    const {id_role} = req.headers
    if( id_role == '1' || id_role == '2' || id_role == '3'){
        next()
    }else{
        res.send({success:false,msg:'akses ditolak'})
    }
}

module.exports={auth, admin,restaurant,customer,allusers}
