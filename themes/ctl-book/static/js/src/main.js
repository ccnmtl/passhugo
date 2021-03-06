jQuery(document).ready(function() {
    /* If there is a '#' in the URL (someone linking directly to a page
    with an anchor), highlight that section and set focus to it.
    The tabindex attribute is removed AFTER the user navigates away from the
    element to help address a nasty VoiceOver bug. */

    if (document.location.hash) {
        var myAnchor = document.location.hash;
        jQuery(myAnchor).attr('tabindex', -1).on('blur focusout', function() {
            jQuery(this).removeAttr('tabindex');
        }).focus();
    }

    /* This function looks for a change in the hash (activation of an in-page
    link) and sets focus to and highlights the target element. This is
    necessary because webkit does not set focus as it should. If the hash is
    empty (the user hit the back button after activating an in-page link)
    focus is set to body.
    */

    jQuery(window).bind('hashchange', function() {
        var hash = '#' + window.location.hash.replace(/^#/, '');
        // eslint-disable-next-line security/detect-possible-timing-attacks
        if (hash != '#') {
            jQuery(hash).attr('tabindex', -1).on('blur focusout', function() {
                jQuery(this).removeAttr('tabindex');
            }).focus();
        } else {
            jQuery('#headcontainer').attr('tabindex', -1).on('blur focusout',
                function() {
                    jQuery(this).removeAttr('tabindex');
                }).focus();
        }
    });

    /* Listen for a signal to navigate to the next page. */
    jQuery(document).on('nextpage', function() {
        jQuery('li.next a')[0].click();
    });
});
