// 현재 URL 정보를 출력하는 함수
function showLocation() {
    let locationInfo = window.location.href;
    document.getElementById("info").textContent = "현재 URL : " + locationInfo;
}

// 브라우저의 정보를 출력하는 함수
function showNavigator() {
    let navigatorInfo = window.navigator.userAgent;
    document.getElementById("info").textContent = "현재 브라우저 정보 : " + navigatorInfo;
}

// 새창 열기
function openWindow() {
    window.open("http://www.naver.com", "_blank", "width=500, height=500");
}