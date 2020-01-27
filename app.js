require('dotenv').config()
var Twit = require('twit')

var T = new Twit({
  consumer_key:process.env.CONSUMER_KEY,
  consumer_secret:process.env.CONSUMER_SECRET,
  access_token:process.env.ACCESS_TOKEN,
  access_token_secret:process.env.ACCESS_TOKEN_SECRET
})

const handle = 'Think_about_it_bot'


const termsToTrack = [
  "I know a lot",
  "Show some love",
  "bot knowledge"
]

const replies = ["There is no such thing as a poor man's breakfast, nor a lady's morning.\n", 
'It is better to have a strong wife than a weak one.\n',
'We are so disappointed in the whole world that we do not see how far we are from the dreams we have grown up to.\n', 'A man who has not yet figured out the art of divination has not yet figured out the art of love.\n', 'To love is to know how to love a woman.\n', 'The man who has not yet learned how to speak the languages of the women he loves, has not yet learned how to speak the languages of the women he loves.\n', 'There is nothing in either constitution that will ever give a man an equal opportunity to achieve the quality of marriage that he seeks.\n', 'The worst enemies of marriage are those who do not love.\n', 
'It is not right to think of a woman as a woman, and a man as a man.\n', 'A woman is the only wife that a man has.\n', 'It is better to have children alone than to have children with a woman.\n', 'A lady who loves is best with children in her.\n', 'It is only when we look at the whole picture that our minds perceive that something is terribly wrong.\n', "In the morning we see the men's faces, but in the afternoon we see the women's faces.\n", 'The best way to get along is to keep working.\n', 'The best way to get hammered is to be discouraged.\n', 'There is no such thing as a stupid thing a woman has done.\n', 'The best way to get drunk is to be despaired of.\n', 'The best way to get drunk is to be despaired of.\n', 'The art of thinking is to think on something else.\n', 'The best way to get a girl is to get her to spell it wrong.\n', 'It is a mistake to think of women as idiots; we are all of us idiots of some sort.\n', 'Life is the art of living in the past. The art of living in the future.\n', 
'It is better to get married in the morning, and then get hammered: the best way to get hammered is to be despaired of.\n', 
'Life is a sort of game. One must get tired of it before one gets to sleep.\n', 'The best way to get drunk is to get her to spell it wrong.\n', "The art of being a good listener is to listen to another man's mind.\n", 'Love is a very sweet thing a woman has done.\n', 'The best way to get drunk is to be despaired of.\n', 'The best way to get a girl is to get her to spell it wrong.\n', 'There is no such thing as a bad temper, but there is a certain bemusement in a certain despair.\n', 'The best way to get drunk is to be despaired of.\n', 'The best way to get a woman is to get her to spell it wrong.\n', 'There is no such thing as a good morning. The best way to get drunk is to get her to spell it wrong.\n', 'The best way to get a man to spell it wrong is to get him to spell it wrong.\n', 'He is a man of ideas, but he thinks of nothing.\n', 'He is a writer without a writer.\n', 'There is no such thing as a bad temper. There is a certain bemusement in a certain despair.\n', 'You must get drunk to get a woman to spell it wrong.\n', 
'You can get a man to spell it wrong for a woman is to get her to spell it wrong for a man.\n', 
'A writer without a writer is like a pirate without a vessel.\n', 'The best way to get a woman to spell it wrong is to get her to spell it wrong.\n', 'The best way to get a man to spell it wrong is so that he can spell it wrong for a woman.\n', 'The best way to get a man to spell it wrong is so that he can spell it wrong for a woman, and that man can spell it wrong for a woman.\n',
'The best way to get drunk is to get her to spell it wrong.\n', 'The best way to get a woman to spell it wrong is to get her to spell it wrong for a woman.\n', 'A man is a writer without a writer: the best way to get a woman to spell it\n', 'The way a man deals with his enemy, the way he treats his enemy, the way he treats his enemies, is in dealing with the problem that he is trying to solve.\n', 'An enemy is the enemy that you have to fight.\n', "The greatest thing about medicine is that one's mind is always awake as one deals with the enemy.\n", "The most important thing isn't to do the work, but to do the work in order to do the work.\n", 'The best we can do is to learn by doing.\n', 'I want to make you an enemy, a friend, a foe.\n', 'If we want to make a living in the world, we have to make a living in the making of enemies.\n', 
'The only difference between a man and a woman is that a man thinks he is a woman, and a woman thinks he is a man.\n', 'A man must make a living in order to be a woman.\n', "I don't care what people say about me. I don't care who you are.\n", 'The most important thing about a woman is that she is something else.\n', "It's a strange thing for a woman to have to do this work, to have to do it with women.\n", 
"I'd like to make a woman a gentleman.\n", 'I realized that a woman is an enemy in the beginning.\n', 'I have no knowledge of anything, except myself, except the fact that I know enough to know that the enemy is a woman.\n', 'When a man is a woman you are a woman\n', 'Terrorism is born of the imagination of the people of justice.\n', "I don't know what the next move will be, what the next step is, but I'm confident that I'm going to be a good baseball player for the next thirty years.\n", 'Every state is like the ocean; the smallest thing floats into the largest.\n', 'Without democracy there is no political order, without socialism there is no political organization.\n', 
'The struggle for freedom is not a matter of words but of deeds, and that in the struggle for freedom a revolutionary must make an uncompromising resolution.\n', 'A revolutionary is a revolutionary who does not think he is defending a state he has no right to defend.\n', 'The whole idea of socialism is to redistribute the wealth equally among the inhabitants of the two countries.\n', 'The greatest obstacle to socialism is the opposition of the workers to the revolutionary plans of the bourgeoisie.\n', 'The working class must struggle against the reactionary bourgeoisie, but the revolutionary struggle must be carried out by the working class alone... The revolutionary contradiction between the working class and the revolutionary contradiction is the same.\n', 
'The revolution of the proletariat is an expedient and necessary step towards socialism.\n', 'The revolution of the proletariat is not merely a matter of words, but of deeds.\n', 'The question of the social basis of the nation must be the supreme question of the world.\n', 'The Russian people were not prepared to accept an aristocracy, nor did they realize that they must. To them, the state was an obstacle to their emancipation.\n', 'All religions are failures.\n', 'Beauty is the shadow of death.\n', 'The only thing today which everybody knows is that the sun is gone.\n', "A friend is someone who has a past, but doesn't know when he will be remembered.\n", 'The greatest terror in Russia is the fear of death, but the only mystery is the past.\n', 
'A woman is the mother of children, but a man is the father of a woman.\n', 'We, the people, are the most powerful of all immortal beings.\n', 'The most beautiful woman in the world is anything but beautiful.\n', 'What is the real sense of the word - the true sense of the word - to call a man a mother?\n', 'The reason for the memory is the only reason for the use of words.\n', 'No one knows whom to trust.\n', 'I would rather be hated for my faults and a woman for my faults than for my fame and success.\n', 'Every generation is like a river, they are always changing, they are always being changed, but the river never changes.\n', 'There are only two things common to all great changes: a change in the name of God and a change in the name of a man.\n', 'There is no real sense of the word.\n', 'It is only when you have lost all your convictions that you remember a mistake, but you have lost nothing.\n', 'I have never believed that the soul is endowed by its creator with all the powers of perception and speech.\n', 
'No one ever treats the soul as good. On the contrary, it is always bad.\n',
'VThe first lie is to lie under the illusion that you are in an asylum.\n', 
'The first lie is to deceive.\n', 'The most beautiful woman in the world is anything else.\n', 'The only thing which everyone knows is that the sun is gone.\n', "The greatest trouble in Russia is that the people don't know when they will be remembered.\n", 'The mother of all lies is not the woman, but everything else, the mother of all lies is the woman.\n', 'Every generation is like a river, it are always changing, they are always being changed, but the river never changes.\n', 'Every man knows who he is, which is the only truth.\n', 'The men of Russia know who they are, and it is only the men who recognize their being.\n',
'Every man knows who he is, and there is only the women who recognize their being.\n', 'Every generation is like a river, it are always changing, they are always being']

const emojis = ["👋","🤖","🕊","😄","😀","😃","😺","👏"]



  T.get('account/verify_credentials', {
    include_entities: false,
    skip_status: true,
    include_email: false
}, onAuthenticated)


function onAuthenticated(err) {

  // Check if authentication has worked and log to the console
  if (err) {
    console.log(err)
  } else {
    console.log('Authentication successful. Running bot...\r\n')
  }


  // // Begin monitoring tweets based on the terms we want to track.
  // var stream = T.stream('statuses/filter', { track:termsToTrack, tweet_mode:'extended' })

  

  // stream.on('tweet', function (tweet) {

  //   // We perform some checks before we send anyone a tweet.
  //   if(
  //     // We don't want our tweet to reply to retweets
  //     !tweet.retweeted_status
  //     &&
  //     // It's important that our twitter bot doesn't respond to itself.
  //     // So we check if the tweet us from our handle
  //     tweet.user.screen_name !== handle
  //     &&
  //     // The twitter stream api send us a lot of tweets that aren't exact matches of our text
  //     // so we double check with our isTweetExactMatch function
  //     isTweetExactMatch(tweet.text)
  //     ) {
  //     // If the tweet matches all the above criteria, we send our reply
  //     sendReply(tweet)
  //   }
  // })

}



setInterval(() => {
    sendTweet();
}, 900000);


function sendTweet(text){
  text = parseInt(random() * 100)
  
    T.post('statuses/update', { status: String(text +" Think about it...")})
}


// function isTweetExactMatch(text){
//   // Make sure the text is in lowercase
//   text = text.toLowerCase()
//   // Check if tweet contains an exact match of the phrases we're looking for.
//   return termsToTrack.some(term => text.includes(term))
// }

function sendReply(tweet){

  // get the screen name of the twitter account - we'll need to prepend our response with this in order to reply.
  var screenName = tweet.user.screen_name
  // All our tweets will have the same instructions on how to quit twitter
  const instructions = '\n\r\n\rsettings → scroll to the bottom of the page → deactivate your account → deactivate'
  // Now we create the reply - the handle + a random reply from our set of predefined replies + the instructions on how to quit
  var response = '@' + screenName + ' ' + emojis[Math.floor(Math.random() * emojis.length)] + ' ' + replies[Math.floor(Math.random() * replies.length)] + instructions

  T.post('statuses/update', {

      // To reply we need the id of tweet we're replying to.
      in_reply_to_status_id:tweet.id_str,
      // Status is the content of the tweet, we set it to the response string we made above.
      status:response
      // After we tweet we use a callback function to check if our tweet has been succesful.
  }, onTweeted)

}

// Define a global variable for isAsleep
let isAsleep = false

// Check if our tweet has been successful, if we've reached our rate limit, let people know that our bot is asleep.
function onTweeted(error) {

  // Check if there's been an error
  if (error !== undefined) {

      // Log the error if there is one.
      console.log(error)


      // Check if the error code means the rate limit has been reached.
      if(error.code === 88){

        // Update our profile to let people know our bot has reached it's rate limit.
        T.post('account/update_profile', {
            name:'Word!!!',
            description: 'I\'ve said too much and have reached my rate limit.'
        }, onTweeted)

        // set the isAsleep variable to true
        isAsleep = true

      }
  } else {
    // if there was no error, check if our bot's profile still says the bot is asleep.
    // If it is asleep update the profile back to it's default.
     if(isAsleep){
       isAsleep = false
       T.post('account/update_profile', {
            name:'Word!!!',
           description: 'I\'m a bot that generate "Think about it" quotes... Still learning'
       }, onTweeted)
     }

  }
}

