UI.registerHelper('disableIfNotLoggedIn', () => {
    return Meteor.user() ? '' : 'disabled';
});
