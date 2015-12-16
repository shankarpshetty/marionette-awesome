var Backbone = require("backbone");
var Marionette = require('backbone.marionette');
var AppLayoutTemplate = require('../templates/AppLayout.handlebars')

var AppLayoutView = Marionette.LayoutView.extend( {
        //to be overwritten brand-specific
    template: AppLayoutTemplate,

    regions: {
        header: '#header',
        content: '#content'
    }
} );

module.exports = AppLayoutView