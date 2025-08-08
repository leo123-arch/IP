 let dropArea = document.getElementById('drop-area');
  let fileInput = document.getElementById('fileElem');

  dropArea.addEventListener('click', () => fileInput.click());
  fileInput.addEventListener('change', handleFiles);

  ['dragenter', 'dragover'].forEach(eventName => {
    dropArea.addEventListener(eventName, (e) => {
      e.preventDefault();
      dropArea.classList.add('highlight');
    }, false)
  });

  ['dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, (e) => {
      e.preventDefault();
      dropArea.classList.remove('highlight');
    }, false)
  });

  dropArea.addEventListener('drop', (e) => {
    handleFiles(e.dataTransfer.files);
  });

  function handleFiles(files) {
    const file = files[0];
    const name = document.createElement('p');
    name.textContent = "File selected: " + file.name;
    dropArea.innerHTML = '';
    dropArea.appendChild(name);
  }

  // Canvas Doodle
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  ctx.strokeStyle = '#000';
  ctx.lineWidth = 2;

  let drawing = false;

  canvas.addEventListener('mousedown', () => drawing = true);
  canvas.addEventListener('mouseup', () => drawing = false);
  canvas.addEventListener('mouseout', () => drawing = false);
  canvas.addEventListener('mousemove', draw);

  function draw(e) {
    if (!drawing) return;
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
  }

  function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  function saveCanvas() {
    const imageData = canvas.toDataURL();
    alert("Drawing saved (in-memory). You can send this data to a backend:\n" + imageData.substring(0, 100) + "...");
  }

  document.getElementById("feedbackForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Feedback submitted! (This form can be wired to your backend or email.)");
  });