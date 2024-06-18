<!-- resources/views/welcome.blade.php -->

@extends('layouts.app')

@section('content')
    <div id="app"></div>
@endsection

@push('scripts')
    <script src="{{ mix('js/app.jsx') }}"></script>
@endpush
