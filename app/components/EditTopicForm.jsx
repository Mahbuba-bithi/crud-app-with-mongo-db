"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function EditTopicForm({id, title, description}) {
    const router = useRouter();

        const [newtitle, setNewTitle] = useState(title);
        const [newdescription, setNewDescription] = useState(description);

        const handleSubmit = async (e) => {
            e.preventDefault();

            try {
                const res = await fetch(`/api/topics/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        newTitle: newtitle,
                        newDescription: newdescription
                    })
                });

                if (!res.ok) {
                    throw new Error('Failed to update topic');
                }

                router.refresh();
                router.push('/');
            } catch (error) {
                console.error('Error updating topic:', error);
            }
        }


    return(
    
    <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
      <input
      className='border border-slate-500 px-8 py-2'
      type="text"
      value={newtitle}
      onChange={(e) => setNewTitle(e.target.value)}
       placeholder="Topic Title" />

       <input
      className='border border-slate-500 px-8 py-2'
      type="text"
      value={newdescription}
      onChange={(e) => setNewDescription(e.target.value)}
       placeholder="Topic Description" />

       <button className='bg-green-600 font-bold text-white py-3 px-6 w-fit'> Update Topic</button>

    </form>
    
);
   
}
