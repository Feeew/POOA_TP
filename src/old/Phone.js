var Contact = Contact || {};

Contact = ( function ( self ) {
    self.Phone = function (number, category, type)   {
        var number, category, type;
        this.category = function () {
            return category ;
        };
        this.number = function () {
            return number ;
        };
        this.type = function () {
            return type ;
        };
        var process = function () { };
        var init = function ( number, category, type ) {
            this.number = number ;
            this.category = category ;
            this.type = type ;
        };
        init ( number, category, type ) ;
    };

    self.PhoneCategory = {
        PERSO : 0,
        PRO : 1
    };

    self.PhoneType = {
        FIXE : 0,
        MOBILE : 1
    };

    return self ;
}
    (
        Contact || {}
    )
);