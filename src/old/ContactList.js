var Contact = Contact || {};

Contact = ( function ( self ) {
    self.ContactList = function (){
        var contacts = [];

        this.clear = function(){
            this.contacts = [];
        };

        this.size = function(){
            return this.contacts.length;
        };

        this.add = function(contact){
            this.contacts.push(contact);
        };

        this.get = function(id){
            for(var i = 0; i < this.contacts.length; i++){
                if(this.contacts[i].id() == id){
                    return this.contacts[i];
                }
            }
        };

        this.getFromName = function(firstname, lastname){
            var contacts = [];
            for(var i = 0; i < this.contacts.length; i++){
                if(this.contacts[i].firstName() == firstname && this.contacts[i].lastName() == lastname){
                    contacts.push(this.contacts[i]);
                }
            }
            if(contacts.length == 0) contacts = null;
            return contacts;
        };

        this.getFromId = function(id){
            var contact = null;
            for(var i = 0; i < this.contacts.length; i++){
                if(this.contacts[i].id() == id){
                    contact = this.contacts[i];
                }
            }
            return contact;
        };

        this.remove = function(id){
            for(var i = 0; i < this.contacts.length; i++){
                if(this.contacts[i].id() == id) {
                    this.contacts.splice(i, 1);
                    break;
                }
            }
        };

        this.search = function (strategy){
            return strategy.search(this.contacts);
        }

    };
    return self ;
}
    (
        Contact || {}
    )
);