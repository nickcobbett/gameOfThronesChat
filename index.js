var keepScroll = function() {
  $('.chat--messages').scrollTop($('.chat--messages')[0].scrollHeight);
}

$('svg').click(() => {
  var text = $('textarea').val();
  var $message = $('.chat--message.-outgoing').first().clone();
  $message.find('.chat--text').text(text);
  $('.chat--messages').append($message);

  $('textarea').val('');
  keepScroll();

});


var $friends = $('.chat--friend').map(function() {
  return $(':nth-child(2)', this).text();
});

var friends = $friends.toArray();
var openings = ['i have', 'have you', '']
var verbs = ['stabbed', 'conquered', 'fucked', 'murdered', 'revengenanted', 'consumed', 'debunked', 'drugged'];

var objects = ['my', 'your', 'the', 'a', 'my', 'an entire', 'this', 'that', 'the', 'the big', 'a new form of'];
var nouns = ['cat', 'koolaid', 'system', 'city', 'worm', 'cloud', 'potato', 'money', 'way of life', 'belief system', 'security system', 'bad decision', 'future', 'life', 'pony', 'mind'];


var randomElement = function(array){
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

var randomMessage = function(){
  return [randomElement(openings), randomElement(verbs), randomElement(objects), randomElement(nouns)].join(' ');
};

var generateMessage = function() {
  var text = randomMessage();
  var $message = $('.chat--message').not('.-outgoing').first().clone();
  $message.find('.chat--text').text(text);
  $message.find('.chat--info').text(randomElement(friends));
  $('.chat--messages').append($message);
  keepScroll();
}

setInterval(generateMessage, 10000);

