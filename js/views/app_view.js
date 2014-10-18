$(function () {
  var AppView = Backbone.View.extend({
    el: $('#app'),
    events: {
      'keypress #new-address': 'keyPress',
      'click #delete-all': 'deleteAll'
    },

    initialize: function () {
      this.input = this.$('#new-address');

      Addresses.bind('add', this.add, this);
      Addresses.bind('reset', this.addAll, this);

      Addresses.fetch();
    },

    add: function (address) {
      var view = new AddressView({model: address});
      this.$('#list').append(view.render().el);
    },

    addAll: function () {
      Addresses.each(this.add);
    },

    keyPress: function (e) {
      if (e.keyCode == 13) {
        Addresses.create({name: this.input.val()});
        this.input.val('');
      }
    },

    deleteAll: function (e) {
      var address;
      while (address = Addresses.first()) {
        address.destroy();
      }
    }
  });

  var App = new AppView;
});
