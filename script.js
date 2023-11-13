const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');

let isDrawing = false;

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    draw(e);
});

canvas.addEventListener('mousemove', draw);

canvas.addEventListener('mouseup', () => {
    isDrawing = false;
    ctx.beginPath();  // Reset the path
});

function draw(e) {
    if (!isDrawing) return;

    ctx.lineWidth = 5;  // Set the line width
    ctx.lineCap = 'round';  // Round the end of the line
    ctx.strokeStyle = 'black';  // Set the color

    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}

function saveAs(format) {
    let link = document.createElement('a');
    link.download = `drawing.${format}`;
    if (format === 'png') {
        link.href = canvas.toDataURL("image/png");
    } else if (format === 'jpg') {
        link.href = canvas.toDataURL("image/jpeg");
    } else if (format === 'pdf') {
        const pdf = new jsPDF();  // Create a new instance of jsPDF
        pdf.addImage(canvas.toDataURL("image/jpeg", 1.0), 'JPEG', 0, 0, 210, (canvas.height / canvas.width) * 210);  // Add canvas image to the PDF, adjust dimensions accordingly
        link.href = pdf.output('bloburl');
    }
    link.click();
}