var Contact = Contact || {};

Contact = ( function ( self ) {
    self.Builder = function ()   {

        this.createMinimalContact = function(gender, firstName, lastName) {
            return new Contact.Contact(gender, firstName, lastName);
        }
        this.createContactWithProfessionalMail = function(gender, firstName, lastName, address) {
            var contact = new Contact.Contact(gender, firstName, lastName);
            contact.set_mail(address);
            return contact;
        }
        this.createContactWithProfessionalMobile = function(gender, firstName, lastName, number) {
            var contact = new Contact.Contact(gender, firstName, lastName);
            contact.set_phone(number);
            return contact;
        }
    };
    return self;
}
    (
        Contact || {}
    )
);