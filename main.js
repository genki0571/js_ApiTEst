import 'https://deno.land/std/dotenv/load.ts';

/* サーバーにアクセス（fetch）があったら呼び出される関数 */
Deno.serve(async (req) => {  
  //const apiKey = Deno.env.get('API_KEY');
  // 環境変数の読み込み
  apiKeyGoogle =  Deno.env.get('GOOGLE_API_KEY');
  apiKeyDeepL =  Deno.env.get('DEEPL_API_KEY');
  console.log(apiKey); // ここはVSCodeのターミナル

  // メッセージボディを構成
  const body = JSON.stringify({ env: apiKey });

  // アクセスしてきたクライアントにJSONを返す
  return new Response(body, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'content-type': 'application/json; charset=utf-8',
    },
  });
});