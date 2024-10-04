// show donate
document.getElementById('btn-show-donate').addEventListener('click', function() {
    showSectionById('donate-action');
    changeButton('btn-show-donate', 'btn-show-history');

}); 

// show history
document.getElementById('btn-show-history').addEventListener('click', function() {
    showSectionById('history-action');
    changeButton('btn-show-history', 'btn-show-donate');
});


// donate for Noakhali
document.getElementById('btn-noakhali').addEventListener('click', function(event) {
    event.preventDefault();

    const donateNoakhali = getInputFieldById('donate-noakhali');
    const amountNoakhali = getTextFieldById('amount-noakhali');
    const myAmount = getTextFieldById('my-amount');

    if (!isNaN(donateNoakhali) && donateNoakhali > 0 && parseFloat(donateNoakhali) <= parseFloat(myAmount)) {
        const newMyAmount = parseFloat(myAmount) - parseFloat(donateNoakhali);
        const newAmountNoakhali = parseFloat(amountNoakhali) + parseFloat(donateNoakhali);

        document.getElementById('my-amount').innerText = newMyAmount;
        document.getElementById('amount-noakhali').innerText = newAmountNoakhali;
       
        document.getElementById('my_modal_1').showModal();
        document.getElementById('donate-noakhali').value = "";

        // add history
        const div = document.createElement('div');
        div.innerHTML = `
            <p>${donateNoakhali} Taka is Donated for Flood at Noakhali, Bangladesh</p>
            <p>${new Date()}</p>
            <hr class="border-black my-2">
        `;
        document.getElementById('history-container').appendChild(div);
    } else {
        return alert("Invalid Donation Amount!");
    }
});

// donate for Feni
document.getElementById('btn-feni').addEventListener('click', function(event) {
    event.preventDefault();

    const donateFeni = getInputFieldById('donate-feni');
    const amountFeni = getTextFieldById('amount-feni');
    const myAmount = getTextFieldById('my-amount');

    if (!isNaN(donateFeni) && donateFeni > 0 && parseFloat(donateFeni) <= parseFloat(myAmount)) {
        const newMyAmount = parseFloat(myAmount) - parseFloat(donateFeni);
        const newAmountFeni = parseFloat(amountFeni) + parseFloat(donateFeni);

        document.getElementById('my-amount').innerText = newMyAmount;
        document.getElementById('amount-feni').innerText = newAmountFeni;

        document.getElementById('my_modal_2').showModal();
        document.getElementById('donate-feni').value = "";

        // add history
        const div = document.createElement('div');
        div.innerHTML = `
            <p>${donateFeni} Taka is Donated for Flood at Feni, Bangladesh</p>
            <p>${new Date()}</p>
            <hr class="border-black my-2">
        `;
        document.getElementById('history-container').appendChild(div);
    } else {
        return alert("Invalid Donation Amount!");
    }
});

// donate for Quota Movement
document.getElementById('btn-quota').addEventListener('click', function(event) {
    event.preventDefault();

    const donateQuota = getInputFieldById('donate-quota');
    const amountQuota = getTextFieldById('amount-quota');
    const myAmount = getTextFieldById('my-amount');

    if (!isNaN(donateQuota) && donateQuota > 0 && parseFloat(donateQuota) <= parseFloat(myAmount)) {
        const newMyAmount = parseFloat(myAmount) - parseFloat(donateQuota);
        const newAmountQuota = parseFloat(amountQuota) + parseFloat(donateQuota);

        document.getElementById('my-amount').innerText = newMyAmount;
        document.getElementById('amount-quota').innerText = newAmountQuota;

        document.getElementById('my_modal_3').showModal();
        document.getElementById('donate-quota').value = "";

        // add history
        const div = document.createElement('div');
        div.innerHTML = `
            <p>${donateQuota} Taka is Donated for Injured People in Quota Movement, Bangladesh</p>
            <p>${new Date()}</p>
            <hr class="border-black my-2">
        `;
        document.getElementById('history-container').appendChild(div);
    } else {
        return alert("Invalid Donation Amount!");
    }
});