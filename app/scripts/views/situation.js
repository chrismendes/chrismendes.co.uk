// -------
// Current Situation Page
// -------
define([
    'views/_base',
    'text!/templates/situation.html',
    'common'
], function(BaseView, html, Common) {

    var CurrentSituationView = BaseView.extend({

        template:       _.template(html),
        elPage:         '#page-situation',
        background:     'denimblue',
        theme:          'green'

    });

    return CurrentSituationView;

});