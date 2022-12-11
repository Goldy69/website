@extends('layouts.app')

@section('body')
    <div class="grid grid-rows-[auto,1fr] " style="height: 90vh">
        <x-navbar/>
        <div class="grid place-items-center ">
            <div class="flex flex-col gap-8">
                <h1 class=" text-4xl ">LOGIN</h1>
                <form action="{{url('login')}}" class="flex flex-col gap-5 md:w-[15rem]" method="post">
                    @csrf

                    <div class="flex flex-col gap-2 border-b border-white">
                        <label class="" for="email">Username</label>
                        @error('email')
                        <div class="text-red-600">{{$message}}</div>
                        @enderror
                        <input name="email" id="email" class="bg-transparent " type="text">
                    </div>

                    <div class="flex flex-col gap-2 border-b border-white">
                        <label for="password">Username</label>
                        @error('password')
                        <div class="text-red-600">{{$message}}</div>
                        @enderror
                        <input name="password" id="password" class="bg-transparent " type="password">
                    </div>

                    <input class="border-2 mt-2 border-white border-solid hover:bg-gray-700 transition py-1"
                           type="submit" value="LOGIN">
                </form>
            </div>
        </div>

    </div>
@endsection
