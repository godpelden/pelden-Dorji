function openModal(){
document.getElementById('donationModal').style.display = 'block';
}

function closeModal(){
document.getElementById('donationModal').style.display = 'none';
}

window.onclick = function(event){
const modal = document.getElementById('donationModal');
if(event.target == modal){
modal.style.display = 'none';
}
}
function toggleMenu(){
document.getElementById("navLinks").classList.toggle("active");
}


