// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),


  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    // SHOULD DO SOMETHING

    // Call render?
    // render();
    // this.render()

  },

  render: function() {
    // TODO: Render _all_ the messages.
    // forEach message in ________ renderMessages
    // call renderMessage(message)
    if($('#rooms select').val()) {
      for (var i = 0; i < Messages._data.length; i++) {
        var current = Messages._data[i]
        if (current.roomname === $('#rooms select').val()) {
          this.renderMessage(current)
          console.log(current)
        }
      }
    } else {
      Messages._data.forEach(message => {
      this.renderMessage(message)
    })
    }


  },

  renderMessage: function(message) {
    // TODO: Render a single message.

    var $messageContainer = $(`<div class="messageContainer"></div>`)
    var $userContainer = $(`<div class="userContainer">user: ${message.username}</div>`)
    // $userContainer.on('click', function(
    //   this.css.style= {color : yellow};
    // ))
    var $textContainer = $(`<div class="textContainer">${message.text}</div>`)
    var $roomContainer = $(`<div class="roomContainer">room: ${message.username}</div>`)


    $messageContainer.append($userContainer, $textContainer, $roomContainer)
    this.$chats.append($messageContainer)
    // var $message = $('<span></span>');
    // var $text = $(`<li>${message.text}</li>,`)
    // $message.append($text);

    // var $username = $(`<li?>${message.username}</li?>`);
    // $username.addClass('username');
    // $username.on('click', function() {
    //   Friends.toggleStatus();
    // })

    // $message.append($username);

    // this.$chats.prepend($message);
    // var $message = $(<li>message[username]</li>)
    // li
    // message.username - hyperlink
    // message.text
    // message.roomname - hyperlink
    // <li>

    // var message = {
    //   username: 'shawndrost',
    //   text: 'trololo',
    //   roomname: '4chan',
    // };
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  },

};