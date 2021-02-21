
function get_all_checkboxes() {
    const checkboxes = document.querySelectorAll("input[type=checkbox]");
    return checkboxes;
}

function get_table_row_checkbox(checkbox) {
    const parent = checkbox.closest('tr');
    return parent;
}


get_all_checkboxes().forEach(checkbox => {
    checkbox.addEventListener('click', () => {
        const p = get_table_row_checkbox(checkbox)
        p.querySelectorAll("input").
            forEach(i => {
                if (checkbox !== i) {
                    i.checked = false;
                }
            })
    })
});


