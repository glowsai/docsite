---
id: team
sidebar_position: 5
---

# Glows.ai チーム版利用マニュアル

ズムを実現し、企業ユーザーのクラウドリソース共有ニーズに対応します。
本マニュアルは以下の 3 部構成です：

- [作成者向けマニュアル](#作成者向けマニュアル)
- [管理者向けマニュアル](#管理者向けマニュアル)
- [一般メンバー向けマニュアル](#一般メンバー向けマニュアル)

------

## 作成者向けマニュアル 

### チームの作成

Glows.ai にログイン後、画面右上のユーザー情報をクリックし、表示されたメニューから `Teams` を選択します。続いて  `Create Teams` をクリックすると、チーム作成プロセスが開始されます。

![01](../../../../../docs/docs-images/p05team/01.png)

- まず、チーム名と概要を入力し、 `Next` をクリックして次のステップへ進みます。

![02](../../../../../docs/docs-images/p05team/02.png)

テスト段階では、チームの初期 Storage はデフォルトで 0 に設定されています。チーム作成後、サポートスタッフに連絡いただければ Storage を追加できます。その他のストレージ容量プランは、今後順次リリース予定です。

![03](../../../../../docs/docs-images/p05team/03.png)

`Confirm` をクリックすると、チームの基本情報が表示され、デフォルトでチーム作成者 (**Owner**)アカウントが自動的に割り当てられます。チーム作成者アカウントをサポートスタッフに送っていただければ、Storage プランの設定が可能になります。

![04](../../../../../docs/docs-images/p05team/04.png)

### チーム画面への切り替え

チーム作成者は、Glows.ai メインネットのアカウントからチーム版へ直接切り替えることができます。図のとおり右上のユーザー情報をクリックし、表示されたポップアップで `Teams`を選択し、入りたいチームをクリックしてください。

![05](../../../../../docs/docs-images/p05team/05.png)

### メンバー管理

チーム作成者または管理者アカウントでログイン後、左側メニューの `Member` Tabをクリックしてメンバー管理を行うことができます。現在サポートされている機能は、メンバーの追加、Credits の割り当て、リソースの可視性コントロール、メンバー基本情報の編集、メンバーインスタンスの管理などです。

#### メンバー追加

`Member` 画面にある `Add Members` ボタンをクリックすると、メンバー追加の手続きに進みます。

![06](../../../../../docs/docs-images/p05team/06.png)

新規メンバーには、以下の情報を設定できます：
 ログインアカウント（Login Account）、ログインパスワード（Login Password）、ロール（Role）、初期クレジット（Assign Credits）、エイリアス（Alias）、説明（Note）。
 設定が完了したら、画面内の `Add Member` ボタンをクリックしてメンバー作成を完了します。

ロール（Role）は現在、Admin（管理者）または Member（一般メンバー）のいずれかに設定できます。

割り当てクレジット（Assign Credits）は、メンバーがプラットフォームを利用するための初期ポイントであり、マシンのレンタルや Storage の購入に使用できます。また、メンバー作成後に追加で割り当てることも可能です。

![07](../../../../../docs/docs-images/p05team/07.png)

作成が完了したら、 `Copy Login Details` をクリックして新メンバーのログイン情報を取得し、その情報を該当メンバーに送付してください。新メンバーのログイン方法については、[一般メンバーのログイン方法](#チームに参加)

![08](../../../../../docs/docs-images/p05team/08.png)

#### Credits の配布

`Member` 画面で対象メンバーの Action ボタンをクリックし、 `Assign Credits`を選択すると、Credits 配布画面に進みます。。

![09](../../../../../docs/docs-images/p05team/09.png)

配布する金額を入力し、 `Assign` をクリックすると配布が完了します。

![10](../../../../../docs/docs-images/p05team/10.png)

#### リソース可視性の管理

`Permissions & Quota` では、チームメンバーが閲覧できる GPU、イメージ、利用可能なインスタンス数、ストレージ容量などを設定できます。

`Permissions & Quota` をクリックして権限設定画面に入ると、まずチームメンバーが閲覧できるマシンリソースを管理できます。管理できる項目は、マシンの地域、マシンタイプ、マシンモデルです。
 図の設定例では、チームメンバーは TW-03 リージョンの NVIDIA GeForce RTX 4090 マシンのみを利用可能となります。

![11](../../../../../docs/docs-images/p05team/11.png)

ページを下にスクロールすると、チームメンバーが使用できる公式ベースイメージを設定する項目が続きます。
図の権限設定では、チームメンバーは CUDA12.8 Torch2.7.1 Base のみを使用してインスタンスを作成できます。

![12](../../../../../docs/docs-images/p05team/12.png)

最後に、チームメンバーが使用できるインスタンスデータ、スナップショット数、ストレージの利用可能容量なども設定できます。

![13](../../../../../docs/docs-images/p05team/13.png)

設定が完了したら、右上の `Save` ボタンをクリックして保存する必要があります。これにより、メンバーは Create New 画面で、あなたが指定した機器タイプと環境のみを選択できるようになります。

![14](../../../../../docs/docs-images/p05team/14.png)

#### メンバー基本情報の変更

`Member` ページで該当するメンバーの `Details` ボタンをクリックすると、メンバーの詳細パネルに入り、アカウント、別名、役割、説明などの基本情報を変更できます。変更後は Save ボタンをクリックして保存してください。

![15](../../../../../docs/docs-images/p05team/15.png)

現在、メンバーの **Name**、**Role**、**Account Balance**、**Note**、**Login Password**の変更が可能です。詳細パネルでは、該当メンバーの他の使用情報も確認できます。例：残り Credits、総使用金額、インスタンス数、ストレージ使用状況。

![16](../../../../../docs/docs-images/p05team/16.png)

画面右上の `Edit Permission` ボタンをクリックすると、個々のメンバーのリソース可視性を設定できます。この機能により、異なるメンバーが異なる マシンリソース や イメージリソース を見ることができ、細かい管理が可能です。

#### メンバーのインスタンス管理

`Instances` 画面で `Admin View`，をクリックすると、すべてのメンバーのインスタンス履歴と稼働状況を確認できます。

![17](../../../../../docs/docs-images/p05team/17.png)

閉じたいメンバーのインスタンスデータ行で `Action`をクリックし、 `Release` を選択すると、そのメンバーのインスタンスを直接解放できます。

![18](../../../../../docs/docs-images/p05team/18.png)

### ストレージ管理

`Storage Space` の画面で `Admin View`を選択すると、チームのストレージ使用状況と各メンバー個人のストレージ使用状況を確認できます。

![19](../../../../../docs/docs-images/p05team/19.png)

`Team Storage Space` の `Manage` ボタンをクリックすると、チームのストレージ割り当て画面に入ります。まず  `Modify`をクリックし、 **Datadrive** と **Snapshot** の容量を設定した後、最後に `Update` をクリックして割り当てを完了します。

![20](../../../../../docs/docs-images/p05team/20.png)

### Datadrive 管理

`Datadrive` 画面で `Admin View` を選択すると、チーム全体の Datadrive 使用状況や各メンバーの個人 Datadrive 使用状況を確認できます。

![21](../../../../../docs/docs-images/p05team/21.png)

`Team Datadrive` の `Manage` ボタンをクリックすると、チームの Datadrive 管理画面に入ります。チームの作成者と管理者のみが、チーム Datadrive にデータをアップロードおよび削除する権限を持っています。

![22](../../../../../docs/docs-images/p05team/22.png)

他のメンバーがインスタンスを作成する際、チームのクラウドドライブはデフォルトでインスタンス内の`/team_data`にマウントされます。一般メンバーは読み取り専用権限を持ち、チームの作成者と管理者は読み書き権限を持っています。

![23](../../../../../docs/docs-images/p05team/23.png)

### スナップショット管理

`Snapshots` インターフェースで `Admin View`を選択すると、チームおよび各チームメンバーが作成した個人スナップショットを確認できます。

![24](../../../../../docs/docs-images/p05team/24.png)

#### チームスナップショットの設定

チーム共有に変更したい Snapshot の `Details`をクリックし、次に `Share to team` を選択するだけで、メンバーが作成した Snapshot をチーム共有の Snapshot に変更できます。

![25](../../../../../docs/docs-images/p05team/25.png)

#### チームスナップショットの使用

他のメンバーがインスタンスを作成する際に Snapshot を選択すると、チーム共有環境を確認できます。チーム共有環境の右上には **Team** のマークが表示されます。

![26](../../../../../docs/docs-images/p05team/26.png)

#### チームスナップショットの管理

`Snapshots` 画面で `Admin View` を選択後、 `Team Shared Snapshots` モジュールの右上にある `Manage` ボタンをクリックすると、チームスナップショットの管理画面に入ることができます。

![27](../../../../../docs/docs-images/p05team/27.png)

この画面では、すべてのチームスナップショットを確認できます。現在は削除操作のみサポートされています。不要なスナップショットを選択し、 `Action` の `Delete` ボタンをクリックすると削除できます。

**注意：** チームスナップショットを削除すると完全に削除され、復元できません。操作には十分注意してください。

![28](../../../../../docs/docs-images/p05team/28.png)

### 請求管理

`Billing` 画面で `Admin View`を選択すると、チームの全メンバーの請求データを確認できます。請求の検索は、メンバーや請求タイプでフィルタリングすることが可能です。

![29](../../../../../docs/docs-images/p05team/29.png)

同時に `Billing` 画面で `Recharge` ボタンをクリックしてチャージすることができます。

**注意：**現在チーム内でのチャージ機能はチーム作成者のみが利用可能です。まずチーム作成者がチャージを行い、その後チームの管理者や一般メンバーに配布する必要があります。

### チーム情報の編集

`Team Setting`画面の右上にある `Edit`ボタンをクリックすると、チームの名前や説明情報を編集することができます。

![30](../../../../../docs/docs-images/p05team/30.png)

## 管理者向けマニュアル

管理者はチームの作成やチャージはできませんが、その他の権限はチーム作成者と同じです。詳細はチーム作成者向けマニュアルをご参照ください。

## 一般メンバー向けマニュアル

普通成員僅支持以下功能：創建實例（Create New）、實例管理(Instances)、Datadrive管理(Datadrive)、Snapshot管理(Snapshots)、Storage管理(Storage Space)、帳單查詢(Billing)、個人信息修改(Profile)，和Glows.ai主網操作一致，具體請看[Glows.ai使用手冊](https://docs.glows.ai/docs/create-new)。

![image-20251112112106430](../../../../../docs/docs-images/p05team/31.png)

### 加入團隊

普通成員拿到團隊創建者或管理員創建的成員帳號後可以從兩個入口加入團隊。

#### 1> 團隊版本連結登入

瀏覽器訪問下面團隊登錄介面，輸入團隊賬號密碼。

```bash
https://platform.glows.ai/team/login
```

![image-20251112103024351](../../../../../docs/docs-images/p05team/32.png)

#### 2>  Glows.ai 主網進入

登錄 Glows.ai 主網後，點擊右上角個人頭像，選擇 **`Teams`->`Join Team`**。

![image-20251112103513271](../../../../../docs/docs-images/p05team/33.png)

在 Join Team 介面輸入團隊賬號密碼，即可將Glows.ai主網賬號和團隊賬號綁定，後面就可以直接在主網切換到團隊了。

![image-20251104150357896](../../../../../docs/docs-images/p05team/34.png)

不論用哪一種方式登入，首次登錄後會需要重置密碼。

![image-20251106165855089](../../../../../docs/docs-images/p05team/35.png)

### 獲取Credits

團隊成員如果需要 Credits，請向團隊創建者或者管理員申請。

### 創建實例

點擊 `Create New`，選擇自己需要租用的顯卡和環境。

![image-20251112130821272](../../../../../docs/docs-images/p05team/36.png)

下滑可以看到 Datadrive 相關配置，設置好後點擊 `Complete Checkout` 即可完成實例創建。

- **Unit Qty:** 租用顯卡數量，如果設置為2，則表示租用2張顯卡
- **Mount Personal Datadrive:** （可選擇）可以選是否掛載個人Datadrive
- **Mount Team Datadrive:** （默認）自動掛著團隊網盤到實例中的 `/team_data` 目錄下，普通成員只有可讀權限
- **Bind Public IP Address:** 綁定固定IP，如有需要請聯繫Glows.ai小幫手

![image-20251112131149657](../../../../../docs/docs-images/p05team/37.png)

### 實例管理

實例啟動成功後，可以在 Instances 介面看到新啟動的實例，點擊實例可以看到實例更詳細的信息和更多操作。

- **Access:** 實例的訪問信息，比較常用的是 SSH(Port 22) 和 Jupyterlab(Port 8888)
- **Monitor:** 實例CPU、GPU資源監控
- **Billing:** 實例費用明細
- **Config:** 實例配置說明（實例啟動鏡像軟體說明）
- **Hardware:** 實例硬件配置說明

使用完成後，可以在 `Action` 中可以選擇 `Release` 釋放實例，或者 `Take Snapshot` 創建一個快照。

![image-20251112135257508](../../../../../docs/docs-images/p05team/38.png)

### 其他功能

Datadrive管理(Datadrive)、Snapshot管理(Snapshots)、Storage管理(Storage Space)、帳單查詢(Billing)、個人信息修改(Profile)與主網操作一致，請參考一下教程內容：[Glows.ai使用手冊](https://docs.glows.ai/docs/create-new)

## 聯繫我們

如果您在使用 Glows.ai 的過程中有任何疑問或者建議，歡迎通過郵件、Discord或者Line聯繫我們。

**Email:** [support@glows.ai](mailto:support@glows.ai)

**Discord:** [https://discord.com/invite/glowsai](https://discord.com/invite/glowsai)

**Line:** [https://lin.ee/fHcoDgG](https://lin.ee/fHcoDgG)
