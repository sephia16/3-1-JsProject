document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('redirect-button');
    button.addEventListener('click', function() {
      window.location.href = '/test'; // 이 부분에서 상대 경로를 사용하여 리디렉션합니다.
    });
  });
  