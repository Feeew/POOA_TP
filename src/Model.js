var Contact = Contact || {};

Contact = function (self) {
    "use strict";

    self.Model = function(){
        var contacts;

        var init = function () {
            contacts = Contact.Contacts.instance();
        };

        this.getContacts = function(){
            return contacts;
        };

        init();
    };

    return self;

}(Contact || {});