var AddressView = Backbone.View.extend({
  tagName: 'li',
  className: 'address-item',

  events: {
    'dblclick label.name': 'rename',
    'click button.delete': 'clear'
  },

  initialize: function() {
    this.model.bind('change', this.render, this);
    this.model.bind('destroy', this.remove, this);
  },

  render: function() {
    $(this.el).html(
      $('<label class="name">').text(this.model.get('name'))
    ).append('<button class="delete">Delete</button>');
    return this;
  },

  rename: function() {
    var newName = window.prompt('Enter new name.', this.model.get('name'));
    this.model.save('name', newName);
  },

  clear: function() {
    this.model.destroy();
  }
});
