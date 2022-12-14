----file choosen---

const fileUploader = document.getElementById('file-uploader');

fileUploader.addEventListener('change', (event) => {
  const files = event.target.files;
  console.log('files', files);
  
  for (const file of files) {
    const name = file.name;
    const type = file.type ? file.type : 'NA';
    const size = file.size;
    const lastModified = file.lastModified;
    console.log({file, name, type, size, lastModified});
    
    const feedback = document.getElementById('feedback');
    const msg = ` File Name: ${name} <br/>
              File Size: ${size} <br/>
              File type: ${type} <br/>
              File Last Modified: ${new Date(lastModified)}`;
              
    feedback.innerHTML = msg;
  }
});


// ----vdo-player----

const input = document.getElementById('file-input');
const video = document.getElementById('video');
const videoSource = document.createElement('source');

input.addEventListener('change', function() {
  const files = this.files || [];

  if (!files.length) return;
  
  const reader = new FileReader();

  reader.onload = function (e) {
    videoSource.setAttribute('src', e.target.result);
    video.appendChild(videoSource);
    video.load();
    video.play();
  };
  
  reader.onprogress = function (e) {
    console.log('progress: ', Math.round((e.loaded * 100) / e.total));
  };
  
  reader.readAsDataURL(files[0]);
});

var colors = ["red" , "green", "blue"]
for (let color of colors) {
  
  (colors);
}