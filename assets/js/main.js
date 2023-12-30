document.addEventListener('DOMContentLoaded', (event) => {
    console.log("DOM fully loaded and parsed");
    
    const viewSwitch = document.getElementById('viewSwitch');
    const personalView = document.getElementById('personalView');
    const businessView = document.getElementById('businessView');
    const viewLabel = document.getElementById('viewLabel');

    // Setting default view
    personalView.style.display = 'block';
    businessView.style.display = 'none';
    viewLabel.textContent = 'Personal';

    viewSwitch.addEventListener('change', function() {
        console.log("Switch toggled");
        
        if (this.checked) {
            personalView.style.display = 'none';
            businessView.style.display = 'block';
            viewLabel.textContent = 'Business';
        } else {
            personalView.style.display = 'block';
            businessView.style.display = 'none';
            viewLabel.textContent = 'Personal';
        }
    });
});
