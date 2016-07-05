/* global alert: true */

function isFormComplete(form) {
    var valid = true;

    var children = jQuery(form).find('input,textarea,select');
    jQuery.each(children, function() {
        if (valid && jQuery(this).is(':visible')) {
            if (this.tagName === 'INPUT' && this.type === 'text' ||
                    this.tagName === 'TEXTAREA') {
                valid = jQuery(this).val().trim().length > 0;
            }

            if (this.tagName === 'SELECT') {
                var value = jQuery(this).val();
                valid = value !== undefined && value.length > 0 &&
                    jQuery(this).val().trim() !== '-----';
            }

            if (this.type === 'checkbox' || this.type === 'radio') {
                // one in the group needs to be checked
                var selector =
                    'input[name=' + jQuery(this).attr('name') + ']';
                valid = jQuery(selector).is(':checked');
            }
        }
    });

    if (!valid) {
        alert('Please complete all form fields before continuing.');
    }

    return valid;
}

jQuery(document).ready(function() {
    var exitWarning = false;
    var printed = false;

    // add a print button to every page with a submit button
    jQuery('.btn-submit-section').after(
            '<button class="btn btn-default btn-print hidden">Print</button>');

    jQuery('.btn-print').click(function(evt) {
        evt.preventDefault();
        window.print();
        printed = true;
        return false;
    });

    jQuery('.btn-submit-section').click(function(evt) {
        evt.preventDefault();

        var form = jQuery(this).parents('form');

        // verify all form fields are filled out
        var complete = isFormComplete(form);
        if (!complete) {
            return false;
        }

        // based on quiz type, show/hide various bits
        if (jQuery('.mod5-previsit').length > 0) {
            var yourResponse =
                '<div class="response-heading">Your response:</div>';
            jQuery('.mod5-previsit')
                .find('textarea').attr('disabled', 'disabled')
                .before(yourResponse);

            jQuery('.btn-submit-section').attr('disabled', 'disabled');

            jQuery('.mod5-previsit').find('.casesanswerdisplay').show();

            jQuery('.btn-print').removeClass('hidden');
        }
    });

    jQuery('li.next a').click(function(evt) {
        var btn = jQuery('.btn-submit-section');
        if (btn.length < 1) {
            return true;
        }

        var submitted = jQuery(btn).attr('disabled') === 'disabled';

        if (!submitted) {
            alert('Please complete all form fields before continuing.');
            evt.preventDefault();
            return false;
        }

        if (!printed && !exitWarning) {
            exitWarning = true;
            alert('We suggest you print the completed activity results ' +
                  'before continuing. Your answers will not be saved ' +
                  'once you leave this page.');
            evt.preventDefault();
            return false;
        }
    });
});
