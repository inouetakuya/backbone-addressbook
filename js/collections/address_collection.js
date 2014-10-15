var AddressCollection = Backbone.Collection.extend({
  model: Address,
  localStorage: new Store('addressbook-sample')
});

var Addresses = new AddressCollection;
