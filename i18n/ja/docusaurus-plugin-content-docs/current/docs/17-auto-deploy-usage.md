---
id: auto-deploy-usage
sidebar_position: 17
---

# Auto Deploy 使用方法

通常、**GPU** を使用してサービスをデプロイする場合、手動でインスタンスを作成し、使用後に自分でリソースを解放する必要があります。断続的な利用シナリオでは、この操作フローは煩雑です。

この問題を解決するために、**Glows.ai** は **Auto Deploy** 機能を提供しています。一度設定を完了すれば、システムは **GPU** インスタンスの起動と解放を自動で管理します。設定完了後、固定のサービスリンク（Service Link）が提供されます。そのリンクにリクエストが送信されると、**Glows.ai** は事前に定義した設定に従い自動でインスタンスを作成し、リクエストを処理して結果を返します。連続で 5 分間リクエストがない場合、システムは自動的にインスタンスを解放し、手動操作は不要です。

本ガイドでは **BreezyVoice WebUI** イメージを例に、Auto Deploy 機能の設定と利用方法を説明します。

---

### ステップ 1：新しいデプロイタスクの作成

1. **Auto Deploy** ページにアクセスし、右上の `New Deploy` ボタンをクリックして、新しいデプロイタスクを作成します。

![image-20250527162345042](../../../../../docs/docs-images/p13/14.png)

2. タスク名と簡単な説明を入力し、後で識別・管理しやすくします。

![image-20250527162731979](../../../../../docs/docs-images/p13/15.png)

3.プログラム実行に必要な **GPU** タイプ と実行環境を選択します。既存の **Snapshot** を使用することも、システム提供のイメージを選択することも可能です。

![image-20250529100940587](../../../../../docs/docs-images/p13/20.png)

4. サービスに必要な ポート（Port） と 起動コマンド（Start Command） を設定し、`Confirm` をクリックして完了します。
本例では、サービスはポート 8080 で起動し、**BreezyVoice** ディレクトリ内の api.py を実行するため、設定は以下の通りです：

```bash
Port: 8080
Start Command: cd /BreezyVoice && python api.py
```

![image-20250527162828692](../../../../../docs/docs-images/p13/16.png)

5. デプロイタスクが完了すると、固定の サービスリンク（Service Link） と関連情報が提供されます。

![image-20250527162928849](../../../../../docs/docs-images/p13/17.png)

---

### ステップ 2：Auto Deploy リンクの使用

1. 既存の API リンクを Auto Deploy が提供する サービスリンク（Service Link） に置き換えるだけで、すぐに利用を開始できます。サービスにカスタムルートが含まれている場合は、Auto Deploy Link の後ろに対応するパスを追加します。本例では、デプロイした API パスは `/v1/audio/speech` であり、呼び出し方法は次のとおりです：

```bash
curl -X POST "https://tw-01.sgw.glows.ai:xxxxxx/v1/audio/speech" \
 -H "Authorization: Bearer sk-template" \
 -H "Content-Type: application/json" \
 --data '{
  "model": "tts-1",
  "voice": "alloy",
  "input": "How about playing basketball after school? The weather looks great today."
}' --output test_speech.wav
```

![image-20250527163237581](../../../../../docs/docs-images/p13/18.png)

2. リクエスト完了後、5 分以内に新しい API リクエストが送信されない場合、システムは自動的にインスタンスリソースを解放します。Auto Deploy ページでは、デプロイタスクの累計コストおよび現在の インスタンスステータス（Instance Status） を確認できます。各ステータスの意味は以下のとおりです：

- **Standby**：デプロイタスクの設定は正常で、現在インスタンスは起動していません。
- **Idle**：リクエスト受信時にインスタンスを起動中、または処理完了後に解放中です。
- **Running**：インスタンスが正常に起動し、リクエストを処理しています。処理完了後、システムは新しいリクエストを待機し、5 分以内にリクエストがない場合は自動的に解放されます。

![image-20250527163744664](../../../../../docs/docs-images/p13/19.png)

---

## お問い合わせ

**Glows.ai** のご利用中にご不明な点やご意見がございましたら、以下の方法でお気軽にお問い合わせください。

**Email:** [support@glows.ai](mailto:support@glows.ai)

**Discord:** [https://discord.com/invite/glowsai](https://discord.com/invite/glowsai)

**Line:** [https://lin.ee/fHcoDgG](https://lin.ee/fHcoDgG)
