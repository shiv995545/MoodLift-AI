

function submitClick(){

    //window.alert("Values Added");

    var firebaseRef = firebase.database().ref();

    var messageText = mainText.value;

   // firebaseRef.child("Text").set(messageText);
    firebaseRef.child("Video Chat Responses").push().set(messageText);

}