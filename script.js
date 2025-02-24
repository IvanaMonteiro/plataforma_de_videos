let likesCount = 0;

function uploadVideo() {
    const videoUpload = document.getElementById('videoUpload');
    const videoList = document.getElementById('videoList');

    if (videoUpload.files.length > 0) {
        const videoFile = videoUpload.files[0];
        const videoElement = document.createElement('video');
        videoElement.controls = true;
        videoElement.src = URL.createObjectURL(videoFile);
        videoList.appendChild(videoElement);

        const commentSection = document.createElement('div');
        const commentInput = document.createElement('input');
        commentInput.type = 'text';
        commentInput.placeholder = 'Comente aqui...';
        const commentButton = document.createElement('button');
        commentButton.textContent = 'Comentar';
        commentSection.appendChild(commentInput);
        commentSection.appendChild(commentButton);

        const commentsContainer = document.createElement('div');
        commentSection.appendChild(commentsContainer);

        commentButton.addEventListener('click', () => {
            const commentText = commentInput.value;
            if (commentText) {
                const comment = document.createElement('p');
                comment.textContent = commentText;
                commentsContainer.appendChild(comment);
                commentInput.value = '';
            }
        });

        const likeSection = document.createElement('div');
        likeSection.classList.add('like-section');

        const likesCountElement = document.createElement('span');
        likesCountElement.textContent = `Curtidas: ${likesCount}`;
        likeSection.appendChild(likesCountElement);

        const likeButton = document.createElement('button');
        likeButton.textContent = 'Curtir';
        likeButton.classList.add('like-button');
        likeButton.addEventListener('click', () => {
            likesCount++;
            likesCountElement.textContent = `Curtidas: ${likesCount}`;
            alert('Você curtiu este vídeo!');
        });
        
        likeSection.appendChild(likeButton);
        videoList.appendChild(commentSection);
        videoList.appendChild(likeSection);
    }
}
