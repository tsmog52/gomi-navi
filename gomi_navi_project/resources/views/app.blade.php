<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  @viteReactRefresh
  @vite(['resources/js/index.jsx', 'resources/css/app.css'])
  <title>gomi-navi</title>
  <link rel="icon" href="{{ asset('favicon.svg') }}" type="image/svg+xml">
</head>
<body>
  <div id="index"></div>
</body>
</html>
