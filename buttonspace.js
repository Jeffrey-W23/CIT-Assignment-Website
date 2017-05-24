function Submit() {
            var firstname = document.getElementById("FirstName").value;
            var lastname = document.getElementById("LastName").value;
            var address = document.getElementById("Address").value;
            var suburb = document.getElementById("Suburb").value;
            var state = document.getElementById("State").value;
            var postcode = document.getElementById("PostCode").value;

            alert("Thank you for purchasing SpaceGame" + "\n" + "Your details:" + "\n" + "\n" + "First Name: " + firstname + "\n" + "Last Name: " + lastname + "\n" + "Address: " + address + "\n" +  "Suburb: " + suburb + "\n" +  "State: " + state + "\n" +  "Postcode: " + postcode);
            window.location.href="download.html";
    }