// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),
  // $text: $form.text(),
  // $something : $('')


  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);

    // console.log(this.$message.val());

  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.
    // console.log(this.$message);

    var newMessage = {
      username: App.username,
      text: $('#message').val(),
      roomname: $('#rooms select').val(),
    };

    console.log(newMessage)
    Parse.create(newMessage);


    //POST this to the server

  },



  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};