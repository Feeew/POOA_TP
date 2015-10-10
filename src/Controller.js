var Contact = Contact || {};

Contact = function (self) {
    "use strict";

    self.Controller = function(model, view){
        var model, view;

        var init = function(model, view){
            this.model = model;
            this.view = view;
        }

        var getModel = function(){
            return model;
        }

        var getView = function(){
            return view;
        }

    };

    return self;

}(Contact || {});