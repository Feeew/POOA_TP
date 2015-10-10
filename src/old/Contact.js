var Contact = Contact || {};

Contact = ( function ( self ) {
    self.Contact = function (gender, firstName, lastName)   {
        var firstName;
        var lastName;
        var gender;
        var id;
        var mails = [];
        var phones = [];
        this.firstName = function () {
            return firstName ;
        };
        this.lastName = function () {
            return lastName ;
        };
        this.gender = function () {
            return gender ;
        };
        this.mails = function(){
            return mails;
        }
        this.phones = function(){
            return phones;
        }
        this.id = function () {
            return id ;
        };
        this.set_mail = function ( address ) {
            mails.push(new Contact.Mail(address, Contact.MailCategory.PRO));
        };
        this.set_phone = function ( number ) {
            phones.push(new Contact.Phone(number, Contact.PhoneCategory.PRO,Contact.PhoneType.MOBILE));
        };
        this.addPhone = function(phone){
            phones.push(new Contact.Phone(phone.number(), phone.category(), phone.type()));
        }
        var process = function () { };
        var init = function ( gender, firstName, lastName ) {
            this.gender = gender ;
            this.firstName = firstName ;
            this.lastName = lastName ;
            this.id = newId();
        }
        init ( gender, firstName, lastName ) ;

        function newId(){
            id = "xxxx-xxxx-xxxx-xxxx-xxx".replace(/x/g, function (c) {
                var r = Math . random () *16|0 , v = c == "x" ? r : (r&0x3 | 0x8) ;
                return v. toString (16) ;
            }) ;
            return id;
        }
    };

    self.Gender = {
        MR : 0,
        MRS : 1
    }

    return self ;
}
    (
        Contact || {}
    )
);