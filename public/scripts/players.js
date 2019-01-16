function onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    const id = profile.getId(); // Do not send to your backend! Use an ID token instead.
    const name = profile.getName();
    const icon = profile.getImageUrl();
    
    // $.ajax("/api/player/id:", {
    //     type: "GET",
    // });

    // $.ajax("/", {
    //     type: "POST",
    //     data: {
    //         name: name,
    //         icon: icon,
    //         googleID: id
    //     }
    // });
}