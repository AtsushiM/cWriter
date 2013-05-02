# cWriter.js
console.logに8bit風の文字列を表示するプラグイン

## 使い方
使用する環境でcWriter.jsを読み込みます。

下記はcWriter.jsが/js/lib/以下にある場合

```html
<script src="/js/lib/cWriter.min.js"></script>
```

そして、適当な場所で下記のjsを実行します(piyopiyoという文字列を表示したいとき）
```js
var message = new CW('piyopiyo');
message.output();
```

### スタイルを適用する場合
実行するjsを次のように変更します。

```js
var opt = {
      style: 'color:#ff0000; background: #000000;'
    },
    message;
message = new CW('piyopiyo', opt);
message.output();
```

第二引数として与える`option`に、
プロパティ`style`を定義してその値としてcssを入力しておけば`console.log`が対応している範囲内でスタイルが適用されます。

## 表示可能な文字種
- a-z
- ?
- 半角スペース
- 0-9

## 動作環境
下記のブラウザのうち[console API](http://getfirebug.com/wiki/index.php/Console_API) に対応してる環境でなら実行出来ます。
- Google Chrome
- Firefox
- Safari

依存している他のプラグインは特にないです。
