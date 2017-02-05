var form = document.getElementById('file-form');
var fileSelect = document.getElementById('file-select');
var uploadButton = document.getElementById('upload-button');

form.onsubmit = function (event) {
    event.preventDefault();

    // Update button text.
    uploadButton.innerHTML = 'Uploading...';
    console.log('i am trying to upload');
    // The rest of the code will go here...
    var files = fileSelect.files;
    var formData = new FormData();
    for (var i = 0; i < files.length; i++) {
        var file = files[i];

        // Check the file type.
        if (!file.type.match('image.*')) {
            continue;
        }

        // Add the file to the request.
        formData.append('photos[]', file, file.name);
    }

    formData.append(name, file, filename);
    console.log("onsubmit :", "formData=", formData);

    $.ajax({
        type: "POST",
        url: url,
        data: formData,
        success:()=>{
            console.log('ok');},
        dataType: dataType
    });



}