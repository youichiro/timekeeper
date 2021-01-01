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
- [x] アジェンダのタイムを設定できるようにする
  - [x] AgendaListコンポーネントを作成
  - [x] アジェンダを表示
  - [x] AgendaListItemコンポーネントを作成
  - [x] AgendaにIDを追加
  - [x] AgendaにBlockTimeを追加
  - [x] ItemをクリックしたらselectedAgendaをセットする
  - [x] AgendaFormコンポーネントを作成する
  - [x] Itemをクリックしたらフォームに切り替える
  - [x] 入力フォームを表示する
  - [x] フォームを入力したらagendaListを更新する
- [x] Redux Toolkitを使ってステート管理する
  - [x] storeを作成
  - [x] agendaListをステート管理する
  - [x] selectedAgendaをステート管理する
  - [△] payloadの型を定義する (selectedAgendaIdはなぜかエラーになった)
- [x] AgendaListの合計時間をProgressBarでカウントする
  - [x] counterストアを作成
  - [x] 合計時間に達したらカウントを止める
  - [x] Agendaにtime属性を追加する
  - [x] agendaListから合計時間を取得する
  - [x] selectedAgendaIdが更新されたら合計時間も更新する
- [x] agendaのProgressCircleを表示する
  - [x] ProgressCircleを表示する
  - [x] 現在進行中のアジェンダを取得する
  - [x] 現在進行中のアジェンダのProgressCircleを表示する
- [x] 停止ボタンを作成する
- [x] リセットボタンを作成する
- [x] 再開ボタンを作成する
- [ ] 見た目をざっくり整える
  - [x] ボタンの見た目
  - [x] ダークモード
  - [x] 全体の構成を整える
- [ ] 項目の追加、削除をできるようにする
  - [x] 追加ボタンを作成
  - [x] 追加ボタンを押したら選択状態にする
  - [x] 削除ボタンを作成


- [ ] 入力フォームを改善
- [ ] Circleのroundを設定
- [ ] 進行中の項目を目立たせる
- [ ] 停止中でしか編集できないようにする
- [ ] メディアクエリ


