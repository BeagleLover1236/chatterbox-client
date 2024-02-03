// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  // $('body').append($button),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    this.renderRoom.bind;
    this.render.bind(this);
    this.$button.on('click', this.handleClick.bind(this));
    this.$select.on('change', this.handleChange.bind(this));
  },

  render: function() {
    // TODO: Render out the list of rooms.

    var rooms = Rooms._data.map((room) => room.roomname);
    var theseUniqueRooms = _.unique(rooms);
    for (var i = 0; i < theseUniqueRooms.length; i++) {
      this.renderRoom(theseUniqueRooms[i])
    }

  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    this.$select.append(`<option>${roomname}<option>`);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    console.log($('#rooms select').val());

  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    Rooms.add();
  }

};
