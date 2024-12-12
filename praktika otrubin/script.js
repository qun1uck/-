function openForm() {
    document.getElementById('formModal').style.display = 'block';
}

function closeForm() {
    document.getElementById('formModal').style.display = 'none';
}

function openCallBackForm() {
    document.getElementById('callBackModal').style.display = 'block';
}

function closeCallBackForm() {
    document.getElementById('callBackModal').style.display = 'none';
}

function openAgreement() {
    document.getElementById('agreementModal').style.display = 'block';
}

function closeAgreement() {
    document.getElementById('agreementModal').style.display = 'none';
}

document.getElementById('requestForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('formModal').style.display = 'none';
    document.getElementById('alertModal').style.display = 'block';
});

document.getElementById('callBackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('callBackModal').style.display = 'none';
    document.getElementById('callBackAlertModal').style.display = 'block';
});

function closeAlert() {
    document.getElementById('alertModal').style.display = 'none';
}

function closeCallBackAlert() {
    document.getElementById('callBackAlertModal').style.display = 'none';
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
};
