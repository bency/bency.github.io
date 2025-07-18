# 台灣交通安全數據儀表板

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.0-purple.svg)](https://getbootstrap.com/)
[![C3.js](https://img.shields.io/badge/C3.js-0.7.4-blue.svg)](https://c3js.org/)

一個現代化的台灣交通安全數據視覺化儀表板，透過互動式圖表深入分析台灣交通安全趨勢與統計數據。

## 🌟 功能特色

### 📊 數據視覺化
- **機車安全分析** - 機車每萬人肇事率、死亡率、受傷率變化趨勢
- **車種比較** - 各車種每萬人死亡率變化對比
- **歷年統計** - 台灣交通死亡/受傷人數歷年變化
- **領牌數據** - 大型重型機車領牌數量歷年成長分析
- **車輛成長** - 各車種領牌數量歷年成長變化
- **執法統計** - 臺北市交通違規舉發統計
- **公車運輸** - 台南市公車歷年運輸統計

### 🎨 現代化設計
- **響應式佈局** - 支援桌面、平板、手機等各種設備
- **現代化UI** - 使用Bootstrap 5框架，具備現代感的視覺設計
- **互動式圖表** - 基於C3.js和D3.js的互動式數據視覺化
- **直觀導航** - 卡片式導航設計，快速定位所需圖表
- **平滑動畫** - 流暢的頁面滾動和互動效果

### 🚀 用戶體驗
- **英雄區段** - 吸引人的漸層背景首頁
- **快速導覽** - 圖標化的導覽卡片
- **回到頂部** - 便利的頁面導航按鈕
- **深色模式友好** - 適配各種顯示環境

## 📁 專案結構

```
├── index.html          # 主要儀表板頁面
├── style.css           # 自定義樣式文件
├── data.js             # 圖表數據和配置
├── search.html         # 搜索工具頁面
├── search.js           # 搜索功能腳本
└── README.md           # 專案說明文件
```

## 🛠️ 技術棧

### 前端框架
- **Bootstrap 5.3.0** - 響應式CSS框架
- **C3.js 0.7.4** - 基於D3.js的圖表庫
- **D3.js 5.9.7** - 數據驅動的文檔操作庫

### 設計資源
- **Font Awesome 6.4.0** - 圖標字體庫
- **Google Fonts** - Noto Sans TC 繁體中文字體
- **CSS3** - 現代化樣式和動畫效果

### 瀏覽器支援
- Chrome (推薦)
- Firefox
- Safari
- Edge
- 移動端瀏覽器

## 🚀 快速開始

### 1. 克隆專案
```bash
git clone <repository-url>
cd taiwan-traffic-safety-dashboard
```

### 2. 運行專案
由於專案是純前端應用，您可以：

**方法一：直接開啟**
```bash
# 直接用瀏覽器開啟 index.html
open index.html
```

**方法二：使用本地伺服器**
```bash
# 使用 Python 3
python -m http.server 8000

# 或使用 Node.js
npx http-server

# 然後在瀏覽器中開啟 http://localhost:8000
```

### 3. 開始探索
- 瀏覽器將顯示現代化的儀表板首頁
- 點擊「開始探索」按鈕或使用導覽卡片
- 查看各種交通安全統計圖表

## 📈 數據說明

### 時間範圍
- **主要數據期間**：民國80年（1991年）- 民國109年（2020年）
- **部分數據延伸至**：民國112年（2023年）

### 數據來源
- 交通部統計處
- 警政署交通組
- 各縣市政府交通局
- 臺北市政府警察局
- 台南市政府交通局

### 圖表類型
- **折線圖** - 趨勢變化分析
- **區域圖** - 堆疊數據比較
- **混合圖** - 多維度數據展示
- **柱狀圖** - 成長率比較

## 🔧 自定義配置

### 修改圖表數據
編輯 `data.js` 文件中的相應圖表配置：

```javascript
var chart = c3.generate({
    bindto: '#chart',
    data: {
        columns: [
            // 在此修改數據
        ]
    }
});
```

### 自定義樣式
修改 `style.css` 中的CSS變數：

```css
:root {
    --primary-color: #0d6efd;
    --secondary-color: #6c757d;
    /* 修改其他顏色變數 */
}
```

## 📱 響應式設計

### 斷點設置
- **手機** (< 576px)
- **平板** (576px - 768px)
- **桌面** (768px - 1200px)
- **大螢幕** (> 1200px)

### 適配特性
- 自動調整圖表大小
- 響應式導航選單
- 觸控友好的互動元素
- 優化的字體和間距

## 🎯 重要統計指標

### 交通安全里程碑
- **民國83年** - 台北市強制戴安全帽
- **民國86年** - 全國強制戴安全帽、駕駛強制繫安全帶
- **民國88年** - 全國實施強制兩段式左轉、禁行機車
- **民國90年** - 副駕駛強制繫安全帶
- **民國93-95年** - 路權優先安全第一專案
- **民國98年** - 安全氣囊列為標準配備
- **民國100年** - 後座強制繫安全帶

### 機車政策變化
- **民國96年** - 開放550cc以上機車行駛高架道路
- **民國101年** - 開放未滿550cc機車行駛高架道路

## 🤝 貢獻指南

歡迎為專案做出貢獻！請遵循以下步驟：

### 提交問題
1. 檢查是否已有相似的問題
2. 使用清晰的標題和描述
3. 提供重現步驟（如適用）

### 提交代碼
1. Fork 專案
2. 創建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 開啟 Pull Request

### 代碼規範
- 使用一致的縮進（2空格）
- 添加適當的註釋
- 遵循現有的命名規範
- 確保響應式設計相容性

## 📄 授權協議

本專案採用 MIT 授權協議。詳細內容請參閱 [LICENSE](LICENSE) 文件。

## 🙏 致謝

- 感謝交通部統計處提供的公開數據
- 感謝各縣市政府交通相關部門的數據支持
- 感謝所有為台灣交通安全努力的相關單位

## 📞 聯絡資訊

- **專案維護者** - [您的名字]
- **電子郵件** - [您的電子郵件]
- **專案首頁** - [專案網址]

## 🔗 相關連結

- [交通部統計處](https://www.motc.gov.tw/ch/index.jsp)
- [警政署交通組](https://www.npa.gov.tw/)
- [道路交通安全規則](https://law.moj.gov.tw/)

---

**最後更新**: 2024年

如果您覺得這個專案對您有幫助，請給我們一個 ⭐️ 星星！