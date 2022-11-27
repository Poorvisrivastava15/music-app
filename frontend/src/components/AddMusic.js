import { Formik } from 'formik';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import './AddMusic.css';

const AddMusic = () => {

	const url = "http://localhost:5000";

	const [selFile, setSelFile] = useState("");
	const [selImage, setSelImage] = useState("");

    const userSubmit = async (formdata) => {
		formdata.image = selImage;
		formdata.file = selFile;
        console.log(formdata);
        // 1. Url
        // 2. Request Method
        // 3. Data
        // 4. Data Format

        // to send request on backend - to connect frontend and backend.
        const response = await fetch('http://localhost:5000/music/add', {
            method : 'POST',
            body : JSON.stringify(formdata),
            headers : {
                'Content-Type' : 'application/json'
            }
        });

        if(response.status === 200){
            console.log('user added');
            Swal.fire({
                icon : 'success',
                title : 'Well Done',
                text : 'Registered Successfuly'
            })
        }
    }

	const uploadImage = (e) => {
		const file = e.target.files[0];
		setSelImage(file.name);
		const fd = new FormData();
		fd.append("myfile", file);
		fetch(url + "/util/uploadfile", {
		  method: "POST",
		  body: fd,
		}).then((res) => {
		  if (res.status === 200) {
			toast.success("Image Uploaded!!", {
			  style: {
				borderRadius: "10px",
				background: "#333",
				color: "#fff",
			  },
			});
		  }
		});
	  };


	  const uploadFile = (e) => {
		const file = e.target.files[0];
		setSelFile(file.name);
		const fd = new FormData();
		fd.append("myfile", file);
		fetch(url + "/util/uploadfile", {
		  method: "POST",
		  body: fd,
		}).then((res) => {
		  if (res.status === 200) {
			toast.success("Image Uploaded!!", {
			  style: {
				borderRadius: "10px",
				background: "#333",
				color: "#fff",
			  },
			});
		  }
		});
	  };

  return (
    <div>
        <div className="container pt-5">
            <div className="card">
                <div className="card-body">
                    <Formik
                    initialValues={{title: '', genre : '', artist : '', year  : '', lyrics  : '', publisher  : ''}}
                    onSubmit={userSubmit}>
                        {({values, handleSubmit, handleChange}) => (
                            <form onSubmit={handleSubmit}>
                                <label>Title</label>
                                <input className='form-control' id="title" onChange={handleChange} value={values.title} />
                                <label>Genre</label>
                                <input className='form-control' id="genre" onChange={handleChange} value={values.genre} />
                                <label>Artist</label>
                                <input className="from-control" id='artist' onChange={handleChange} value={values.artist} />
                                <label>Year</label>
                                <input className='form-control' id="year" onChange={handleChange} value={values.year} />
								<label>Lyrics</label>
								<textarea className='form-control' id="lyrics" onChange={handleChange} value={values.lyrics} ></textarea>
								<label>Publisher</label>
								<input className='form-control' id="publisher" onChange={handleChange} value={values.publisher} />

								<label>Upload File</label>
								<input className='form-control' type="file" onChange={uploadFile} />
								<label>Upload Image</label>
								<input className='form-control' type="file" onChange={uploadImage} />
								
                            <button type="submit" className='btn btn-primary mt-4'>Submit</button>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddMusic;