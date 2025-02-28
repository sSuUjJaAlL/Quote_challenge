

function globalErrorHandler(err,req,res,next) {
    return res.status(500).json({
        message : `Error in ${req.url}`,
        error : err.message
    })
}

export {
    globalErrorHandler
}