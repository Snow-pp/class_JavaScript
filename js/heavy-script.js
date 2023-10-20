console.log('Script start');

// 현재 시간을 밀리초로 표현하여 startTime 변수에 저장
let startTime = new Date().getTime(); // 1000 -> 1초
let delay = 3000; // 3초

// 3초동안 브라우저 블로킹
while(new Date().getTime() < startTime + delay) {
    // 현재 시간이 startTime + delay(시작 시간 + 3초) 보다 작은 동안은 계속 이 블록 내에서 루프를 돌게됨
}

console.log('Script End');