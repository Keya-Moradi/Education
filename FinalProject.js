// Final project:
// - Create a website where the user can enter their CC data and bank manager to view CC data using logins
// - Create a credit card input template
// - Use prototypes for new users to be able to enter their CC data
// - Store the CC data in a database and possibly work with a Ruby person for that
// - Use callback function to pull up the data when requested
//- Create a user friendly interface in the front end using Matt's guides
//- Use what we learned



function creditCardTemplate(name, lastname, dob, SS) {
    this.name = name;
    this.lastname = lastname;
    this.dob = dob;
    var ccInfo = [name, lastname, dob];
    console.log("Your pesonal data is  and will be stored securely.");
}

creditCardTemplate.prototype.user() {

    this.name =
        this.lastname =
