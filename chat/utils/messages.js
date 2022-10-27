const moment =require('moment');

function formatMessage(username, textMessage){
    return{
        username:username,
        textMessage:textMessage,
        time: moment().format('h:mm a')
    }
}

module.exports=formatMessage;