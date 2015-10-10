var Contact = Contact || {};

Contact = (function (self) {
    self.AddCommand = function() {
        var contacts;
        this.execute = function(contact){
            contacts.add(contact);
        }

        this.undo = function(){
            contacts.contacts.pop();
        }
        var init = function () {
            contacts = Contact.Contacts.instance();
        }

        init () ;
    }

    self.RemoveCommand = function() {
        var contacts;
        var lastContact;
        this.execute = function(id){
            lastContact = contacts.getFromId(id);
            contacts.remove(id);
        }

        this.undo = function(){
            contacts.add(lastContact);
        }
        var init = function () {
            contacts = Contact.Contacts.instance();
        }

        init () ;
    }

    self.Command = function () {
        var commands = [];
        this.execute = function(contact){

        }

        this.undo = function (){

        };
        var process = function ()
        { };

        var init = function () {
        }

        init () ;
    };

    return self ;

}( Contact || {}) ) ;