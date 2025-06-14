const TelegramBot = require("node-telegram-bot-api");
const express = require("express");
require("dotenv").config();
// add your token in .env or add directly here.
const TOKEN = process.env.TOKEN || ""; 

if (!TOKEN) {
  console.error("Bot token is missing! Please set TOKEN in .env or environment variables.");
  process.exit(1);
}
const bot = new TelegramBot(TOKEN, { polling: true });
const app = express();
const PORT = process.env.PORT || 3000;
//your grouo or channel link
const GROUP_LINK = "https://t.me/delhi_police_yakeen_batch_free";

// add your tokens here 
const tokens = [
  {
    name: "ʏᴀᴋᴇᴇɴ ʙᴀᴛᴄʜ ᴅᴘ", subTokens: [
      //these are subtoken
      { name: "ᴅᴘ ᴄᴏɴꜱᴛᴀʙʟᴇ ʙᴀᴛᴄʜ", value: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjQyMTE3MTUiLCJlbWFpbCI6Imt1OTY5MDg0NUBnbWFpbC5jb20iLCJ0aW1lc3RhbXAiOjE3MzcxMTUxOTgsInRlbmFudFR5cGUiOiJ1c2VyIiwidGVuYW50TmFtZSI6IiIsInRlbmFudElkIjoiIn0.GL6Oj7LBdeyeZANhGjD4fpAhE_OwNfOeotChBCI7-z0:4211715@MadXABhi_Robot 
" },
      { name: "ᴅᴘ ʜᴇᴀᴅ ᴄᴏɴꜱᴛᴀʙʟᴇ", value: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjM3ODQ1MjkiLCJlbWFpbCI6ImFuYW5ka3VtYXI2Mzk1OTQ0MTM0QGdtYWlsLmNvbSIsInRpbWVzdGFtcCI6MTczNjM1Mjc2NywidGVuYW50VHlwZSI6InVzZXIiLCJ0ZW5hbnROYW1lIjoiIiwidGVuYW50SWQiOiIifQ.iP-x7sSbu7FjXiybw-5hZZBXb4TniGlk3X18gMnnL0U:3784529@MadXABhi_Robot
" },
      { name: "ᴅᴘ ᴅʀɪᴠᴇʀ ʙᴀᴛᴄʜ", value: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjE2NzkxMDAiLCJlbWFpbCI6InJhdmlrdW5kdTU2NUBnbWFpbC5jb20iLCJ0aW1lc3RhbXAiOjE3Mzc2MTE3NTYsInRlbmFudFR5cGUiOiJ1c2VyIiwidGVuYW50TmFtZSI6IiIsInRlbmFudElkIjoiIn0.qiCmRpfNoCi--mtp0cRKxv1c-VovLhZi59tL_qRWD6w:1679100 h@MadXABhi_Robot
" },
      { name: "ᴅᴘ ᴀᴡᴏ & ᴛᴘᴏ ʙᴀᴛᴄʜ", value: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjM0MzY1ODEiLCJlbWFpbCI6InByaXRhbTk1ODgwM0BnbWFpbC5jb20iLCJ0aW1lc3RhbXAiOjE3MjgxMTYzNjl9.MxNXBpIeOaWj4ygj5emvUufCjCL2Yh_onghBWXkR0jY:3756183@MadXABhi_Robot
" },
      { name: "ᴅᴘ ᴄᴏᴍʙᴏ ʙᴀᴛᴄʜ", value: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjE2NzkxMDAiLCJlbWFpbCI6InJhdmlrdW5kdTU2NUBnbWFpbC5jb20iLCJ0aW1lc3RhbXAiOjE3Mzc2MTE3NTYsInRlbmFudFR5cGUiOiJ1c2VyIiwidGVuYW50TmFtZSI6IiIsInRlbmFudElkIjoiIn0.qiCmRpfNoCi--mtp0cRKxv1c-VovLhZi59tL_qRWD6w:1679100 h@MadXABhi_Robot
" }
    ]
  },
  //add all your tokens or leave blank add batch name and token values.
  { name: "ɢʀᴏᴜᴘ ᴅ ᴀɴᴅ ɴᴛᴘᴄ (ɢᴀᴛɪᴍᴀᴀɴ)", value: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjgyMzI4NDgiLCJlbWFpbCI6ImFuamFsaWJoYXRpOTY5NkBnbWFpbC5jb20iLCJ0aW1lc3RhbXAiOjE3MjczNjkwMjd9.1GUG_5NTgyb9MpD1AftEjKaNHTIhOllGu5uYxQo4Cog:8232848@MadXABhi_Robot
" },
  { name: "ʏᴏᴅʜᴀ ʙᴀᴛᴄʜ 2.ᴏ (ᴀʀᴍʏ)", value: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Ijc0MDIzNDIiLCJlbWFpbCI6ImphYXRqYWF0Ym95ODI0QGdtYWlsLmNvbSIsInRpbWVzdGFtcCI6MTc0MjIyMTMwNiwidGVuYW50VHlwZSI6InVzZXIiLCJ0ZW5hbnROYW1lIjoiIiwidGVuYW50SWQiOiIiLCJkaXNwb3NhYmxlIjpmYWxzZX0.YRKv5TGee50_4QHopsKc4yOe2UJtgrmsIxiZz4pjyhQ:7402342@MadXABhi_Robot
" },
  { name: "ᴍᴀᴛʜꜱ ᴀɴᴅ ʀᴇᴀꜱ. ꜰᴏᴜɴᴅᴀᴛɪᴏɴ", value: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjUzNzA0ODQiLCJlbWFpbCI6InNoYXJtYXNoaXZhbTk3ODk1QGdtYWlsLmNvbSIsInRpbWVzdGFtcCI6MTc0MjIyMTczMywidGVuYW50VHlwZSI6InVzZXIiLCJ0ZW5hbnROYW1lIjoiIiwidGVuYW50SWQiOiIiLCJkaXNwb3NhYmxlIjpmYWxzZX0.Cw-54FOkjbvFF3LeB4BUh7O67s7h91y7bQys3o6F7SQ:5370484@MadXABhi_Robot
" },
  { name: "ᴍᴀᴛʜꜱ ᴍᴀʜᴀᴋᴜᴍʙʜ", value: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjM5NDU1OTkiLCJlbWFpbCI6ImthcHJpaGVtODAxQGdtYWlsLmNvbSIsInRpbWVzdGFtcCI6MTc0MjAzNDI3OSwidGVuYW50VHlwZSI6InVzZXIiLCJ0ZW5hbnROYW1lIjoiIiwidGVuYW50SWQiOiIiLCJkaXNwb3NhYmxlIjpmYWxzZX0.nGqFhgwtWsu4ejoPXbXgn54Drbev1pC8jn1GZpTP2lM:3945599@MadXABhi_Robot
" },
  { name: "ᴘᴀʀᴍᴠᴇᴇʀ ɴᴅᴀ", value: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjY5NzM2MzciLCJlbWFpbCI6Im1vbnR5eWFkYXY4NTdAZ21haWwuY29tIiwidGltZXN0YW1wIjoxNzM1OTczMTA3LCJ0ZW5hbnRUeXBlIjoidXNlciIsInRlbmFudE5hbWUiOiIiLCJ0ZW5hbnRJZCI6IiJ9.reSnstmer9IiysvP8OauYlaHSiDRAwvQdplQoR5FA0g:6973637@MadXABhi_Robot
" },
  { name: "📍ᴜᴘꜱɪ ᴠɪɴᴀʏᴀᴋ 2.ᴏ", value: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjI4NDc1MjgiLCJlbWFpbCI6InJham5pc2hrdW1hcmdvbmRnb25kQGdtYWlsLmNvbSIsInRpbWVzdGFtcCI6MTcyNTQyNDU0NH0.pGx2f5sxDsT8b70tj7KjFioH-o-sryvP7sxzE43OiSY:2847528@MadXABhi_Robot
" },
  { name: "ɴᴀᴠʏ+ᴀɪʀꜰᴏʀᴄᴇ+ɪᴄɢ", value: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjQ5Mjk4MTkiLCJlbWFpbCI6InlvZ2VzaHJhZ2hhdjUzOUBnbWFpbC5jb20iLCJ0aW1lc3RhbXAiOjE3NDI4MTkwNDIsInRlbmFudFR5cGUiOiJ1c2VyIiwidGVuYW50TmFtZSI6IiIsInRlbmFudElkIjoiIiwiZGlzcG9zYWJsZSI6ZmFsc2V9.LpPF2QwAIWAv0-HcoSSaeCA6zUJI8hyowlnYJKdX3XM:4929819@MadXABhi_Robot
" },
  { name: "12ᴛʜ ʙᴏᴀʀᴅ (ᴛᴏᴘᴘᴇʀꜱ)", value: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjQ4ODcxMzYiLCJlbWFpbCI6InJhaHVsYmFnaGVsNTQ1NzZAZ21haWwuY29tIiwidGltZXN0YW1wIjoxNzQyNzI4MDgxLCJ0ZW5hbnRUeXBlIjoidXNlciIsInRlbmFudE5hbWUiOiIiLCJ0ZW5hbnRJZCI6IiIsImRpc3Bvc2FibGUiOmZhbHNlfQ.KR--iyTbb3MGke8J3W5QTB6IzAgkU7rbXKKCdjbYyhM:4887136@MadXABhi_Robot
" },
  { name: "ʙꜱꜰ ʜᴄᴍ ᴀɢɴɪ",
value: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjM0MzY1ODEiLCJlbWFpbCI6InByaXRhbTk1ODgwM0BnbWFpbC5jb20iLCJ0aW1lc3RhbXAiOjE3MjgxMTYzNjl9.MxNXBpIeOaWj4ygj5emvUufCjCL2Yh_onghBWXkR0jY:3756183@MadXABhi_Robot
"},
  { name: "🛡️ɴᴇᴇᴛ ᴘʀᴀʀᴀᴍʙʜ ʙᴀᴛᴄʜ",
value: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjM3ODY4MTciLCJlbWFpbCI6InJhbWVzaHdhcmRheWFsNTg0MzhAZ21haWwuY29tIiwidGltZXN0YW1wIjoxNzQyODMxOTU3LCJ0ZW5hbnRUeXBlIjoidXNlciIsInRlbmFudE5hbWUiOiIiLCJ0ZW5hbnRJZCI6IiIsImRpc3Bvc2FibGUiOmZhbHNlfQ.onjdrdES5kNZzx6dmm7RF8ggKke5nHH-zoYZ1OpFMDM:3786817@MadXABhi_Robot
"},
  { name: "🛡️ꜱᴀɢᴀʀ ʙᴀᴛᴄʜ ɴᴀᴠʏ",
value: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjQ5Mjk4MTkiLCJlbWFpbCI6InlvZ2VzaHJhZ2hhdjUzOUBnbWFpbC5jb20iLCJ0aW1lc3RhbXAiOjE3NDI4MTkwNDIsInRlbmFudFR5cGUiOiJ1c2VyIiwidGVuYW50TmFtZSI6IiIsInRlbmFudElkIjoiIiwiZGlzcG9zYWJsZSI6ZmFsc2V9.LpPF2QwAIWAv0-HcoSSaeCA6zUJI8hyowlnYJKdX3XM:4929819@MadXABhi_Robot
" },
  { name: "🛡️ʀᴘꜰ ꜱɪ ᴀɴᴅ ᴄᴏɴꜱᴛᴀʙʟᴇ",
   value: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjYzODgwMDEiLCJlbWFpbCI6Im5pc2hhbnRrYXVzaGlrODIwNzRjaGFAZ21haWwuY29tIiwidGltZXN0YW1wIjoxNzE0Mjk1OTkxfQ.BIcEIi1fRO2EEfClBEWzLOdAcC7Z5HaMmB-n5UsnAUU:2305967@MadXABhi_Robot
" },
  { name: "📍ɢʀᴀᴍɪɴ ʙᴀɴᴋ (ᴄʜᴀᴜᴘᴀʟ)",
  value: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjE4OTk0NDciLCJlbWFpbCI6IlVwYWRoeWF5cHJlbWNoYW5kMzBAZ21haWwuY29tIiwidGltZXN0YW1wIjoxNzQ0MDE5MDI4LCJ0ZW5hbnRUeXBlIjoidXNlciIsInRlbmFudE5hbWUiOiIiLCJ0ZW5hbnRJZCI6IiIsImRpc3Bvc2FibGUiOmZhbHNlfQ.uiAPP_7J244uzKwTCPSKBS1iAR05tD2KQoYmx79DpFk:1899447@MadXABhi_Robot
"},
{ name: "🪬 ᴅɪᴡᴀɴ ᴊɪ ᴜᴘᴘ",
   value: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjU1MzI5MDkiLCJlbWFpbCI6ImFiaGk3NjE4NjQ3NDgwQGdtYWlsLmNvbSIsInRpbWVzdGFtcCI6MTc0NDA4NzY1NywidGVuYW50VHlwZSI6InVzZXIiLCJ0ZW5hbnROYW1lIjoiIiwidGVuYW50SWQiOiIiLCJkaXNwb3NhYmxlIjpmYWxzZX0.1dgBv1XhzonzxvUCvncBw3dl0qPnVh2tBRYrx2dtPT4:5532909@MadXABhi_Robot
" },
{ name: "ᴠᴇᴇʀ ʙʜᴜᴍɪ ʀᴊ 4ᴛʜ ɢʀᴀᴅᴇ",
   value: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjQ4OTEzNjciLCJlbWFpbCI6InNoZW9yYW5oMDBAZ21haWwuY29tIiwidGltZXN0YW1wIjoxNzQ0MDkyOTk5LCJ0ZW5hbnRUeXBlIjoidXNlciIsInRlbmFudE5hbWUiOiIiLCJ0ZW5hbnRJZCI6IiIsImRpc3Bvc2FibGUiOmZhbHNlfQ.-NMIzSQLug7PK2vCsrwGjN0nZ1UONcSbhLfr0c2WdDY:4891367@MadXABhi_Robot
" },
{ name: "📍ᴄᴜᴇᴛ ᴜɢ 2025",
   value: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Ijc5ODczNTQiLCJlbWFpbCI6InNhbmp1c2hhcm1hMjg2OEBnbWFpbC5jb20iLCJ0aW1lc3RhbXAiOjE3NDQxODA4ODgsInRlbmFudFR5cGUiOiJ1c2VyIiwidGVuYW50TmFtZSI6IiIsInRlbmFudElkIjoiIiwiZGlzcG9zYWJsZSI6ZmFsc2V9.E52O1aHYB8v3y8rx6EfSViMhCDriFOFofhCAW39molo:7987354@MadXABhi_Robot
" },
{ name: "📍 ʙɪʜᴀʀ ᴘᴏʟɪᴄᴇ ɴᴀʟᴀɴᴅᴀ",
   value: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Ijk1NDQyOTAiLCJlbWFpbCI6InNvbmFtODY1MTk3QGdtYWlsLmNvbSIsInRpbWVzdGFtcCI6MTc0NDUyNzU0MiwidGVuYW50VHlwZSI6InVzZXIiLCJ0ZW5hbnROYW1lIjoiIiwidGVuYW50SWQiOiIiLCJkaXNwb3NhYmxlIjpmYWxzZX0.HOXnTx0nYl-g43cIFEKyt1OQpAeA-hQgJTOlp45nBCc:9544290@MadXABhi_Robot
" },
{ name: "📍 ꜱꜱᴄ ɢᴅ ᴋᴀʀᴍᴀ",
   value: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjkxODUxMzEiLCJlbWFpbCI6InZlZXI0MzQzMTczQGdtYWlsLmNvbSIsInRpbWVzdGFtcCI6MTc0NDY0NTM2MywidGVuYW50VHlwZSI6InVzZXIiLCJ0ZW5hbnROYW1lIjoiIiwidGVuYW50SWQiOiIiLCJkaXNwb3NhYmxlIjpmYWxzZX0.8CKHiKSOw2T4qinCeGvEC0HGZYBs3nfxzrFMAFdzDJw:9185131@MadXABhi_Robot
" },
{ name: "📍 ʀʀʙ ᴀʟᴘ ᴘɪʟᴏᴛ",
   value: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjY4MTI3OTEiLCJlbWFpbCI6InByYWthc2hzYWluMTIwN0BnbWFpbC5jb20iLCJ0aW1lc3RhbXAiOjE3NDQ3MzEwODcsInRlbmFudFR5cGUiOiJ1c2VyIiwidGVuYW50TmFtZSI6IiIsInRlbmFudElkIjoiIiwiZGlzcG9zYWJsZSI6ZmFsc2V9.FPm-AzwyiHwI6Eb8BkNgrCdOQngzG1Jrhv6CwftBvu0:6812791@MadXABhi_Robot
" },
{ name: "📍 ꜱꜱᴄ ᴍᴛꜱ",
   value: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjU3MTE1NTUiLCJlbWFpbCI6ImxnNjU0NDc2QGdtYWlsLmNvbSIsInRpbWVzdGFtcCI6MTcyODYzMTIzNX0.L_juOAEB_z07Np17q0seGvOmCZHZzH5bcANdPMJqQJI:5711555@MadXABhi_Robot
" },
{ name: "ᴿᴶ ᴾᴼᴸᴵᶜᴱ 🚨",
   value: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjEwMjk3NzQ3IiwiZW1haWwiOiJoaXRlc2gwc2hlb3JhbkBnbWFpbC5jb20iLCJ0aW1lc3RhbXAiOjE3NDY2MjI3MzEsInRlbmFudFR5cGUiOiJ1c2VyIiwidGVuYW50TmFtZSI6InJvemdhcl9kYiIsInRlbmFudElkIjoiIiwiZGlzcG9zYWJsZSI6ZmFsc2V9.bUv9iQ0IZ4dK65BEIFkggt1Q1iyimLvQZK1avSgpss0:10297747@MadXABhi_Robot
" },
{ name: "ᴘᴏʟɪᴛᴇᴄʜɴɪᴄ सक्षम ♦️",
   value: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjkxODUxMzEiLCJlbWFpbCI6InZlZXI0MzQzMTczQGdtYWlsLmNvbSIsInRpbWVzdGFtcCI6MTc0NjYzMjc2MywidGVuYW50VHlwZSI6InVzZXIiLCJ0ZW5hbnROYW1lIjoicm96Z2FyX2RiIiwidGVuYW50SWQiOiIiLCJkaXNwb3NhYmxlIjpmYWxzZX0.NplFalnB0SWd8Hg9tbkKoKWYD9vdSJSYcFEi7Eox4T8:9185131@MadXABhi_Robot
" },
{ name: "ʜʀ ᴄᴇᴛ 🌟",
   value: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjEyNjg3NjgiLCJlbWFpbCI6InNvbnVzaGFybWE5ODEwNDhAZ21haWwuY29tIiwidGltZXN0YW1wIjoxNzQ1OTk2MjkyLCJ0ZW5hbnRUeXBlIjoidXNlciIsInRlbmFudE5hbWUiOiJyb3pnYXJfZGIiLCJ0ZW5hbnRJZCI6IiIsImRpc3Bvc2FibGUiOmZhbHNlfQ.29DqskOFVWr9SRPMr5NRxvKwSxOYnLzwcu0aqq4aDsY:1268768@MadXABhi_Robot
" },
{ name: "ᴜᴘꜱꜱꜱᴄ ᴘᴇᴛ 🤝",
   value: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjQxMTM4NDkiLCJlbWFpbCI6InZlcnI0MzQzMTczQGdtYWlsLmNvbSIsInRpbWVzdGFtcCI6MTc0NzQxNTY3NSwidGVuYW50VHlwZSI6InVzZXIiLCJ0ZW5hbnROYW1lIjoicm96Z2FyX2RiIiwidGVuYW50SWQiOiIiLCJkaXNwb3NhYmxlIjpmYWxzZX0.X9ur_RrOY4p2T5OVZ9fQ0Ch5vCgMHc6WTarSo-6lg_Q:4113849@MadXABhi_Robot
" },
{ name: "ᴄɪꜱꜰ ꜰɪʀᴇᴍᴀɴ 2024",
   value: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Ijg4ODQ3NDUiLCJlbWFpbCI6ImFjMTIwNjQwNUBnbWFpbC5jb20iLCJ0aW1lc3RhbXAiOjE3NDcyMzYzNjksInRlbmFudFR5cGUiOiJ1c2VyIiwidGVuYW50TmFtZSI6InJvemdhcl9kYiIsInRlbmFudElkIjoiIiwiZGlzcG9zYWJsZSI6ZmFsc2V9.E-qQXW195XcR6EKR2P2cR7mlV6qpequd6YIw75TyEDs:8884745@MadXABhi_Robot
" },
{ name: "ʀʀʙ ᴀʟᴘ ᴛᴇᴊᴀꜱ",
   value: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjU4MzU4MjMiLCJlbWFpbCI6Im5pc2hhbnQyNTA0MDFAZ21haWwuY29tIiwidGltZXN0YW1wIjoxNzQ5NzQ5NTEzLCJ0ZW5hbnRUeXBlIjoidXNlciIsInRlbmFudE5hbWUiOiJyb3pnYXJfZGIiLCJ0ZW5hbnRJZCI6IiIsImRpc3Bvc2FibGUiOmZhbHNlfQ.2p0OXp6P0Ech3GU8qocbMhD5iULIuFOi6OQdPdkjo3A:5835823@MadXABhi
" },
];

// add blocked users chat id or leave blank , these are demo not chat ids.
const bannedUsers = [1234567890,9876543210]; 

bot.on("message", (msg) => {
  if (bannedUsers.includes(msg.chat.id)) {
    bot.sendMessage(msg.chat.id, "🚫 You are blocked! You cannot use this bot.");
    return; 
  }

  bot.emit("allowed_message", msg);
});

// add your channel or group 
bot.on("allowed_message", (msg) => {
  if (msg.text === "/start") {
    bot.sendMessage(msg.chat.id, 
      "👋 ʜᴇʏ ᴀꜱᴘɪʀᴀɴᴛꜱ! 🚀 ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ ʏᴏᴜʀ ᴜʟᴛɪᴍᴀᴛᴇ ʜᴜʙ ꜰᴏʀ ɢᴏᴠᴛ. ᴊᴏʙ ᴘʀᴇᴘᴀʀᴀᴛɪᴏɴ—ꜱᴛᴀʏ ꜰᴏᴄᴜꜱᴇᴅ, ꜱᴛᴀʏ ᴀʜᴇᴀᴅ! 📚💪\nꜰᴏʀ ᴄᴏɴᴛᴀᴄᴛ 📬 ᴜꜱᴇ /help . \nᴊᴏɪɴ ᴏᴜʀ ɢʀᴏᴜᴘ ꜰᴏʀ ᴜᴘᴅᴀᴛᴇꜱ ♻️\n\n[𝘼𝙎 𝙈𝙐𝙇𝙏𝙄𝙑𝙀𝙍𝙎𝙀](https://github.com/Popeye68/As-Multiverse-Token/)", 
      {
        parse_mode: "Markdown",
        disable_web_page_preview: true,
        reply_markup: {
          inline_keyboard: [
            [{ text: "JOIN CHANNEL 🚀", url: https://t.me/delhi_police_yakeen_batch_free }],
            [{ text: "GET TOKEN 🛠️", callback_data: "GET_TOKEN" }]
          ]
        }
      }
    );
  }
});

// Handle the "Get Token" button click
bot.on("callback_query", (query) => {
  if (bannedUsers.includes(query.message.chat.id)) {
    bot.answerCallbackQuery(query.id, { text: "🚫 You are blocked!", show_alert: true });
    return; // Stop execution for blocked users
  }

  if (query.data === "GET_TOKEN") {
    bot.sendMessage(query.message.chat.id, "⚠️ USE THIS COMMAND TO GET YOUR TOKEN. /token");
  }
});

// /token command - Show Rwa tokens (2 per row)
bot.onText(/\/token/, (msg) => {
  const chatId = msg.chat.id;

  // Check if user is banned
  if (bannedUsers.includes(chatId)) {
    return bot.sendMessage(chatId, "🚫 You are blocked! You cannot use this bot.");
  }

  let inlineKeyboard = [];
  let row = [];

  tokens.forEach((token, index) => {
    row.push({ text: token.name, callback_data: `TOKEN_${index}` });

    if (row.length === 2 || index === tokens.length - 1) {
      inlineKeyboard.push(row);
      row = [];
    }
  });
// add your channel or group 
  bot.sendMessage(chatId, "📌 *ʜᴇʀᴇ ᴀʀᴇ ᴀʟʟ ᴀᴠᴀɪʟᴀʙʟᴇ ᴛᴏᴋᴇɴꜱ ꜰᴏʀ ʏᴏᴜ\nᴇᴠᴇʀʏᴛʜɪɴɢ ɪꜱ 1000% ꜰʀᴇᴇ ʙʏ ᴍᴀᴅxᴀʙʜɪ*\n[𝘼𝙎 𝙈𝙐𝙇𝙏𝙄𝙑𝙀𝙍𝙎𝙀](https://github.com/Popeye68/As-Multiverse-Token/)", {
    parse_mode: "Markdown",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: inlineKeyboard },
  });
});

bot.on("callback_query", async (query) => {
  const chatId = query.message.chat.id;

  if (bannedUsers.includes(chatId)) {
    return bot.answerCallbackQuery(query.id, { text: "🚫 You are blocked!", show_alert: true });
  }

  const index = parseInt(query.data.replace("TOKEN_", ""), 10);
  const selectedToken = tokens[index];

  if (!selectedToken) return;

  if (selectedToken.subTokens) {
    let subButtons = selectedToken.subTokens.map((sub, i) => [{ 
      text: sub.name, callback_data: `SUBTOKEN_${index}_${i}` 
    }]);

    bot.sendMessage(chatId, "🔽 Choose a category:", {
      reply_markup: { inline_keyboard: subButtons },
    });
  } else {
    await bot.sendMessage(chatId, `ʜᴇʀᴇ ɪꜱ ʏᴏᴜʀ ᴛᴏᴋᴇɴ 🔑 ꜰᴏʀ\n*${selectedToken.name}*`, { parse_mode: "Markdown" });

    setTimeout(() => {
      bot.sendMessage(chatId, `\`\`\`\n${selectedToken.value}\n\`\`\`WORKING✅  [𝘼𝙎 𝙈𝙐𝙇𝙏𝙄𝙑𝙀𝙍𝙎𝙀](https://github.com/Popeye68/As-Multiverse-Token/)`, { parse_mode: "MarkdownV2",disable_web_page_preview: true, });
    }, 200);
  }
});

bot.on("callback_query", async (query) => {
  if (!query.data.startsWith("SUBTOKEN_")) return;

  const chatId = query.message.chat.id;

  if (bannedUsers.includes(chatId)) {
    return bot.answerCallbackQuery(query.id, { text: "🚫 You are a blocked!", show_alert: true });
  }

  const parts = query.data.split("_");
  const mainIndex = parseInt(parts[1], 10);
  const subIndex = parseInt(parts[2], 10);

  const selectedSubToken = tokens[mainIndex].subTokens[subIndex];

  await bot.sendMessage(chatId, `🔑 ʜᴇʀᴇ ɪꜱ ʏᴏᴜʀ ᴛᴏᴋᴇɴ ꜰᴏʀ \n*${selectedSubToken.name}*`, { parse_mode: "Markdown" });

  setTimeout(() => {
    bot.sendMessage(chatId, `\`\`\`\n${selectedSubToken.value}\n\`\`\`[𝘼𝙎 𝙈𝙐𝙇𝙏𝙸𝙑𝙀𝙍𝙎𝙀](https://github.com/Popeye68/As-Multiverse-Token/)`, { parse_mode: "MarkdownV2",disable_web_page_preview: true, });
  }, 200);
});

const ADMIN_CHAT_ID = "7586496380"; // Replace with your actual admin chat ID

bot.onText(/\/help/, (msg) => {
  const chatId = msg.chat.id;

  // Check if user is banned
  if (bannedUsers.includes(chatId)) {
    return bot.sendMessage(chatId, "🚫 You are blocked! You cannot use this bot.");
  }

  const helpMessage = `
⚙️ *Bot Commands Help* ⚙️

🔹 /start - Begin interaction with the bot  
🔹 /token - Get your access tokens  
🔹 /help - View help information  
🔹 /apk - Get the apk files  
🔸 /cwtoken - Get Career Will Token  
🔸 /rgtoken - Get RG Vikramjeet Token  

[𝘼𝙎 𝙈𝙐𝙇𝙏𝙄𝙑𝙀𝙍𝙎𝙀](https://github.com/Popeye68/As-Multiverse-Token/)  

Bot 🤖 is still under development. If you have any issues, please contact support 🔥.
  `;

  bot.sendMessage(chatId, helpMessage, {
    parse_mode: "Markdown",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: [
        [{ text: "📞 Contact Admin", callback_data: "CONTACT_ADMIN" }]
      ]
    }
  });
});

// Handle the "Contact Admin" button click
bot.on("callback_query", (query) => {
  const chatId = query.message.chat.id;

  // Check if user is banned
  if (bannedUsers.includes(chatId)) {
    return bot.answerCallbackQuery(query.id, { text: "🚫 You are blocked!", show_alert: true });
  }

  if (query.data === "CONTACT_ADMIN") {
    bot.sendMessage(chatId, "📩 Please share your contact with the admin by clicking the button below.", {
      reply_markup: {
        keyboard: [
          [{ text: "📲 Share Contact", request_contact: true }]
        ],
        resize_keyboard: true,
        one_time_keyboard: true
      }
    });
  }
});

// Handle contact sharing and send to admin
bot.on("message", (msg) => {
  if (msg.contact) {
    const contactInfo = `📞 *New Contact Request*\n👤 Name: ${msg.contact.first_name} ${msg.contact.last_name || ""}\n📱 Phone: ${msg.contact.phone_number}\n🆔 User ID: ${msg.from.id}`;

    // Send contact info to the admin
    bot.sendMessage(ADMIN_CHAT_ID, contactInfo, { parse_mode: "Markdown" });

    bot.sendMessage(msg.chat.id, "✅ Your contact has been successfully shared with the admin. The admin will get back to you soon.", {
      reply_markup: { remove_keyboard: true }
    });
  }
});
// send you apk file to your bot and then forward it to @jsondumpbot, it will give you your file id.
const apkFiles = {
  apk1: { name: "Rojgar with ankit", file_id: "BQACAgUAAxkBAAEBRvZoMHYa8R7ve5FNuuaKtb6dq75w0gACDhoAArLoiFVKjX1FlNl0TTYE" },
 apk10: { name: "KD LIVE", file_id: "BQACAgUAAxkBAAEBk0xoTRFcvQKU7TI6ykNXQQQhpxZvFwACXRoAApk0kFRilAmZQDbWFzYE" },
  apk2: { name: " carrer will", file_id: "BQACAgUAAxkBAAEBZEBoOUdIWgFHSl85I4s-rF4HMTsaKwACRRcAArojyVX8GZipV31RlzYE" },
  apk3: { name: "classplus", file_id: "BQACAgUAAxkBAAEBk0RoTRFci4Xnbbie4M677hWBGgkKOAACVhoAApk0kFTzjRqQJw85ZDYE" },
  apk4: { name: "EDUCATION BABA", file_id: "BQACAgUAAxkBAAEBk0ZoTRFcomQKgmGxwDalv6DPT_8KJAACVxoAApk0kFTf_uPF6X61fjYE" },
  apk5: { name: "KGS", file_id:
"BQACAgUAAxkBAAEBbqtoPQ7swjs0I1Cpn2PCE7m2ee2HowACJBYAAjxn6VXpCyU4CTDArzYE" },
  apk6: { name: "PW", file_id: "BQACAgUAAxkBAAEBX25oN-i_50Yd_5CyrKF0ojJoxFfZRwAC3xUAAqjrwVWhERCF-loWUzYE" },
  apk7: { name: "RG VIKRAMJEET", file_id: "BQACAgUAAxkBAAEBk0loTRFc6kaK-8aznL46ztlkWdAjYwACWhoAApk0kFR4joM1MXpbiDYE" },
  apk8: { name: "VIDHYAKUL", file_id: "BQACAgUAAxkBAAEBk0poTRFcycCGctBigDkRnWc3Kl2jAANbGgACmTSQVOnF539jUE7ENgQ" },
  apk9: { name: "NEXT TOPPERS",
 file_id: "BQACAgUAAxkBAAEBgOpoQq0az2lty7cvSbETpUKa8gsIdgACbxsAApgQGVZyHjSYanpfaDYE"}
};

bot.onText(/\/apk/, (msg) => {
  const chatId = msg.chat.id;

  // Check if user is banned
  if (bannedUsers.includes(chatId)) {
    return bot.sendMessage(chatId, "🚫 You are blocked! You cannot use this bot.");
  }

  const keyboard = {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "📥 RWA", callback_data: "apk1" },
          { text: "📥 CLASS PLUS", callback_data: "apk2" }
        ],
        [
          { text: "📥 CAREER WILL", callback_data: "apk3" },
          { text: "📥 EDUCATION BABA", callback_data: "apk4" }
        ],
        [
          { text: "📥 KHAN GS", callback_data: "apk5" },
          { text: "📥 PHYSICS WALLAH", callback_data: "apk6" }
        ],
        [
          { text: "📥 RG VIKRAMJEET(update)", callback_data: "apk7" },
          { text: "📥 VIDHYAKUL", callback_data: "apk8" },
        ],
        [
          { text: "📥 NEXT TOPPERS", callback_data: "apk9" },
          { text: "📥 KD LIVE", callback_data: "apk10" },
        ]
      ]
    }
  };

  bot.sendMessage(chatId, "Select an APK to download:", keyboard);
});

// Handle button clicks
bot.on("callback_query", (callbackQuery) => {
  const chatId = callbackQuery.message.chat.id;
  const data = callbackQuery.data;

  // Check if user is banned
  if (bannedUsers.includes(chatId)) {
    return bot.answerCallbackQuery(callbackQuery.id, { text: "🚫 You are blocked!", show_alert: true });
  }

  if (apkFiles[data]) {
    bot.sendDocument(chatId, apkFiles[data].file_id, {
      caption: `APK NAME - ${apkFiles[data].name}\n\n[𝘼𝙎 𝙈𝙐𝙇𝙏𝙄𝙑𝙀𝙍𝙎𝙀](https://github.com/Popeye68/As-Multiverse-Token/)`,
      parse_mode: "Markdown"
    });
  }
});




// List of CW Tokens (Button Name & Actual Value)
const cwTokens = {
  token1: { name: "MATHS FOUNDATION", value: "token_value", image_id: "image_file_id" },
  token2: { name: "PEDAGODY+2", value: "token_value", image_id: "image_file_id" },
  token3: { name: "NTPC+ALP+2", value: "token_value", image_id: "image_file_id" },
  token4: { name: "STATIC+2", value: "token_value", image_id:"image_file_id"},
  token6: { name: "ENGLISH FOUNDATION+4", value: "token_value",image_id:"image_file_id"},
  token7: { name: "CURRENT AFFAIRS",value: "token_value", image_id: "image_file_id"},
  token8: {name: "GS + MATHS", value: "token_value", image_id: "image_file_id"},
  token9: {name: "REAS+CGL MAINS+MATH+ENGLIS+GD+9", value: "token_value", image_id: "image_file_id"}
};

// Command: /cwtoken
bot.onText(/\/cwtoken/, (msg) => {
  const chatId = msg.chat.id;

  if (bannedUsers.includes(chatId)) {
    return bot.sendMessage(chatId, "🚫 You are blocked! You cannot use this bot.");
  }
// you can modify text as you want.
  const keyboard = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "📜 MATHS FOUNDATION", callback_data: "token1" },
        { text: "📜 PEDAGODY+2", callback_data: "token2" }],
        [{ text: "📜 NTPC+ALP+2", callback_data: "token3" },
        {text: "📜 STATIC+2", callback_data: "token4"}],
        [{text: "📜 ENGLISH FOUNDATION+4", callback_data: "token6"},
        {text: "📜 CURRENT AFFAIRS", callback_data: "token7"}],
        [{text: "📜 GS + MATHS", callback_data: "token8"}],
        [{text: "👁️ REASONING+ENGLISH+GD+CGL+9", callback_data:"token9"}]
      ]
    }
  };

  bot.sendMessage(chatId, "SELECT A TOKEN TO VIEW IMAGE 🔮:", keyboard);
});

// Handle button clicks
bot.on("callback_query", (callbackQuery) => {
  const chatId = callbackQuery.message.chat.id;
  const data = callbackQuery.data;

  // Check if user is banned
  if (bannedUsers.includes(chatId)) {
    return bot.answerCallbackQuery(callbackQuery.id, { text: "🚫 You are blocked!", show_alert: true });
  }

  if (cwTokens[data]) {
    // Send Image First
    bot.sendPhoto(chatId, cwTokens[data].image_id, {
      caption: `HERE IS THE PREVIEW FOR \n*${cwTokens[data].name}*`,
      parse_mode: "Markdown",
      reply_markup: {
        inline_keyboard: [
          [{ text: "💡 SEE TOKEN", callback_data: `get_${data}` }]
        ]
      }
    });
  } else if (data.startsWith("get_")) {
    const tokenKey = data.replace("get_", "");
    if (cwTokens[tokenKey]) {
      bot.sendMessage(chatId, `*${cwTokens[tokenKey].name}*\n\`\`\`\n${cwTokens[tokenKey].value}\n\`\`\`WORKING✅   [𝘼𝙎 𝙈𝙐𝙇𝙏𝙄𝙑𝙀𝙍𝙎𝙀](https://github.com/Popeye68/As-Multiverse-Token/)`, {
        parse_mode: "Markdown", disable_web_page_preview: true,
      });
    }
  }
});


// rg Vikramjeet tokens
const rgTokens = {
  rgtoken_1: { name: "MATHS SPECIAL", value: "token_value", image_id: "AgACAgUAAxkBAAEBHUtoJMZ_PXpjcI6ZJUOVG44UXThrPAACsMAxG5k0mFRSWP8AASUMyUcBAAMCAAN5AAM2BA" },
  rgtoken_2: { name: "MATH + HINDI", value: "token_value", image_id: "AgACAgUAAxkBAAEBk4doTRXOpQqSIFh22awSm0BzcJYykAACscAxG5k0mFRL3dSR9O2HwAEAAwIAA3kAAzYE" },
  rgtoken_3: { name: "MATH SPECIAL 2.O", value: "token_value", image_id: "AgACAgUAAxkBAAEBk4loTRX1Bjr42cq9GXo9G1ig2ruBMAACssAxG5k0mFRAhctAKL-0iwEAAwIAA3gAAzYE" },
  rgtoken_4: { name: "CHAMPIONS 18.O", value: "token_value", image_id: "AgACAgUAAxkBAAEBk4toTRYmzAe5bzfb1N6Vq_2a2SC8qAACs8AxG5k0mFTfgtKLPuA7_AEAAwIAA3kAAzYE" },
  rgtoken_5: { name: "REASONING+ENGLISH+SCIENCE+GS+MATHS", value: "token_value", image_id: "AgACAgUAAxkBAAEBk41oTRZKtyFY01nwhTFyG_-ntdR9LAACtMAxG5k0mFTQ2k5MPgABYzIBAAMCAAN4AAM2BA" },
  rgtoken_6: { name: "CHAMPIONS 17.O+UPSI SPECIAL", value: "token_value", image_id: "AgACAgUAAxkBAAEBk49oTRbkAUoBWSdjHfmVYfgmWKMrGAACtcAxG5k0mFTkXf2e-yt0FQEAAwIAA3kAAzYE" },
  rgtoken_7: { name: "CHAMPIONS 20.O+REASONING", value: "token_value", image_id: "AgACAgUAAxkBAAEBk5FoTRcNp7Ttg9Su7L1aDAtBGWuCtQACiMUxG5k0oFRUjrEK2Uyc7wEAAwIAA3kAAzYE" },
};

// Command: /rgtoken
bot.onText(/\/rgtoken/, (msg) => {
  const chatId = msg.chat.id;

  // Check if user is banned
  if (bannedUsers.includes(chatId)) {
    return bot.sendMessage(chatId, "🚫 You are blocked! You cannot use this bot.");
  }

  const keyboard = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "📜 MATHS SPECIAL", callback_data: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjEyNjUwNDciLCJlbWFpbCI6InJhanVyYW03NDg0OTM4NjIwQGdtYWlsLmNvbSIsInRpbWVzdGFtcCI6MTczNzg3ODI3MiwidGVuYW50VHlwZSI6InVzZXIiLCJ0ZW5hbnROYW1lIjoiIiwidGVuYW50SWQiOiIiLCJkaXNwb3NhYmxlIjpmYWxzZX0.Eq5XL0TOiCNBqnzn0oY36zFK-EvgcSgABWrXakck1WM:1265047@MadXABhi_Robot
" }],
        [{ text: "📜 MATH + HINDI", callback_data: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjI0MDE4NCIsImVtYWlsIjoiYnJhamVuZHJhc2luZ2g3NzZAZ21haWwuY29tIiwidGltZXN0YW1wIjoxNzM3ODc4MzU3LCJ0ZW5hbnRUeXBlIjoidXNlciIsInRlbmFudE5hbWUiOiIiLCJ0ZW5hbnRJZCI6IiIsImRpc3Bvc2FibGUiOmZhbHNlfQ.YVFyfAmEqcfImOL3BTD_xOBxM-WnCFMc_srpxKKTfEc:240184@MadXABhi_Robot
" }],
        [{ text: "📜 MATH 2.O", callback_data: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjExMjM4MzciLCJlbWFpbCI6Im1yc2luZ2hzaW5naDkzN0BnbWFpbC5jb20iLCJ0aW1lc3RhbXAiOjE3Mzc4Nzg0NDEsInRlbmFudFR5cGUiOiJ1c2VyIiwidGVuYW50TmFtZSI6IiIsInRlbmFudElkIjoiIiwiZGlzcG9zYWJsZSI6ZmFsc2V9.2fstkzw-Obb-u5lTKmt7jGMfTUiwRcowhw_2RhbX4jI:1123837@MadXABhi_Robot
" }],
        [{ text: "📜 CHAMPIONS 18.O", callback_data: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjE4MzAxNTUiLCJlbWFpbCI6Im1vaGFtbWFkd2FmaTIzOUBnbWFpbC5jb20iLCJ0aW1lc3RhbXAiOjE3MzAwMDY4NzJ9.hop7mC5Plr4g3_C0Jk7hyKdP2-CowmQrLyAeFogJgT4:1830155@MadXABhi_Robot
" }],
        [{ text: "📜 REASONING+ENGLISH+SCIENCE+GS+MATHS", callback_data: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjEyNDI2NjAiLCJlbWFpbCI6ImFtYW5zaW5naDk1ODA1OTIxMjVAZ21haWwuY29tIiwidGltZXN0YW1wIjoxNzI5MTQzOTYwfQ.LfNedsaCj0vqBr0COaBR0wLgcbJTkn8BiYeOlWEVV4g:1242660@MadXABhi_Robot
" }],
        [{ text: "📜 CHAMPIONS 17.O+UPSI SPECIAL", callback_data: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Ijk1NDA3NyIsImVtYWlsIjoic2luZ2gucHJhZGVlcDA5MDFAZ21haWwuY29tIiwidGltZXN0YW1wIjoxNzI1ODExMTA5fQ.r7Eum5lI_oyq0oHapoVOtqzRA7ja3EMQ5vcGFZ3dUBA:954077@MadXABhi_Robot
" }],
        [{ text: "📜 CHAMPIONS 20.O+REASONING", callback_data: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjE2NzUzMiIsImVtYWlsIjoicmFqYXNoYXJhdmFuOThAZ21haWwuY29tIiwidGltZXN0YW1wIjoxNzQ0NzE1MTg5LCJ0ZW5hbnRUeXBlIjoidXNlciIsInRlbmFudE5hbWUiOiIiLCJ0ZW5hbnRJZCI6IiIsImRpc3Bvc2FibGUiOmZhbHNlfQ.oylbJaIyHWj24oNcyKRZjycEPBIrJ594CFjiXREW5yQ:167532@MadXABhi_Robot
" }]
      ]
    }
  };

  bot.sendMessage(chatId, "SELECT A TOKEN TO VIEW IMAGE 💡:", keyboard);
});

// Handle button clicks
bot.on("callback_query", (callbackQuery) => {
  const chatId = callbackQuery.message.chat.id;
  const data = callbackQuery.data;

  // Check if user is banned
  if (bannedUsers.includes(chatId)) {
    return bot.answerCallbackQuery(callbackQuery.id, { text: "🚫 You are blocked!", show_alert: true });
  }

  if (rgTokens[data]) {
    // Send Image First
    bot.sendPhoto(chatId, rgTokens[data].image_id, {
      caption: `HERE IS THE PREVIEW FOR \n*${rgTokens[data].name}*`,
      parse_mode: "Markdown",
      reply_markup: {
        inline_keyboard: [
          [{ text: "🔍 SEE TOKEN", callback_data: `get_${data}` }]
        ]
      }
    });
  } else if (data.startsWith("get_")) {
    const tokenKey = data.replace("get_", "");
    if (rgTokens[tokenKey]) {
      bot.sendMessage(chatId, `*${rgTokens[tokenKey].name}*\n\`\`\`\n${rgTokens[tokenKey].value}\n\`\`\`WORKING✅   [𝘼𝙎 𝙈𝙐𝙇𝙏𝙄𝙑𝙀𝙍𝙎𝙀](https://github.com/Popeye68/As-Multiverse-Token/)`, {
        parse_mode: "Markdown", disable_web_page_preview: true,
      });
    }
  }
});

// Keep bot alive with Express (For UptimeRobot)
app.get("/", (req, res) => res.send("Bot is running!"));
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//bot by @popeye68
