Template.registerHelper('firstName', function() {
    return Meteor.user().profile.first_name;
});

Template.registerHelper('lastName', function() {
    return Meteor.user().profile.last_name;
});

Template.registerHelper('userEmail', function() {
    return Meteor.user().emails[0].address;
});

Template.registerHelper('phone', function() {
    return Meteor.user().profile.phone;
});

Template.registerHelper('role', function() {
    return Meteor.user().profile.role;
});

Template.registerHelper('request_status', function() {
    var chapter = Meteor.user().profile.primary_chapter.split('_').join(' ');
    return Meteor.user().profile.request_status[chapter];
});

Template.registerHelper('IsSuperAdmin', function() {
    return Meteor.user().profile.role.IsSuperAdmin;
});

Template.registerHelper('isMate', function() {
    return Meteor.user().profile.role.mate;
});

Template.registerHelper('allDorms', function() {
    return Dorms.find({}, {sort: { name: 1 }});
});