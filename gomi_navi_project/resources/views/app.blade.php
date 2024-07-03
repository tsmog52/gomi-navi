<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  @vite('resources/css/app.css')
  @vite('resources/js/index.jsx')
  <title>gomi-navi</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>
