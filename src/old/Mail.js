var Contact = Contact || {};

Contact = ( function ( self ) {
    self.Mail = function (address, category)   {
        var address, category;
        this.category = function () {
            return category ;
        };
        this.address = function () {
            return address ;
        };
        this.set_attr = function ( new_value ) {
            private_attr = new_value ;
        };
        var process = function () { };
        var init = function ( address, category ) {
            this.address = address ;
            this.MailCategory = category ;
        };
        init ( address, category ) ;
    };

    self.MailCategory = {
        PERSO : 0,
        PRO : 1
    };

    return self ;
}
    (
        Contact || {}
    )
);