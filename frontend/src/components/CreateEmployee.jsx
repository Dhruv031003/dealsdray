import React from 'react'

function CreateEmployee() {
  return (
    <div class="container px-4 mx-auto mt-10">
      <div class="max-w-lg mx-auto">
        <div class="text-center mb-6">
          <h2 class="text-3xl md:text-4xl ">Log In</h2>
        </div>
        <div class="mb-6">
          <label class="block mb-2 " for="">User Name</label>
          <input class="inline-block w-full p-4 leading-6 text-lg   bg-white shadow rounded" type="text" placeholder="username" autoComplete='asds' />
        </div>
        <div class="mb-6">
          <label class="block mb-2 " for="">Password</label>
          <input class="inline-block w-full p-4 leading-6 text-lg  bg-white shadow rounded" type="password" placeholder="password" autoComplete='off' />
        </div>
        <button class="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white bg-slate-800 shadow rounded transition duration-200">Sign in</button>
      </div>
    </div>
  )
}

export default CreateEmployee
