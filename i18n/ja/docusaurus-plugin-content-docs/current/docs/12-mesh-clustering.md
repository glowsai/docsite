---
id: mesh-clustering
sidebar_position: 12
---

# メッシュ クラスタリング(Mesh Clustering)

**Mesh Clustering** ページでは、ネットワークグループ (Network Group)、ロードバランサー (Load Balancer)、および クラスター (Cluster) など、さまざまな種類のネットワークリソースを管理・作成することができます。  
現在は **Network Group** の管理のみ対応しています。  
以下は、ページの概要と操作ガイドです。

---

## **タブの説明**

- **Network Group**: すべてのネットワークグループの一覧が表示されます。
- **Load Balancer**: 今後、ロードバランサーの一覧が表示される予定です（現在は未対応）。
- **Cluster**: 今後、クラスターの一覧が表示される予定です（現在は未対応）。

### **リスト項目**

- **ID**: ネットワークリソースの一意の識別子。
- **Name**: ネットワークリソースの名称。
- **Capacity**: 現在使用中のインスタンス数と総容量を表示します（例：0/5）。
- **Action**: 実行可能な操作。**Edit**（編集）および **Delete**（削除）が含まれます。
  ![Mesh list](../../../../../docs/docs-images/p09/01.Mesh%20list.jpg)

---

## **新しい Mesh の作成**

右上の `Create New` ボタンをクリックし、新しい Mesh 作成画面に移動します。

1. **Select Mesh Type**(Mesh Type の選択)：現在は Network Group のみ対応しています。
2. **Enter Name**(Name の入力)：新しい Mesh に名前を指定します。
   
![Create New Mesh](../../../../../docs/docs-images/p09/02.Create%20Mesh.jpg)

---

## **Instance を Mesh に追加**

Mesh を作成した後、インスタンスを Mesh に追加することができます：

1. 一覧から先ほど作成した Mesh をクリックし、詳細ページに移動します。
2. `Add Instance` ボタンをクリックし、インスタンス追加画面を表示します。
3. 左側のリストには、現在 **Running** 状態のインスタンスがすべて表示されます。
4. 追加したいインスタンスにチェックを入れ、矢印ボタンをクリックして Mesh に追加します。
5. 追加されたインスタンスは右側のリストに表示されます。

![Add Instance](../../../../../docs/docs-images/p09/03.Add%20Instance.jpg)

### **Instance の削除**

- 右側のリストで削除したいインスタンスにチェックを入れ、`Remove Selected` ボタンをクリックします。
- または、インスタンスの **Action** 欄にあるゴミ箱アイコンをクリックすると、そのインスタンスは左側のリストに戻ります。

![Remove Instance](../../../../../docs/docs-images/p09/04.Remove%20Instance.jpg)

---

## **追加された Instance 情報の確認**

Mesh にインスタンスを追加した後、その Mesh をクリックすると、追加されたインスタンスの情報が表示されます。内容は以下の通りです：

- **IP CIDR**：インスタンスの IP アドレス範囲を示します。例：**192.168.3.2/24**。この範囲は、利用可能な IP アドレスとサブネットマスクを定義します。
- **ID**：インスタンスの一意な識別子。
- **Name**：インスタンス名。
- **Bandwidth**：インスタンスの帯域幅（例：**100 Mbps**）。
- **Status**：インスタンスの現在の状態。
- **Action**：**Disconnect** 操作を含み、該当インスタンスを削除する際に使用します。

![Mesh Instance Info](../../../../../docs/docs-images/p09/05.Mesh%20Instance%20Info.jpg)

---

この設定により、ネットワークリソースを柔軟に管理し、ニーズに応じてネットワーク構成を調整できます。
