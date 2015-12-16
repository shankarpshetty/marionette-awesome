var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var AppLayoutView = require('./AppLayout');

var App = Marionette.Application.extend( {
    //to be overwritten brand-specific
    views: {
        
    },

    initialize: function ( options ) {
        this.rootView = new AppLayoutView( {
             el: '#bd'
        } );
        this.rootView.render();

        // this.rootView.getRegion( 'header' ).show( new this.views.HeaderView() );
        // this.rootView.getRegion( 'content' ).show( new this.views.ContentLayout() );
        // this.rootView.getRegion( 'footer' ).show( new this.views.FooterView() );
    },
    onStart: function () {
        Backbone.history.start();
    }
} );

module.exports = App