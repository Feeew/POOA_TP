var Contact = Contact || {};

Contact = ( function ( self ) {
        self.Model = function ()   {
            private :
            View * view ;
            Controller * controller ;
            public :
            Model () : view (0) , controller (0) {}
            View * getView () { return view ; }
            void setView ( View * view ) { this -> view = view ; }
            Controller * getController () { return controller ; }
            void setController ( Controller * controller )
            { this -> controller = controller ; }
            void update (...) { ... }
            ... getValue () { return ... }
        };

        return self ;
    }
    (
        Contact || {}
    )
);