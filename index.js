const dbd = require("dbd.js");

const bot = new dbd.Bot({
  token: "BOT_TOKEN",
  prefix: "YOUR PREFIX"
});

bot.onMessage();

bot.command({
  name: "stop",
  code: `Stopped playing $songInfo[title]. $stopSong
$onlyIf[$voiceID!=;To stop music, please join a VC.]`
});

bot.command({
  name: "skip",
  code: `Skipped the song. $skipSong
$onlyIf[$voiceID!=;To skip music, please join a VC.]`
});

bot.command({
  name: "pause",
  code: `Successfully paused the song. $pauseSong
$onlyIf[$voiceID!=;To pause music, please join a VC.]`
});

bot.command({
  name: "resume",
  code: `$resumeSong Successfully resumed the song.
$onlyIf[$voiceID!=;To resume music, please join a VC.]`
});

bot.command({
  name: "play",
  code: `Now playing $songInfo[title] $playSong[$message;No song found.]
$onlyIf[$voiceID!=;To play music, please join a VC.]`
});

bot.command({
  name: "queue",
  code: `$title[Queue]
$description[$queueLength songs in queue
$queue[1]
$queue[2]
$queue[3]
$queue[4]
$queue[5]
$queue[6]
$queue[7]
$queue[8]
$queue[9]
$queue[10]]
$footer[For more songs to show, use the longqueue command.]
$color[RANDOM]
$suppressErrors[Couldn't find songs. Or there are no songs in the queue.]`
});

bot.command({
  name: "volume",
  code: `Successfully set the volume to $message.
$volume[$message]
$suppressErrors[What do you want your volume set as? use a number.]`
});

bot.command({
  name: "ly",
  aliases: ["lyrics", "saying", "speaking"],
  code: `$argsCheck[>1;]
$title[$message's Lyrics.] $description[$jsonRequest[https://some-random-api.ml/lyrics?title=$message;lyrics;No Lyrics Found for this song.]]
$suppressErrors[Failed finding lyrics with that song-name.]`
});

bot.command({
  name: "np",
  code: `Currently playing: $songInfo[title], Requested by $username[$songInfo[userID]].
Description: $songInfo[description]
Duration: $parseDate[$multi[$songInfo[duration];1000];time]
URL to Video: $songInfo[url]`
});

bot.command({
  name: "ly",
  code: `$title[$songInfo[title]'s Lyrics.] $description[$jsonRequest[https://some-random-api.ml/lyrics?title=$songInfo[title];lyrics;No Lyrics Found for this song.]]
$argsCheck[>0;]
$suppressErrors[Failed finding lyrics.]`
});

bot.command({
  name: "help",
  code: `$title[my commands]
$description[play
stop
skip
pause
resume
queue
volume
lyrics
np
ly
privacyandsafety
support]
$footer[keep vibing]`
});

bot.command({
  name: "invite",
  code: `$description[[Invite Link\\](Your Bot Invite Link)]`
});

bot.command({
  name: "privacyandsafety",
  code: `$title[For any question or concerns you may join our support server for help(for that type G?support)]
$description[We Do not store any data whats so ever because we want all the bot users to feel safe and not disturbed we trust our users to use this bot responsibly]
$footer[P.S. G?report if you still dont trust us and we will dm you thanks]`
});

bot.command({
  name: "report",
  code: `$dm[Your discord ID]
  $title[NEW REPORT FROM]
$description[<@$authorID>said: $message]
$footer[Please file the complaint]`
});

bot.command({
  name: "report",
  code: `$description[message sent if you didnt write anything just why]`
});

bot.command({
  name: "ping",
  code: `$description[$ping MS]`
});

bot.command({
  name: "support",
  code: `$description[[Support Server\\](Your support server invite link)]`
});

bot.status({
  text: "on Music",
  type: "STREAMING",
  time: 3
});
