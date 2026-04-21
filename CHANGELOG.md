# CHANGELOG — 張智森個人履歷網站

每次重要更新記錄於此，方便日後比對各版本內容差異。

---

## v0.8 — 2026-04-21（即將推送）
**Commit 說明：** feat: 更新自我介紹為寵物產業版本，修正 Tailwind canonical classes

### 變更內容
- `components/AboutSection.tsx`：標題改為「熱愛寵物，以執行力串聯物流與門市店務」；三段自傳重寫，以寵物產業為訴求，凸顯物流庫存管理、IT 快速上手與機車外送能力
- `components/SectionLabel.tsx`：`h-[2px]` → `h-0.5`（Tailwind canonical class）
- `components/EducationSection.tsx`：`flex-shrink-0` → `shrink-0`（Tailwind canonical class）
- `data/resume.json`：`summary` 欄位更新為寵物產業版本自我介紹，新增結尾願景句

---

## v0.7 — fix: 修正 OG 標籤 metadataBase 與網域設定
**Commit hash：** `859d8cb`

### 變更內容
- `app/layout.tsx`：修正 `metadataBase` 指向正確的正式網域 `https://zhang-zhi-sen.vercel.app`

---

## v0.6 — feat: 新增 OG 圖片與完整 Open Graph 標籤設定
**Commit hash：** `dd3e8d1`

### 變更內容
- `app/layout.tsx`：加入完整 Open Graph metadata（title、description、url、og-image）
- `public/og-image.png`：新增 1200×630 OG 圖片

---

## v0.5 — feat: PDF 改名為 履歷_張智森.pdf
**Commit hash：** `f902bb2`

### 變更內容
- PDF 輸出檔名從 `resume.pdf` 改為 `履歷_張智森.pdf`

---

## v0.4 — fix: Tailwind canonical classes, 更新職稱 PDF
**Commit hash：** `05c1e56`

### 變更內容
- 修正多處 Tailwind 非正規 class（`flex-shrink` → `shrink` 等）
- PDF 更新至最新職稱版本

---

## v0.3 — feat: 專案改為 Excel VBA 自動化報表，更新 PDF
**Commit hash：** `bc959e9`

### 變更內容
- `components/ProjectsSection.tsx`：主打專案改為 Excel VBA 自動化報表工具

---

## v0.2 — feat / fix 系列（職稱、副標語、按鈕調整）
**Commit hashes：** `76c6394` → `01386b1`

| Hash | 說明 |
|------|------|
| `76c6394` | 首頁副標語改為行政協調導向 |
| `97a9f55` | 職稱改為行政人員／營業專員 |
| `1496fd8` | 應徵職稱改為行政助理，新增 CSS 型別宣告 |
| `1e96c58` | Scroll 改為「查看更多」 |
| `01386b1` | 寄信按鈕改為「查看履歷 PDF」，PDF 託管於 GitHub |

---

## v0.1 — 初始設定與基礎修復
**Commit hashes：** `a1dbb46` → `8fdcf4a`

| Hash | 說明 |
|------|------|
| `a1dbb46` | favicon.ico 改用 RGBA 格式修復 Turbopack 建置錯誤 |
| `2f53749` | 新增履歷風格網站圖示（文件+人像） |
| `215c7b0` | 聯絡頁移除「用人主管」字樣 |
| `c6333fa` | 停用搜尋引擎收錄（noindex + robots.txt） |
| `616c4b9` | 修正系辦文字、換 Gmail、Hero 標語、按鈕改寄信 |
| `8fdcf4a` | **初始建立**：張智森個人履歷網站 Next.js + Tailwind |
