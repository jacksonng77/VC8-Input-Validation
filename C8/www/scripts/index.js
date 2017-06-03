(function () {

$(document).ready(function () {
    $("#btnCalculate").bind("click", function () {
        if ($("#salaryform").valid()) {
            calculateSalary();
        }
    });

$("#salaryform").validate({
    messages: {
        txtName: "employee name is required",
        txtRate: "rate must be a number greater than 0",
        txtMonths: "month must be a whole number",
    },
    rules: {
        txtMonths: {
            digits: true
        },
        txtRate: {
            min: 1
        },  
    },
    focusInvalid: false,
    submitHandler: function () {
        return false;
    },
    errorPlacement: function (error, element) {
        error.appendTo(element.parent().parent().after());
    },
});
});

function calculateSalary() {
    var employeename, months, rate, role, salary;
    employeename = $("#txtName").val();
    months = $("#txtMonths").val();
    rate = $("#txtRate").val();
    role = $("#selRole").val();

    salary = round(months * rate * role, 1);

    if (getRadioValue("rdoDiscipline") == "TRUE") {
        salary = round(salary * 0.8, 1);
    }

    validationMsgs("Your Salary is " + salary, "Information", "OK");
}


})();