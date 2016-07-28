jQuery(document).ready(function() {
    var SidemenuSize=function() {
        var contentHeight=jQuery('.docs-container .content').height()+20;
        var sidemenuHeight=jQuery('#section-list').height()+20;
        
        if (jQuery('#module-name-toggle').is(":hidden")) {
            if (contentHeight > sidemenuHeight) {
                jQuery('#section-list').css({'height':contentHeight+'px'});
            }
            else {
                jQuery('#section-list').css({'height':sidemenuHeight+'px'});
            }
        }
        else {
            jQuery('#section-list').css({'height':'auto'});
        }
    };

    jQuery(document).ready(function(){SidemenuSize();}); 
    jQuery(window).resize(function(){SidemenuSize();}); 

    jQuery('#toggle-sidenav a').click(function(evt) {
        jQuery('#sidenav-icon').toggleClass('open');
        jQuery( "#section-list" ).animate({height: 'toggle'},200);
        return false;
        evt.stopPropagation();
    });
    jQuery('body').click(function() {
        if ((jQuery('#module-name-toggle').is(":visible")) && (jQuery( "#section-list" ).is(":visible")) ) {
            jQuery('#sidenav-icon').toggleClass('open');
            jQuery( "#section-list" ).animate({height: 'toggle'},200);
        }
    });
});
