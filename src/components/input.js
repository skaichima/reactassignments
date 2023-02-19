import React from 'react'
import { useState } from 'react';

function Input() {
    const [newName, setNewName] = useState("");
    const [newGrade, setNewGrade] = useState("");
    const [newExtras, setNewExtras] = useState("");
    const [items, setItems] = useState([]);

    function addItem() {
        const item = {
        id: Math.floor(Math.random() * 1000),
        name: newName,
        extras: newExtras,
        grade: newGrade,
        };

        // Add new item to items array
        setItems((oldList) => [...oldList, item]);

        // Reset newItem back to original state
        setNewName("");
        setNewGrade("");
        setNewExtras("");
    }

    function deleteItem(id) {
        const newArray = items.filter((item) => item.id !== id);
        setItems(newArray);
    }
    return (
        <div className="flex items-center justify-center">
                <main className="bg-white p-4 rounded w-full max-h-[600px]">
                    <h1 className=" flex items-center justify-center text-2xl mb-4 text-blue-500">Add Student</h1>
                    <div className="grid grid-cols-2 gap-2 gap-x-6 mb-6">
                        <div>
                            <label htmlFor="extras">FULLNAME</label>
                            <input type="text" id='fullname' className="w-full p-3 outline-none border-2 rounded-l-sm border-blue-500" value={newName} onChange={(e) => setNewName(e.target.value)} required/>
                        </div>
                        <div>
                            <label htmlFor="grade">GRADE</label>
                            <input type="text" id='grade' className="w-full p-3 outline-none border-2 rounded-l-sm border-blue-500" value={newGrade} onChange={(e) => setNewGrade(e.target.value)} required/>
                        </div>
                        <div className='col-span-2'>
                            <label htmlFor="extras">EXTRA INFO</label>
                            <input type="text" id='extras' className="w-full p-3  outline-none border-2 rounded-l-sm border-blue-500" value={newExtras} onChange={(e) => setNewExtras(e.target.value)} required/>
                        </div>
                        <button onClick={() => addItem()} className="flex items-center col-span-2 w-full justify-center">
                            <span class="material-symbols-outlined mt-2 py-2 bg-blue-500 w-full h-full text-white flex items-center justify-center rounded-r-sm border-2 text-xl border-blue-500">
                            add
                            </span>
                        </button>
                    </div>
                    <div>
                        <table className='table-auto border-collapse border-spacing-6 overflow-x-scroll w-full h-full'>
                            <thead className='mb-2'>
                                <th className='font-medium py-2 sm:py-5 text-sm sm:text-md min-w-[100px]'>ID</th>
                                <th className='font-medium py-2 sm:py-5 text-sm sm:text-md min-w-[100px]'>NAME</th>
                                <th className='font-medium py-2 sm:py-5 text-sm sm:text-md min-w-[200px]'>EXTRA INFO</th>
                                <th className='font-medium py-2 sm:py-5 text-sm sm:text-md min-w-[100px]'>GRADE</th>
                                <th></th>
                            </thead>
                            <tbody>
                                {items.map((item) => {
                                    return (
                                        <tr key={item.id}>
                                            <td className='text-sm py-3 px-2 sm:px-6 text-center font-normal mb-[2px]'>{item.id}</td>
                                            <td className='text-sm py-3 px-2 sm:px-6 text-center font-normal mb-[2px]'>{item.name}</td>
                                            <td className='text-sm py-3 px-2 sm:px-6 text-center font-extralight'>{item.extras}</td>
                                            <td className='font-semibold py-3 px-2 sm:px-6  text-center'>{item.grade}</td>
                                            <td>
                                                <div className="flex gap-2">
                                                    <span onClick={() => deleteItem(item.id)} class="material-symbols-outlined text-red-600 cursor-pointer">
                                                        delete
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </main>
        </div>
    )
}

export default Input