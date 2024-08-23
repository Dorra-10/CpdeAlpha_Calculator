const display = document.querySelector("#display");
const btns = document.querySelectorAll("input[type=button]");

btns.forEach(item => {
    item.onclick = () => {
        if (item.id === "btn-ac") {
            display.value = '';
        } else if (item.id === "btn-del") {
            display.value = display.value.slice(0, -1);
        } else if (item.id === "btn-equal") {
            if (display.value !== "") {
                try {
                    display.value = eval(display.value);
                } catch {
                    display.value = 'Error';
                    setTimeout(() => display.value = '', 2000);
                }
            } else {
                display.value = 'Empty!';
                setTimeout(() => display.value = '', 2000);
            }
        } else {
            display.value += item.value;
        }
    }
});
