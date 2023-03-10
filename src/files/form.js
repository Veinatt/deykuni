var form_name = document.getElementById('FormInputName');
var form_tel = document.getElementById('FormInputTel');
form_name.addEventListener('keyup', function (event) {
    if (check(form_name.value, true)) {
        form_name.style.borderColor = "#808080";
    } else {
        form_name.style.borderColor = "red";
    }
});

$('#exampleModal').on('hidden.bs.modal', function () {
    form_name.value = '';
    form_name.style.borderColor = "#808080";
    form_tel.value = '';
    form_tel.style.borderColor = "#808080";
    document.getElementById('MainForm').style.display = 'flex';
    document.getElementById('FormSuccess').style.display = 'none';
});

$('#exampleModal').on('show.bs.modal', function (event) {
    // Button that triggered the modal
    var button = event.relatedTarget;
    // Extract info from data-bs-* attributes
    var recipient = button.getAttribute('data-bs-whatever');
    document.getElementById('MainForm').setAttribute('data-bs-whatever', recipient);

    // If necessary, you could initiate an AJAX request here
    // and then do the updating in a callback.
    //
    // Update the modal's content.
});




function form_submit(e) {
    e.preventDefault();
    var form_name = document.getElementById('FormInputName').value;
    var form_tel = document.getElementById('FormInputTel').value;
    if (check(form_name, true)) {
        form = new FormData();
        xhr = new XMLHttpRequest();
        form.append('form_name', form_name);
        form.append('form_type', document.getElementById('MainForm').getAttribute('data-bs-whatever'));
        form.append('form_tel', form_tel);

        xhr.onload = function () {
            if (xhr.status === 200) {
                document.getElementById('MainForm').style.display = 'none';
                document.getElementById('FormSuccess').style.display = 'flex';
            }
        }

        xhr.open('POST', 'form-handler.php');
        xhr.send(form);
    }
}

var form_name_Time = document.getElementById('FormInputNameTime');
var form_tel_Time = document.getElementById('FormInputTel');
form_name_Time.addEventListener('keyup', function (event) {
    if (check(form_name_Time.value, true)) {
        form_name_Time.style.borderColor = "#808080";
    } else {
        form_name_Time.style.borderColor = "red";
    }
});

$('#TimeModal').on('hidden.bs.modal', function () {
    form_name_Time.value = '';
    form_name_Time.style.borderColor = "#808080";
    form_tel_Time.value = '';
    form_tel_Time.style.borderColor = "#808080";
    document.getElementById('MainFormTime').style.display = 'flex';
    document.getElementById('FormSuccessTime').style.display = 'none';
});

function form_submit_Time(e) {
    e.preventDefault();
    var form_name = document.getElementById('FormInputNameTime').value;
    var form_tel = document.getElementById('FormInputTelTime').value;
    if (check(form_name, true)) {
        form = new FormData();
        xhr = new XMLHttpRequest();
        form.append('form_name', form_name);
        form.append('form_type', document.getElementById('MainFormTime').getAttribute('data-bs-whatever'));
        form.append('form_tel', form_tel);

        xhr.onload = function () {
            if (xhr.status === 200) {
                document.getElementById('MainFormTime').style.display = 'none';
                document.getElementById('FormSuccessTime').style.display = 'flex';
            }
        }

        xhr.open('POST', 'form-handler.php');
        xhr.send(form);
    }
}

function check(value, condition) {
    var result = false;
    if (condition) {
        var name_reg = /^([А-я])+(( +([А-я])+$)|$)/g;
        if (value.match(name_reg)) {
            result = true;
        }
    }
    return result;
}

$('body').activity({
    'achieveTime':60
    ,'testPeriod':10
    ,useMultiMode: 1
    ,callBack: function (e) {
        ga('send', 'event', 'Activity', '60_sec');
        yaCounterXXXXXXXXX.reachGoal('60_sec');
    }
});