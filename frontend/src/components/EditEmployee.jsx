import React from 'react'

function EditEmployee() {
  return (
    <div class="container px-4 mx-auto mt-10">
      <div class="max-w-lg mx-auto">
        <div class="text-center mb-6">
          <h2 class="text-3xl md:text-4xl ">Edit employee</h2>
        </div>
        <div class="mb-6">
          <label class="block mb-2 " for="">Name</label>
          <input class="inline-block w-full p-4 leading-6 text-lg   bg-white shadow rounded" type="text" placeholder="username" autoComplete='asds' />
        </div>
        <div class="mb-6">
          <label class="block mb-2 " for="">Email</label>
          <input class="inline-block w-full p-4 leading-6 text-lg   bg-white shadow rounded" type="email" placeholder="email" autoComplete='asds' />
        </div>
        <div class="mb-6">
          <label class="block mb-2 " for="">Mobile no</label>
          <input class="inline-block w-full p-4 leading-6 text-lg   bg-white shadow rounded" type="text" placeholder="mobile no" autoComplete='asds' />
        </div>
        <div className='mb-6'>
          <label class="block mb-2 " for="">Designation</label>
          <select className='inline-block w-full p-4 leading-6 text-lg   bg-white shadow rounded'>
            <option value="hr">HR</option>
            <option value="manager">Manager</option>
            <option value="sales">Sales</option>
            <option value="other">Other...</option>
          </select>
        </div>
        <div className='mb-6'>
          <label class="block mb-2 " for="">Gender</label>
          <input type="radio" name='gender' />
          <label htmlFor=""> Male</label>
          <br />
          <input type="radio" name='gender' />
          <label htmlFor=""> Female</label>
        </div>
        <div className='mb-6'>
          <label class="block mb-2 " for="">Course</label>
          <input type="checkbox" className='mr-2' />
          <label htmlFor="">MCA</label> <br />
          <input type="checkbox" className='mr-2' />
          <label htmlFor="">BCA</label> <br />
          <input type="checkbox" className='mr-2' />
          <label htmlFor="">BSC</label> <br />
        </div>
        <div className='mb-6'>
          <label class="block mb-2 " for="">Image</label>
          <input type="file" accept="image/png, image/jpeg" />
        </div>
        <button class="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white bg-slate-800 shadow rounded transition duration-200">Sign in</button>
      </div>
    </div>
  )
}

export default EditEmployee
