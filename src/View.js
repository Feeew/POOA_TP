var Contact = Contact || {};

Contact = function (self) {
    "use strict";

    self.View = function(model){
        var init = function(){
            var table = $('<table />');
            var line = $('<tr />');
            $("<th id='cellFirstName'>First name</th>").appendTo(line);
            $("<th id='cellLastName'>Last name</th>").appendTo(line);
            $("<th id='cellPhones'>Phones</th>").appendTo(line);
            $("<th id='cellMails'>Mails</th>").appendTo(line);
            $("<th id='cellTags'>Tags</th>").appendTo(line);
            $("<th id='cellActions'>Actions</th>").appendTo(line);
            line.appendTo(table);
            table.appendTo($('#contacts'));
        };

        var remplirTableau = function(model){
            for (var index in model.getContacts().list) {
                var contact = model.getContacts().list[index];
                var line = $('<tr id="x'+contact.id()+'"/>');
                var phones = "";
                for(var i = 0; i < contact.phones().length; i++){
                    phones += contact.phones()[i].number()+"<br />";
                }
                var mails = "";
                for(var i = 0; i < contact.mails().length; i++){
                    mails += contact.mails()[i].address()+"<br />";
                }

                $("<td>"+contact.firstName()+"</td>").appendTo(line);
                $("<td>"+contact.lastName()+"</td>").appendTo(line);
                $("<td>"+phones+"</td>").appendTo(line);
                $("<td>"+mails+"</td>").appendTo(line);
                $("<td>"+contact.tag()+"</td>").appendTo(line);
                $("<td>Actions</td>").appendTo(line);
                line.appendTo($("#contacts table"));
            }
        };

        init();
        remplirTableau(model);
    };

    return self;

}(Contact || {});