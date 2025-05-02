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
  
  // 將攝影機影像顯示在畫布中央
  image(capture, (windowWidth - capture.width) / 2, (windowHeight - capture.height) / 2);
}

function windowResized() {
  // 當視窗大小改變時，調整畫布大小
  resizeCanvas(windowWidth, windowHeight);
}
