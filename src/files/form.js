var form_name = document.getElementById('FormInputName');
var form_tel = document.getElementById('FormInputTel');
form_name.addEventListener('keyup', function (event) {
    if (check(form_name.value, true)) {
        form_name.style.borderColor = "#343434";
    } else {
        form_name.style.borderColor = "red";
    }
});

$('#exampleModal').on('hidden.bs.modal', function () {
    form_name.value = '';
    form_name.style.borderColor = "#343434";
    form_tel.value = '';
    form_tel.style.borderColor = "#343434";
    document.querySelector('.modal-content .main-title').innerHTML = 'Всё ещё в раздумьях?';
    document.querySelector('.modal-content .click-text').innerHTML = 'От принятия решения вас отделяет один клик'
    document.querySelector('.modal-content form').style.display = 'flex';
});


function form_submit(e) {
    e.preventDefault();
    var form_name_val = document.getElementById('FormInputName').value;
    var form_tel_val = document.getElementById('FormInputTel').value;
    var form_text_val = document.getElementById('FormInputText').value;
    if (check(form_name, true)) {
        form = new FormData();
        xhr = new XMLHttpRequest();
        form.append('form_name', form_name_val);
        form.append('form_tel', form_tel_val);
        form.append('form_text', form_text_val);

        xhr.onload = function () {
            if (xhr.status === 200) {
                document.querySelector('.modal-content .main-title').innerHTML = 'Спасибо!';
                document.querySelector('.modal-content .click-text').innerHTML = 'Мы свяжемся с вами в ближайшее время'
                document.querySelector('.modal-content form').style.display = 'none';
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


window.addEventListener("DOMContentLoaded", function () {
    [].forEach.call(document.querySelectorAll('input[type="tel"]'), function (input) {
        var keyCode;

        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+7 (___) ___-__-__",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function (a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function (a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5) this.value = ""
        }

        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false)

    });

});