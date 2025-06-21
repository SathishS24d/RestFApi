

//request body validation middleware
export default function userRequestDataValidation(req,res,next){
   
    const {firstName,lastName,hobby} = req.body; //destructring all request data
    try {
        if( firstName && lastName && hobby){    //check all feild are given or not
           return next();     //proceed 
        }

        //return information message with status code
        return res.status(400).json({
            message:"firstName,lastName and hobby all are required field"
        })
      
    } catch (error) {
         
        //send internsal server error message
          return res.status(500).json({
            message:"Internal server error"
        })
    }
}