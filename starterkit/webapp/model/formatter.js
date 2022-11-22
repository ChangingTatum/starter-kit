sap.ui.define([], function() {
    "use-strict";
    return {
        formatName: function(sFirstName, sLastName) {

            var fullName = sLastName.split('-'),
            sLastName = fullName[0]
            return sFirstName[0] + ". " + sLastName;
        }
    };
});

