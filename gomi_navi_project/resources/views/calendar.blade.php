<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  @viteReactRefresh
  @vite(['resources/js/components/Calendar.jsx', 'resources/css/app.css'])
</head>
<body>
  <div id="calendar"></div>
</body>
</html>
