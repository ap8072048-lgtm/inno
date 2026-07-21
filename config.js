require('dotenv').config();
const fs = require('fs');
const chalk = require('chalk');

// Contact details
global.sessionid = process.env.SESSION_ID || '{"noiseKey":{"private":{"type":"Buffer","data":"oGn2iuYU1zM/avHbgAYzaV+XYFou5HypNHD88qFunWc="},"public":{"type":"Buffer","data":"zCRU22itNGD26UGvAG8oJRLav2p3sNRwQtY57S+iHjw="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"iCyzcbW3ps7bGII+fYVRNCvX0Mc38ku//ZdL7x9DIFc="},"public":{"type":"Buffer","data":"jTSwwelKShV34grR5NHNV+b6ARPmGGbRqEa9Dx2nx1Y="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"YCNgO9dLUjXu0s33zuXIMfFSTno6bzzr5dJLZKvmynU="},"public":{"type":"Buffer","data":"SCE7RCYt+i7ZqlLM5jAoJOD6YnVbg2fjuOMQ7GgmKyQ="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"yCFOi9pJZ2x8/4y8zyvg2wMncxP6EOtpXaA5m1IFyn4="},"public":{"type":"Buffer","data":"wQI3VD15yxFAQrkwKAMrG+tm6F9NJg/Dsh5f/kWRO1I="}},"signature":{"type":"Buffer","data":"dVqfaeXc3xYOyYwQ6H3epAiWB6WmJ/qPI0KcqxkYhZpxSfpNpYKWzoyzt3nBXBlmqM+5qdmOoN1i1iC7vylAhQ=="},"keyId":1},"registrationId":229,"advSecretKey":"iw1ufW88gE1VYCY9ip3IfSu0+ppexrUE3nDsJeLwhyo=","processedHistoryMessages":[],"nextPreKeyId":32,"firstUnuploadedPreKeyId":32,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"registered":true,"pairingCode":"UT6U3V4E","me":{"id":"255690240008:23@s.whatsapp.net","lid":"202701669454060:23@lid","name":"Madykhan"},"account":{"details":"CKr+idsHEOyI/tIGGAEgACgA","accountSignatureKey":"8LVIvX52mP/jyQHsLFYcivxY77qY0cZOm8HhxFLdrx0=","accountSignature":"27fnZ75ZCXgz/O7kTceP3covbVuqUzhgH/AdtrJ+JrbmIn6xD2epCZvsQe5oiZcngYpdyAJyyT3XBv5aA5GnAw==","deviceSignature":"zZEZYmxbqnmrY5NuCU9DbVCXUqjDJA/B7z/vHbPCfaU4TyZ53pqTM99GPRVAOjewS/OMhzbt8Z0JMGap3p1Rgw=="},"signalIdentities":[{"identifier":{"name":"255690240008:23@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BfC1SL1+dpj/48kB7CxWHIr8WO+6mNHGTpvB4cRS3a8d"}}],"platform":"android","routingInfo":{"type":"Buffer","data":"CA0IEggC"},"lastAccountSyncTimestamp":1784644728,"myAppStateKeyId":"AAAAAOj4"}';
global.ytname = process.env.YT_NAME || "YT: @EliteProTechs";
global.socialm = process.env.SOCIAL_M || "GitHub: EliteProTech";
global.location = process.env.LOCATION || "Nigeria, Port Harcourt";

// Creator details
global.ownernumber = process.env.OWNER_NUMBER || '2347047504860';
global.ownername = process.env.OWNER_NAME || 'ElitePro';
global.botname = process.env.BOT_NAME || 'ELITE-PRO-V1';

// Default settings 
global.prefix = process.env.PREFIX || '.';
// Settings: true=enable false=disable
global.autoRecording = process.env.AUTO_RECORDING === 'true';
global.autoTyping = process.env.AUTO_TYPING === 'true';
global.autorecordtype = process.env.AUTO_RECORD_TYPE === 'true';
global.autoread = process.env.AUTO_READ === 'true';
global.autobio = process.env.AUTO_BIO !== 'false';
global.autoviewstatus = process.env.AUTO_VIEW_STATUS !== 'false';
global.welcome = process.env.WELCOME !== 'false';
global.autoreact = process.env.AUTO_REACT === 'true';
global.autolikestatus = process.env.AUTO_LIKE_STATUS === 'true';
global.autoOffline = process.env.AUTO_OFFLINE === 'true'

// Default emoji
global.themeemoji = process.env.THEME_EMOJI || '👨‍💻';


// Sticker details
global.packname = process.env.PACKNAME || 'Sticker By';
global.author = process.env.AUTHOR || 'EliteProTech\n\nContact: +2347047504860';
// Default settings 2
global.wm = process.env.WM || "Youtube @EliteProTechs";
global.link = process.env.LINK || 'https://whatsapp.com/channel/0029VaXaqHII1rcmdDBBsd3g';

// Reply messages
global.mess = {
    done: '✅ Task completed successfully!',
    prem: '⚠️ Access denied. This feature is for premium users only.',
    admin: '⚠️ Admin privileges required to perform this action.',
    botAdmin: '⚠️ I need to be an admin in this chat to execute this command.',
    owner: '⛔ Command restricted to the bot owner.',
    group: 'ℹ️ This command can only be used in group chats.',
    private: 'ℹ️ This command can only be used in private chats.',
    wait: '⏳ Processing your request... Please wait a moment.',
    error: '❌ An unexpected error occurred. Please try again later.',
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`Update'${__filename}'`));
    delete require.cache[file];
    require(file);
});
