import React from 'react';

const AddService = () => {


    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const fee = form.fee.value;
        const img = form.img.value;
        const description = form.description.value;

        const service = {
            title: name,
            fee: fee,
            img: img,
            description: description,
        }
        console.log(service);

        fetch('https://dr-munni-server-site.vercel.app/addservice', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.error(err));
            form.reset();
    }

    return (

        <div>
            <div>
                <form onSubmit={handleAddService} className='p-8'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
                        <input name='name' type="text" placeholder="Your Services Name" className="input input-bordered input-md w-full" />

                        <input name='fee' type="text" placeholder="Service Fee of Coast" className="input input-bordered input-md w-full" required />

                        <input name='img' type="text" placeholder="Type Image URl Here" className="input input-bordered input-md w-full" />
                    </div>
                    <textarea name='description' className="textarea textarea-bordered h-24 w-full my-8" placeholder="Service Description Here"></textarea>

                    <div className=''>
                        <input className='btn btn-block mb-4' type="submit" value="Add Services" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddService;