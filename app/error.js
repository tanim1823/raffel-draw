const notFoundHandler = (_req , _res , next) =>{
    const error =  new Error("Resourse not found.");
    error.status = 404;
    next(error);
}

const errorHandler = (error , _req , res , _next) =>{
    if(error.status){
        res.status(error.status).json({
            message: error.message,
            statusCode: error.status
        })
    }else{
        
        res.status(500).json({
            message: error.message || "Something Wrong.",
            statusCode: 500
        })
    }
}

module.exports = {
    notFoundHandler,
    errorHandler
}