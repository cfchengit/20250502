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


