'use strict';

/* サーバーに接続する非同期関数 */
async function getResource() {
  // クライアントサイドからサーバーサイドへはfetchで接続する
  const res = await fetch('http://localhost:8000/');
  const obj = await res.json();
  console.log(obj); // ここはブラウザーの開発者ツールのコンソール
  document.querySelector('h1').textContent = obj.env;
}

// button要素のclickイベントに登録
document.querySelector('button').addEventListener('click', getResource);