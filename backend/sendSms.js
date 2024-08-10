const twilio = require('twilio');

async function sendSms(phone,message){
    try{
        
        const twilioClient = new twilio(process.env.TWILIO_ACCOUNT_SID,process.env.TWILIO_AUTH_TOKEN);
        await twilioClient.messages.create({
        body:message,
        to:phone,
        from:process.env.TWILIO_PHONE_NUMBER
        });

        console.log("SMS sended")
    }
    catch(e){
        console.log("Error ",e);
    }

}

module.exports=sendSms;