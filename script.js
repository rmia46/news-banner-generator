function updatePreview() {
    // // Update provider name
    // document.getElementById('preview-provider').textContent = 
    //     document.getElementById('provider-name').value;

    // Update date
    const dateInput = document.getElementById('news-date');
    const previewDate = document.getElementById('preview-date');
    const dateValue = new Date(dateInput.value);
    const options = { day: '2-digit', month: 'long', year: 'numeric', timeZone: 'Asia/Kolkata' };
    const formattedDate = dateValue.toLocaleDateString('bn-BD', options);
    previewDate.textContent = `${formattedDate}`;

    // Update news title
    document.getElementById('preview-title').textContent = 
        document.getElementById('news-title').value;

    // Update image
    const fileInput = document.getElementById('image-upload');
    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('preview-image').src = e.target.result;
        };
        reader.readAsDataURL(fileInput.files[0]);
    }
}

function downloadBanner() {
    html2canvas(document.querySelector("#banner")).then(canvas => {
        const link = document.createElement('a');
        link.download = 'news-banner.png';
        link.href = canvas.toDataURL();
        link.click();
    });
}