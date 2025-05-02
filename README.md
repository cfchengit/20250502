# 20250502上課筆記

---

## 第一條指令

產生一個全螢幕的畫布，背景顏色為e7c6ff
擷取攝影機的影像，正常的顯示在視窗的中間
影像畫面寬高為視窗大小的80%
請把程式碼寫在sketch.js內

說明：
1. createCanvas(windowWidth, windowHeight)：建立全螢幕畫布。
1. background('#e7c6ff')：設定背景顏色為指定的紫色。
1. createCapture(VIDEO)：啟用攝影機擷取影像。
1. capture.size(windowWidth * 0.8, windowHeight * 0.8)：將影像大小設定為視窗的 80%。
1. image(capture, x, y)：將影像繪製在畫布中央。
1. windowResized：確保視窗大小改變時，畫布和影像能動態調整。

---

```javascript=
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

```


