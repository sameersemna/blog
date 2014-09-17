$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("jdSitfAuMXD65uD2rDPnn6B0ikQFZFf0a3elogAu", "RSDIhMJjxxXfqgfSSeiNDXwYcidNFFfcyAxcU53p");
 
    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}).then(function(object) {
      alert("yay! it worked");
    });
 
});
