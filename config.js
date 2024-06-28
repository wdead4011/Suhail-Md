const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "https://cloud.mongodb.com/v2#/org/667e1503d6a3162ab9d4af49/projects"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94721640007";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "ture"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,94721640007";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "94721640007";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_57_06_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjA2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDksXG4gICAgICAgIDczLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwLFxuICAgICAgICA5LFxuICAgICAgICAxODMsXG4gICAgICAgIDYzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDExMixcbiAgICAgICAgMjcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODcsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDM4LFxuICAgICAgICA0NCxcbiAgICAgICAgMjksXG4gICAgICAgIDE3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTExLFxuICAgICAgICAyLFxuICAgICAgICA4MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjU0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODEsXG4gICAgICAgIDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODcsXG4gICAgICAgIDYzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDg1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDQsXG4gICAgICAgIDI5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyMixcbiAgICAgICAgNTgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjM3LFxuICAgICAgICA2MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzksXG4gICAgICAgIDM1LFxuICAgICAgICAxLFxuICAgICAgICAxNixcbiAgICAgICAgMTc4LFxuICAgICAgICAxODIsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgODEsXG4gICAgICAgIDMzLFxuICAgICAgICA5MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTksXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMixcbiAgICAgICAgMTE1LFxuICAgICAgICAwLFxuICAgICAgICAzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTI5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4NSxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ0LFxuICAgICAgICAxLFxuICAgICAgICA4MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDMwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDg4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxODEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDQ5LFxuICAgICAgICA3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTYzLFxuICAgICAgICA2MyxcbiAgICAgICAgODYsXG4gICAgICAgIDY1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODksXG4gICAgICAgIDEsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjksXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiL1pOcXA5TGJSNlBlclhQR3p0aW5PWXdHaVR0SVJPeGhLaU5PSjM1ei8xYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQlRKUG1NN01UMTZHMGQwSWJBbnNkd1wiLFxuICBcInBob25lSWRcIjogXCJlMzYzZWVkMi04ODQ5LTQxMmYtYWMwOS00MmE4ODI5MTEyNWJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc0LFxuICAgICAgMjM2LFxuICAgICAgMTg4LFxuICAgICAgMjQxLFxuICAgICAgNTAsXG4gICAgICAyMDEsXG4gICAgICAxMjgsXG4gICAgICAxMTcsXG4gICAgICA3MSxcbiAgICAgIDIyNSxcbiAgICAgIDk2LFxuICAgICAgODQsXG4gICAgICAxMjMsXG4gICAgICAxMSxcbiAgICAgIDE2OSxcbiAgICAgIDE1LFxuICAgICAgMTM4LFxuICAgICAgODQsXG4gICAgICAxNjIsXG4gICAgICAxMDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM3LFxuICAgICAgODcsXG4gICAgICAxMDUsXG4gICAgICAxNjgsXG4gICAgICAxMDMsXG4gICAgICAyMjEsXG4gICAgICA1NSxcbiAgICAgIDE4OSxcbiAgICAgIDEwOCxcbiAgICAgIDExNCxcbiAgICAgIDI1MyxcbiAgICAgIDExNyxcbiAgICAgIDE5NCxcbiAgICAgIDE0NyxcbiAgICAgIDEyOCxcbiAgICAgIDIwLFxuICAgICAgMjQ1LFxuICAgICAgMjUyLFxuICAgICAgNjQsXG4gICAgICAxMTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiM0oyWFhISzJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzIxNjQwMDA3OjI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMjY5MTI0MjQ4NTc3NzU6MjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHFHM0pjR0VJQ3grTE1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ6a2I2TGxGMGdYa09ZUmhMTEltVzJjei9DYnpaVzVFOTdvSWxLWklYZWs0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjN4ZWhuWVpYMU1wb2JUcS90S25GRm9kdkpmR09SSDV6b290MDNCSVpWYUdaZHE3MDRSVzdNY0IxdjFzaTJHaFU5YzRPcEYrT21OWVZBK2tMekJGV0NnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlNyZ2c5ZDVMQWlvcExGUXRsRDFxTkVUVy94VHVZb3IrMnhFWWc2aEVvempQQndnMy9kN1NqK25sdnZDZ2lpTHErQ0dCVVZRQzdXU2wvYWYrUFc1UGhRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzIxNjQwMDA3OjI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk1Mzk4NDMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFaCtcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVoKy5qc29uIjogIntcImtleURhdGFcIjpcIlV2ZGpJOGtVMDBMVVkrODdFV0xldndLU0RQT2hYRGc1OFpRTnY1RzRnL2c9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTY2MDM1NTQ1MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE5NTM5ODQ4MjY5XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "NETHUM__×",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
