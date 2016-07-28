jQuery(document).ready(function() {
    jQuery('#toggle-sidenav a').click(function(evt) {
        jQuery('#sidenav-icon').toggleClass('open');
        jQuery( "#section-list" ).animate({height: 'toggle'},200);
        evt.stopPropagation();
        return false;
    });
    jQuery('body').click(function() {
        if ((jQuery('#module-name-toggle').is(":visible")) && (jQuery( "#section-list" ).is(":visible")) ) {
            jQuery('#sidenav-icon').toggleClass('open');
            jQuery( "#section-list" ).animate({height: 'toggle'},200);
        }
    });
});
