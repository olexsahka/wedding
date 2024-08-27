document.addEventListener("DOMContentLoaded", function() {
    // Получаем параметры из URL
    const urlParams = new URLSearchParams(window.location.search);
    const videoId = urlParams.get('id');
    const videoTitle = urlParams.get('title');

    if (videoId && videoTitle) {
        // Задаем заголовок
        document.getElementById('videoTitle').textContent = videoTitle;

        // Задаем источник видео
        const videoPlayer = document.getElementById('videoPlayer');
        videoPlayer.querySelector('source').setAttribute('src', `videos/${videoId}.mp4`);
        videoPlayer.load();
    } else {
        // Обработка ошибки: отсутствуют параметры
        document.getElementById('videoTitle').textContent = 'Ошибка: видео не найдено';
        document.getElementById('videoPlayer').style.display = 'none';
    }
});
