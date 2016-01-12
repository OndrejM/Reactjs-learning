if (Meteor.isClient) {
    Meteor.startup(function() {
        // Use Meteor.startup to render the component after the page is ready
        ReactDOM.render(<App ctx={appCtx}/>, document.getElementById("render-target"));
    })
}
