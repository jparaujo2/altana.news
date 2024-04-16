function openModal(imageSrc) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    modalImage.src = imageSrc;
    modal.classList.add('active');
  }

  function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('active');
  }
 