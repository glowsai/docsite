---
id: datadrive-app
sidebar_position: 7
---

# Datadrive デスクトップ版

このチュートリアルでは、**Glows.ai Datadrive デスクトップ版** の使い方を素早く習得できます。これは Glows.ai Web版の **Datadrive** 機能 を拡張したデスクトップアプリケーションで、より柔軟なクラウドデータ管理体験を提供します。 ローカルとクラウド間でのファイルアップロード、ダウンロード、同期をより効率的かつ安定して行えます。

Datadrive デスクトップ版 を利用することで、複数の Drives を簡単に閲覧、編集、管理できます。 また、外部リソース（GitHub や Hugging Face など）からのインポートもサポートし、チームや個人プロジェクトの迅速な統合、デプロイ、バックアップを支援します。

---

## ステップ 1：Datadrive デスクトップ版のインストール

**Glows.ai** 公式サイト にアクセスし、トップメニューの `Product` をクリックします。 ドロップダウンメニューから `Datadrive`（下図参照）を選択すると、ダウンロードページに移動します。

![OfficialWebsite](../../../../../docs/docs-images/p06App/01.OfficialWebsite.png)

または、直接ダウンロードページにアクセス：
👉 [https://glows.ai/datadrive](https://glows.ai/datadrive)

![Download](../../../../../docs/docs-images/p06App/02.png)

ご使用のOSに応じて対応するバージョンをダウンロードしてください。 現在は Windows と Mac をサポートしています。 今後、さらに多くのOSバージョンが順次サポートされる予定です。

---

### Windows バージョン

1. インストーラーをダウンロード後、ダブルクリックして実行します。
2. 画面の指示に従ってインストールを完了すると、Datadrive デスクトップ版 を起動できます。

---

### Mac バージョン

1. 1.ダウンロード後、アプリケーション `Drive PC` を `Applications` フォルダにドラッグします（下図参照）。
2. `Dock` からクリックしてアプリケーションを起動します。
   
![Mac Download](../../../../../docs/docs-images/p06App/03.png)

> 起動時に以下のメッセージが表示された場合：
> `"Drive PC" is damaged and can't be opened...`

> `Terminal` を開き、以下のコマンドを実行して制限を解除してください：

```bash
sudo xattr -rd com.apple.quarantine "/Applications/Drive PC.app"
```

![Mistake](../../../../../docs/docs-images/p06App/04.png)

---

## ステップ 2：アカウントにログイン

Datadrive デスクトップ版 を起動後、以下の方法でログイン可能です：

1. `Continue with Google` をクリックし、Google アカウント で素早くログイン。
2. **Email** と **Password** を入力し、`Login` をクリック。
3. まだアカウントを登録していない場合は、`Sign up` をクリックして登録ページへ移動。

![Sign In](../../../../../docs/docs-images/p06App/05.png)

---

## ステップ 3：既存データの管理

ログイン後、`Dashboard` にアクセスすると、各エリアの Drive の使用済み容量と残り容量をリアルタイムで確認できます。 今後、`Instance` や `Snapshot` などの管理機能も順次追加予定です。

![Dashboard](../../../../../docs/docs-images/p06App/06.png)

左下メニューの `Drive #0` をクリックすると、所有している各エリアの Drives を展開して確認できます（下図参照）：

![Drive #0](../../../../../docs/docs-images/p06App/07.png)

選択した Drive に入ると、ファイルとフォルダの一覧が表示されます。項目を選択すると、画面下部に4つの操作オプションが表示されます：

- **Download**: ローカルにダウンロード
- **Move**: 別のディレクトリに移動
- **Rename**: 名前を変更
- **Delete**: ファイルを削除

![List](../../../../../docs/docs-images/p06App/08.png)

---

### ダウンロード進捗

ダウンロード実行後、`Transfer` ページで進捗を確認できます。

![TransferDownload](../../../../../docs/docs-images/p06App/09.png)

---

## ステップ 4：ファイル／フォルダのアップロードまたはインポート

`Upload or Import` をクリックすると、以下の3つの方法でファイル／フォルダをクラウド Drive にアップロードできます：

![Upload](../../../../../docs/docs-images/p06App/10.png)

### 1. 直接アップロード

`Upload File` または `Upload Folder` を選択し、ローカルからアップロードしたいファイルやフォルダを選択します。

---

### 2. GitHub からインポート

- `Import from GitHub` をクリックし、プロジェクトリンクを入力後、`View` を押します。
- GitHub ファイルブラウザで必要なファイルやブランチを選択し、`Import` を押してインポートを開始します。

![GitHub](../../../../../docs/docs-images/p06App/11.png)

![GitHubList](../../../../../docs/docs-images/p06App/12.png)

---

### 3. Hugging Face からインポート

- `Import from Hugging Face` をクリックし、プロジェクトリンクを入力後、`View` を押します。
- Hugging Face ファイルブラウザで閲覧・選択し、`Import` を押してインポートを開始します。

![HuggingFace](../../../../../docs/docs-images/p06App/13.png)

![HuggingFaceList](../../../../../docs/docs-images/p06App/14.png)

---

### アップロード進捗

`Transfer` 画面で進捗を確認可能で、完了後は対応する Drive にファイルが表示されます。

![TransferUploading](../../../../../docs/docs-images/p06App/15.png)

---

## ステップ 5：その他の設定

右上のアバターをクリックし、`Settings` を選択して、追加機能の設定を行います。

![Setting](../../../../../docs/docs-images/p06App/16.png)

---

### Drive 設定

- 言語、タイムゾーン、12/24時間表示の設定が可能です。
- 問題が発生した場合は、`Export Log File` をクリックしてログファイルを出力し、Glows.ai に報告してトラブルシューティングを依頼できます。
- ファイルのダウンロードが遅い場合やネットワーク制限を受ける場合は、`Proxy Server` および `Proxy Port` を設定できます。Datadrive デスクトップ版がローカルまたは社内のプロキシサーバー経由で転送を行うことで、ダウンロード・アップロードの効率を改善します。
- `Check for Updates` をクリックすると、手動で最新版を確認・ダウンロードできます。
  
![DriveSetting1](../../../../../docs/docs-images/p06App/17.png)

![DriveSetting2](../../../../../docs/docs-images/p06App/18.png)

---

### 転送設定（Transfer Setting）

- 大きなファイルをアップロードする際は、`Prevent Sleep When Cloud Drive is Active` にチェックを入れ、PC がスリープ状態になって転送が中断されるのを防ぎます。
- **Download Directory** でファイルのデフォルト保存先をカスタマイズできます。
- Hugging Face のデータをダウンロードする際に認証が必要な場合は、**Hugging Face Token** に設定します。

![TransferSetting](../../../../../docs/docs-images/p06App/19.png)

---

## お問い合わせ

Datadrive デスクトップ版の使用中にご質問やご提案がある場合は、以下の方法でお問い合わせください：

**Email:** [support@glows.ai](mailto:support@glows.ai)

**Discord:** [https://discord.com/invite/glowsai](https://discord.com/invite/glowsai)

**Line:** [https://lin.ee/fHcoDgG](https://lin.ee/fHcoDgG)
