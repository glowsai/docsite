---
id: m0-db-usage
sidebar_position: 18
---

# Glows.ai 遠端 PostgreSQL 資料庫 Matrix0 使用教學

## 功能介紹

### 什麼是遠端 PostgreSQL 服務？

Glows.ai 提供託管式 PostgreSQL 資料庫服務，具有以下特性：

| 特性           | 說明                                             |
| -------------- | ------------------------------------------------ |
| **關聯式儲存** | 標準 PostgreSQL 功能，儲存使用者資料、設定等     |
| **向量儲存**   | 內建 pgvector 擴充功能，支援向量資料的儲存和檢索 |
| **免維運**     | 無需安裝、設定、維護資料庫                       |
| **高效能**     | 專屬實例，低延遲高吞吐                           |
| **自動備份**   | 資料自動備份，安全可靠                           |

### 適用場景

- AI Agent 專案（RAG、向量檢索）
- 大型語言模型應用（對話記憶、知識庫）
- 資料分析專案
- 任何需要資料庫的專案

## 開通服務

服務內測期間，僅提供給有購買 Public IP 的客戶使用。如有測試需求，可以[點此這裡聯繫我們](#聯繫我們)開通。

## 創建實例

我們在 Glows.ai 按需建立一個實例，可以參考[教學](https://docs.glows.ai/docs/create-new)，本教學使用的 **CUDA12.8 Torch2.8.0 Base**(img-6ypgvgpw) 映像檔。

在 `Create New` 介面 Workload Type 選擇 Inference GPU -- 4090，先選擇映像檔 **CUDA12.8 Torch2.8.0 Base**，該映像檔已由官方預先配置好AI項目需要的基礎環境（CUDA、Pytorch 等)。

![ ](../../../../../docs/docs-images/p18/001.png)

可以按需設定 `Unit Qty` (GPU 顯示卡數量)，`Mount Datadrive`（Glowsai 雲端儲存）。如果需要使用資料庫功能，需要再點擊 `Bind Public IP Address` 下的 `Bind`按鈕，配置固定 IP。

![ ](../../../../../docs/docs-images/p18/002.png)

實例啟動完成後，將實例 ID(ins-xxxx)發送給 [glows小幫手](https://sass-ai.chatshare.biz/c/69e1af93-1f10-8330-a72c-a5b1705349ba#聯繫我們)，待工程師為您配置後，提供資料庫內網連線方式。

您將收到以下資訊：

| 參數       | 說明         | 範例          |
| ---------- | ------------ | ------------- |
| `HOST`     | 資料庫位址   | `172.172.1.1` |
| `PORT`     | 資料庫連接埠 | `3306`        |
| `USER`     | 使用者名稱   | `glowsai`     |
| `PASSWORD` | 密碼         | `********`    |
| `DATABASE` | 預設資料庫   | `postgres`    |

## 基礎使用

### 安裝連線工具

直接連線資料庫可以使用 postgresql-client 工具，ssh 連線實例後輸入以下指令安裝工具套件。

```bash
# 安裝 PostgreSQL 客戶端
apt-get update && apt-get install -y postgresql-client

# 驗證安裝
psql --version
```

![ ](../../../../../docs/docs-images/p18/003.png)

### 連線資料庫

使用 psql 命令列連線，依以下指令操作即可。

```bash
# 基本連線指令
psql -h <HOST> -p <PORT> -U <USER> -d <DATABASE>

# 範例（替換為小幫手提供的實際資訊）
psql -h 172.172.1.1 -p 3306 -U glowsai -d postgres
```

![ ](../../../../../docs/docs-images/p18/004.png)

### 建立資料庫

```sql
-- 建立新資料庫
CREATE DATABASE my_project_db;

-- 連線到新資料庫
\c my_project_db
```

![ ](../../../../../docs/docs-images/p18/005.png)

### 向量資料基礎操作

與基礎資料庫操作一致，以下示範資料庫新增、刪除、查詢、修改相關操作。

#### 建立向量資料表

```sql
-- 安裝向量
CREATE EXTENSION IF NOT EXISTS vector;

-- 建立帶有向量欄位的資料表
CREATE TABLE embeddings (
    id bigserial PRIMARY KEY,
    content text,
    embedding vector(4)
);
```

#### 插入向量資料

```sql
-- 插入測試資料（模擬向量）
INSERT INTO embeddings (content, embedding) VALUES
('Hello world', '[0.1, 0.1, 0.3, 0.4]'),
('Document 1', '[0.1, 0.2, 0.3, 0.4]'),
('Document 2', '[0.4, 0.5, 0.6, 0.7]'),
('Document 3', '[0.4, 0.5, 0.6, 0.7]'),
('Document 4', '[0.5, 0.7, 0.6, 1.0]');
```

![ ](../../../../../docs/docs-images/p18/006.png)

#### 向量相似度搜尋

```bash
-- 餘弦距離（建議用於文本嵌入）
SELECT id, content, embedding <=> '[0.1, 0.2, 0.3, 0.3]'::vector as distance
FROM embeddings
ORDER BY embedding <=> '[0.1, 0.2, 0.3, 0.3]'::vector
LIMIT 2;
```

**說明**:

- `<=>` 是餘弦距離運算子
- `1 - distance` 轉換為相似度（0-1 範圍，越大越相似）

![ ](../../../../../docs/docs-images/p18/007.png)

#### 更新向量資料

```sql
-- 更新某筆記錄的向量
UPDATE embeddings
SET embedding = array_fill(0.5, ARRAY[4])::vector
WHERE id = 1;

-- 驗證更新
SELECT id, content, embedding FROM embeddings WHERE id = 1;
```

![ ](../../../../../docs/docs-images/p18/008.png)

#### 刪除向量資料

```sql
-- 刪除指定記錄
DELETE FROM documents WHERE id = 3;

-- 查看剩餘記錄
SELECT COUNT(*) FROM embeddings;

-- 刪除所有記錄
DELETE FROM embeddings;
```

### Python 連線範例

除了使用系統工具直接連線，也可以配置到 Python程式中，首先輸入以下指令安裝連線工具。

```bash
pip install psycopg2-binary
```

測試讀取資料庫中：

```bash
import psycopg2

conn = psycopg2.connect(
    host="172.172.1.1",
    port=3306,
    user="glowsai",
    password="xxxxx",
    dbname="my_project_db"
)

cur = conn.cursor()
cur.execute("SELECT * FROM embeddings;")
rows = cur.fetchall()

for row in rows:
    print(row)

cur.close()
conn.close()
```

![ ](../../../../../docs/docs-images/p18/009.png)

## 項目實戰：LiteLLM + Glows Matrix0 db

LiteLLM 是一個統一呼叫多種大型模型（如 OpenAI、Anthropic 等）的代理與工具層，提供相容 OpenAI 的介面，方便在不同模型之間切換與管理。在實際部署中，LiteLLM 通常搭配 PostgreSQL 作為資料庫，因其穩定可靠、支援高併發與複雜查詢，並可擴展向量（如 pgvector）能力，適合儲存日誌與 embeddings，便於後續分析與檢索。

### 使用 Docker 部署 LiteLLM

建立一台支援 Docker 的 CPU VM，最簡單的方式就是直接透過 Docker 部署 LiteLLM。
在 Glowsai 平台依照圖示操作，選擇：

`Create New` → `CPU` → `Ubuntu 24.04 Docker NV 580` 映像檔

![ ](../../../../../docs/docs-images/p18/010.png)

### 啟動 LiteLLM

當實例成功啟動並連線後，只需要建立以下三個檔案，即可快速啟動 LiteLLM：

- `docker-compose.yml`：服務啟動設定
- `.env`：環境變數設定
- `config.yaml`：LiteLLM 設定檔

#### docker-compose.yml 設定

此檔案用來定義容器使用的映像檔與啟動參數：

```bash
services:
  litellm:
    image: docker.litellm.ai/berriai/litellm:main-stable
    container_name: litellm-gateway
    restart: unless-stopped
    env_file:
      - .env
    volumes:
      - ./config.yaml:/app/config.yaml:ro
    command: ["--config", "/app/config.yaml", "--port", "4001", "--num_workers", "4"]
    ports:
      - "0.0.0.0:4001:4001"
```

#### .env 環境變數設定

在服務啟動前，請於 `.env` 檔中加入以下內容：

```bash
# API 主金鑰（用於 API 呼叫與 LiteLLM WebUI 登入）
LITELLM_MASTER_KEY=sk-glowsai

# PostgreSQL 資料庫連線字串
DATABASE_URL=postgresql://glowsai:xxxxxxx@172.172.1.1:3306/postgres

# 是否將模型資料儲存至資料庫
STORE_MODEL_IN_DB=True
```

#### config.yaml 設定

在 `config.yaml` 中加入以下設定：

```yaml
general_settings:
  master_key: os.environ/LITELLM_MASTER_KEY
  store_model_in_db: true
```

### 啟動服務

完成上述設定後，執行以下指令啟動 LiteLLM：

```bash
# 啟動服務
docker compose up -d

# 查看容器日誌
docker logs -f litellm-gateway
```

LiteLLM 會自動依照 `.env` 中的 `DATABASE_URL` 連線資料庫，並初始化建立相關資料表。

![ ](../../../../../docs/docs-images/p18/011.png)

### 驗證資料庫

這時候我們再連線遠端資料庫，輸入`\dt`可以看到資料庫裡新建了許多 LiteLLM 相關資料表。

```sql
\dt
```

![ ](../../../../../docs/docs-images/p18/012.png)

服務啟動完畢後，也可以正常登入查看 LiteLLM 後台資料，建立API Key、設定模型 Provider 和模型等操作。

![ ](../../../../../docs/docs-images/p18/013.png)

## FAQs

**1、現在使用流程是什麼樣的？**

先聯繫我們開通使用權限（配備一個Glowsai Public IP），啟動實例按教學步驟配置 Bind Public IP，然後告訴我們您的實例Id，我們會請工程師配置資料庫內網連線，再告訴您實例內連線方式。

**2、遠端資料庫連線方式中 ip 和 port 是否可以自訂？**

可以自訂，您告訴我們您期望使用的 ip 和 port 即可。

**3、在 Glows.ai 部署 LiteLLM ，怎麼存取 WebUI？**

按本教學操作，LiteLLM 服務預設部署在 4001 Port，您在實例介面點擊 `New Port Binding`，輸入 Instance Service Port 和 Public IP Port，然後點擊 Create ，Port 設定成功後，即可透過 Glowsai Public IP + Public IP Port 在公網存取實例內服務。

![ ](../../../../../docs/docs-images/p18/014.png)

## 聯繫我們

如果您在使用 Glows.ai 的過程中有任何疑問或者建議，歡迎通過郵件、Discord 或者 Line 聯繫我們。

**Email:** [support@glows.ai](mailto:support@glows.ai)

**Discord:** [https://discord.com/invite/glowsai](https://discord.com/invite/glowsai)

**Line:** [https://lin.ee/fHcoDgG](https://lin.ee/fHcoDgG)
