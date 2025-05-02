let capture;

function setup() {
  // 建立全螢幕畫布
  createCanvas(windowWidth, windowHeight);
  // 設定背景顏色為 e7c6ff
  background('#e7c6ff');
  
  // 初始化攝影機擷取
  capture = createCapture(VIDEO);
  capture.size(windowWidth * 0.8, windowHeight * 0.8); // 設定影像大小為視窗的 80%
  capture.hide(); // 隱藏原始的 HTML 視訊元素
}

function draw() {
  // 清除畫布並重新設定背景顏色
  background('#e7c6ff');
  
  // 翻轉畫布以左右顛倒影像
  push();
  translate(width / 2, height / 2); // 將原點移到畫布中央
  scale(-1, 1); // 水平翻轉
  image(capture, -capture.width / 2, -capture.height / 2, capture.width, capture.height);
  pop();
}

function windowResized() {
  // 當視窗大小改變時，調整畫布大小
  resizeCanvas(windowWidth, windowHeight);
}
