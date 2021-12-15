function addOrDeleteHourlyRateElement() {
    var hourlyRateElement = '<div class="col-2"><label for="hourlyrate"><span class="text-danger">*</span>Rate/Hr</label><input id="hourlyrate" type="number" class="form-control" name="hourlyrate" tabindex="7" required></input></div>';

    let isHiring = document.getElementById("hiring").checked;

    if (isHiring) {
        let sectionToAppendTo = document.getElementById("city-province-hourly-section");
        sectionToAppendTo.appendChild(createHourlyRateElement());
    }
    else {
        var hourlyRateElement = document.getElementById("hourlyrate-section");
        hourlyRateElement.remove();
    }
}

function createHourlyRateElement() {
    var div = document.createElement("div");
    div.classList.add("col-2");
    div.id = "hourlyrate-section"

    var label = document.createElement("label");
    label.htmlFor = "hourlyrate";

    var span = document.createElement("span");
    span.classList.add("text-danger");
    var textForSpan = document.createTextNode("*");
    span.appendChild(textForSpan);

    var input = document.createElement("input");
    input.classList.add("form-control");
    input.id = "hourlyrate";
    input.type = "number";
    input.name = "hourlyrate";
    input.tabIndex = "7";
    input.required = true;

    label.appendChild(span);
    var textForLabel = document.createTextNode("Rate/Hr");
    label.appendChild(textForLabel);


    div.appendChild(label);
    div.appendChild(input);

    return div;
}

window.onload = function () {
    let form = document.querySelector('#contact-form');

    form.onsubmit = function (event) {
        console.log("Im clicked!");
        //First, the form's validity will be checked i.e if there is any missing required fields or not
        //If the fields are missing then stop the submission
        if (!form.checkValidity()) {
            form.classList.add('was-validated');

            //Stop the form from being submitted or reloaded until fields are filled out
            event.preventDefault();
            console.log("false");
            return false;
        } //Fine

        console.log("true");
        //If everything now looks good, allow this form to be submitted
        return true;
    }
};