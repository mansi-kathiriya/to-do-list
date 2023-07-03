const sliders = document.querySelectorAll("input[type='range']");
console.log(sliders);
sliders.forEach(function(slider){
    slider.addEventListener("input",calculateTip);
});

const bill_input = document.getElementById("bill");
bill_input.addEventListener("change",calculateTip);

function calculateTip(){
    let bill = parseFloat(bill_input.value);
    let tip_percent = document.getElementById("tip").value;
    let no_of_people = document.getElementById("no-of-people").value;

    bill_input.value = bill.toFixed(2);

    let total_tip = parseFloat((bill * (tip_percent/100)).toFixed(2));
    let total = parseFloat((bill + total_tip).toFixed(2));

    let tip_per_person = (total_tip / no_of_people).toFixed(2);
    let total_per_person = (total / no_of_people).toFixed(2);

    document.getElementById("tip-amount").textContent = `\$ ${total_tip}`;
    document.getElementById("total-amount").textContent = `\$ ${total}`;

    document.getElementById("tip-percent").textContent = `${tip_percent}%`;
    document.getElementById("split-num").textContent = no_of_people;

    document.getElementById("tip-per-person").textContent = `\$ ${tip_per_person}`;
    document.getElementById("total-per-person").textContent = `\$ ${total_per_person}`;
}    
calculateTip();