---
id: auto-scaling
sidebar_position: 10
---

# Auto Scaling 機能

**Auto Scaling** ページでは、新しいスケーリングルールの管理および作成が可能です。  
システム負荷に応じてリソースの割り当てを自動的に調整し、動的に拡張または縮小することで、運用効率を最適化します。以下は機能紹介と操作ガイドです。

---

## Auto Scaling ページには、2 つのタブが表示されます：

- **Auto Scaling**: 現在正常に稼働しているスケーリングルールが表示され、既存のルールを確認および管理できます。
- **Suspended**: 一時停止中のルールが表示され、必要に応じて再開することができます。

### **Rule List Columns**

- **ID**: ルールの一意な識別子。
- **Name**: Auto Scaling ルールを識別しやすくするための名称。
- **Status**: Auto Scaling ルールの実行状態（例：Running、Suspended）。
- **Cost**: 現在までの累積コスト。
- **Last Execution Time**: 最新の実行時刻。
- **Action**: 実行可能な操作（詳細は以下を参照）。

### **操作ボタン（Actions）**

- **Edit**: ルールの詳細設定を編集します。
- **Suspend**: ルールの実行を一時停止します。この操作を選択すると、システム負荷の監視およびリソース調整が停止され、ルールは Suspended タブに移動します。停止中のルールは、必要に応じて再開することができます。
- **Delete**: ルールを削除します。

![Auto scaling list](../../../../../docs/docs-images/p07/01.Auto%20scaling%20list.jpg)

---

## **　新しいルールの作成**

### **ステップ 1：ルール情報の設定**

右上の `New Scaling Rule` ボタンをクリックすると、新しいルール作成画面が表示されます。

- **Rules Name**（ルール名） を入力し、**Resource Type**（リソースタイプ） を選択します（現在は Instance のみ対応しています）。
  ![New Scaling Rule](../../../../../docs/docs-images/p07/02.New%20Scaling%20Rules.jpg)

### **ステップ 2：Scaling Target（スケーリング対象）の設定**

- **Instance**（インスタンス） を選択し、関連情報を確認します。
- **Protocol**（プロトコル） を設定します（現在は http のみ対応）、 **Port**（ポート） を入力します。
- **Start Command**（起動コマンド） を設定します：

  - **Start Command**: は Auto Scaling の過程で、新しいインスタンスが起動した後に実行される内部コマンドです。これはインスタンス内のカスタムサービスやモデルを起動するために使用されます。未入力の場合、システムはデフォルトの起動コマンドを使用します。
    例：Linux システムでは `systemctl start <service>` または `/etc/init.d/<service> start` を使用します。
特定のアプリケーションを起動する必要がある場合は、実際の要件に応じたコマンドを記入してください。

  ![New Scaling Rule](../../../../../docs/docs-images/p07/03.Scaling%20Target.jpg)

### **ステップ 3：Scaling Rules（スケーリングルール）の設定**

- **Elastic Quantity Control Minimum** と **Elastic Quantity Control Maximum** を入力します。

  > **Elastic Quantity Control Minimum**（最小リソース数）：
    システムが縮小できる最小のリソース数を設定します。
    これにより、低負荷時でも基本的な運行を維持できます。
    この値はサービスの稼働に必要な最小インスタンス数に設定し、通常は 0 または 1 です。
    具体的な値はサービス要件に応じて決定します。

  > **Elastic Quantity Control Maximum** （最大リソース数）：
    システムが拡張できる最大のリソース数を設定します。
    過剰なスケーリングを防止し、コストを管理するための上限値です。
    この値はサービスが処理可能な最大インスタンス数に設定し、予想されるトラフィックや負荷に基づいて決定します。
  > 
  ![Scaling Rule](../../../../../docs/docs-images/p07/04.Elastic%20Quantity%20Control.jpg)

### **ステップ 4：Load Metric（ロードメトリクス）の設定（オプション）**

- `More Load Metric` ボタンをクリックします。

  - **More Load Metric** は、追加の負荷指標を設定する機能です。
 これにより、より詳細なパフォーマンス要件に基づいてリソースの拡張・縮小を制御できます。

- **Metric Name**（メトリクス名） と **Description**（説明） を入力します。続いて **Baseline Type&&（基準タイプ） と Baseline Value（基準値） を設定します：

  > **Numeric Baseline**（数値基準）： 特定の数値を基準値として設定し、リソース使用量がこの値を超える／下回るとスケーリングが発動します。

  > **Ratio Baseline**（割合基準）：比率に基づく基準値を設定します。例えば、CPU 使用率やメモリ使用率などの割合をもとに自動調整を行います。

- **Retrieve Address**（データ取得アドレス） を入力します：

  - **Retrieve Address** は負荷メトリクスのデータソースを示すアドレスです。
 通常は API の URL や監視システムのエンドポイントを指定します。
 このアドレスを通じてシステムが負荷データを取得し、スケーリングの判断を行います。
 例： `http://your-monitoring-system/api/metrics`.

  ![Scaling Rule](../../../../../docs/docs-images/p07/05.More%20Load%20Metric.jpg)

### **ステップ 5：ルール作成の完了**

すべての設定内容を確認したら、画面右下の 確認（Confirm） ボタンをクリックしてルールの作成を完了します。  
 システムは自動的に Auto Scaling ルールをデプロイし、リストに追加します。  
 作成後は Auto Scaling タブで、新しいルールのステータスや稼働状況を確認できます。  
![Rule list](../../../../../docs/docs-images/p07/06.Rule%20list.jpg)

---

## **注意事項**

- **ルールの管理：**:
  作成済みのルールは、Auto Scaling または Suspended リストで編集・一時停止・削除の操作が可能です。

- **スケーリング条件の設定：**
 　**Elastic Quantity Control** や **Baseline Type** などの条件を正しく設定することで、システムリソースを効率的に利用できます。

- **リソース最適化：**
  定期的にルール設定を確認・調整し、実際の負荷に応じてリソースを適切にスケールアップ／スケールダウンさせましょう。

---

これらの設定により、リソース管理を自動化し、システムの柔軟性と信頼性を向上させることができます。
