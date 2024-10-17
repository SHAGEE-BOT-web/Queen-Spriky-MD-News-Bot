const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'gitVURgJ#NG2oOiuAw9h9WQtSxldOglb-LynI_AmPoOr58h-jZGE', // Enter Your Session ID
    MONGODB: process.env.MONGODB || 'mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority',    // Enter Your MongoDB URL
    Owner: process.env.OwnerNumber || '94710136994',    // Enter Your Owner Number
    BotNumber: process.env.BotNumber || '94710136994'    // Enter Your Bot Number
};
