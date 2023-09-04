/**
 * 
 * @param {{object}} res 
 * @param {number} statusCode 
 * @param {{nessage: string}} payload 
 * @returns 
 */
const response = function(res ,statusCode ,payload ){
    
    return res.status(statusCode).json(payload)
}

module.exports = {
    response
}