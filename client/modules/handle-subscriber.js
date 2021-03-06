handleSubscriber = function( subscriber, template ) {
  Meteor.call( "handleSubscriber", subscriber, function( error, response ) {
    if ( error ) {
      Bert.alert( error.reason, "warning" );
    } else {
      if ( response.complete || response.euid ) {
        var subscribeMessage   = "You have been subscribed to our monthly newsletter!",
            unsubscribeMessage = subscriber.email + " successfully unsubscribed!",
            message            = subscriber.action === "subscribe" ? subscribeMessage : unsubscribeMessage;

        Bert.alert( message, "success" );
        if ( template ) { template.getSubscribers(); }
      } else {
        Bert.alert( response.message, "warning" );
      }
    }
  });
};