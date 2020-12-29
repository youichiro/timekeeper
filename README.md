# Timekeeper

## TODO
- [x] 現在時刻を表示する
- [x] lintを導入する
- [x] prettierを導入する
- [x] タイマー機能を実装する
  - [x] 10秒経ったら止まる
  - [x] 止める時間を入力して送信するとその時間でタイマーをリスタートする
  - [x] useCallbackを使う
  - [x] useContextを使ってフォーム部分をcomponent化して分離する
- [x] MTG全体のタイマーを作成する
  - [x] WholeTimerコンポーネントを作成
  - [x] 設定時間SetTimeのinterfaceを作成
  - [x] 設定時間を秒に変換する関数を作成
  - [x] 設定時間になったらタイマーをストップさせる
  - [x] 開始ボタンを作成
  - [x] material-uiでプログレスバーを表示
  - [x] 経過時間, 残り時間, 合計時間をいい感じに表示する
  - [x] propsで時間を渡す
  - [x] 設定時間を入力できるようにする
  - [x] 合計秒を時間分秒に変換して表示する
- [ ] アジェンダのタイマーを作成する
  - [x] AgendaListコンポーネントを作成
  - [x] アジェンダを表示
  - [x] AgendaListItemコンポーネントを作成
  - [ ] アジェンダのタイムを設定できるようにする
    - [x] AgendaにIDを追加
    - [x] AgendaにBlockTimeを追加
    - [x] ItemをクリックしたらselectedAgendaをセットする
    - [x] AgendaFormコンポーネントを作成する
    - [x] Itemをクリックしたらフォームに切り替える
    - [x] 入力フォームを表示する
    - [ ] チェックボタンをクリックしたらselectedAgendaを更新する

