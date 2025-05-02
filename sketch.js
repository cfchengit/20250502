let capture;
let graphics;

function setup() {
  // 建立全螢幕畫布
  createCanvas(windowWidth, windowHeight);
  // 設定背景顏色為 e7c6ff
  background('#e7c6ff');
  
  // 初始化攝影機擷取
  capture = createCapture(VIDEO);
  capture.size(windowWidth * 0.8, windowHeight * 0.8); // 設定影像大小為視窗的 80%
  capture.hide(); // 隱藏原始的 HTML 視訊元素

  // 使用 createGraphics 產生與攝影機影像相同大小的圖形
  graphics = createGraphics(capture.width, capture.height);
}

function draw() {
  // 清除畫布並重新設定背景顏色
  background('#e7c6ff');
  
  // 翻轉畫布以左右顛倒影像
  // push();
  // translate(width / 2, height / 2); // 將原點移到畫布中央
  // scale(-1, 1); // 水平翻轉
  // image(capture, -capture.width / 2, -capture.height / 2, capture.width, capture.height);
  // pop();

  // 設定 graphics 的背景為黑色
  graphics.background(0);

  // 在 graphics 上繪製每隔 20 單位的方框和圓
  for (let y = 0; y < graphics.height; y += 20) {
    for (let x = 0; x < graphics.width; x += 20) {
      // 從 capture 中取得相對位置的顏色
      let col = capture.get(x, y);
      graphics.fill(col); // 設定方框的顏色
      graphics.noStroke();
      graphics.rect(x + 1, y + 1, 18, 18); // 繪製方框，稍微偏移以對齊格子

      // 在方框中間繪製黑色圓
      graphics.fill(0); // 設定圓的顏色為黑色
      graphics.ellipse(x + 10, y + 10, 5, 5); // 繪製圓，中心偏移 10 以對齊方框
    }
  }

  // 修正 graphics 顯示的左右顛倒
  push();
  translate((width - graphics.width) / 2 + graphics.width / 2, (height - graphics.height) / 2 + graphics.height / 2);
  scale(-1, 1); // 水平翻轉 graphics
  image(graphics, -graphics.width / 2, -graphics.height / 2);
  pop();
}

function windowResized() {
  // 當視窗大小改變時，調整畫布大小
  resizeCanvas(windowWidth, windowHeight);
}
