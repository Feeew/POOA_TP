var Contact = Contact || {};

Contact = ( function ( self ) {
    self.FromNameSearchStrategy = function (firstName, lastName){
        this.search = function(contacts){
            for(var i = 0; i < contacts.length; i++){
                if(contacts[i].firstName() == firstName && contacts[i].lastName() == lastName)
                    return contacts[i];
            }
        }
    };

    self.FromPhoneSearchStrategy = function (num){
        this.search = function(contacts){
            for(var i = 0; i < contacts.length; i++){
                for(var j = 0; j < contacts[i].phones().length; j++){
                    var phone = contacts[i].phones()[j];
                    if(phone.number() == num) {
                        return contacts[i];
                    }
                }
            }
            return null;
        }
    };

    self.FromMailSearchStrategy = function (mail){
        this.search = function(contacts){
            for(var i = 0; i < contacts.length; i++){
                for(var j = 0; j < contacts[i].mails().length; j++){
                    var pmail = contacts[i].mails()[j];
                    if(pmail.address() == mail)
                        return contacts[i];
                }
            }
        }
    };

    return self ;
}
    (
        Contact || {}
    )
);