import React, { useEffect } from 'react'
import { useState } from "react";
import {addPeople, getPeople, deletePeopleApi} from "./apiCalls"
import { connect } from 'react-redux';

const mapStateToProps = state => {
	return {
	  token: state.token,
	}
  }

const Home = (props) => {
	const [values, setValues] = useState({
		people: ''
	});

	const [list, setList] = useState([])

	const token = props.token;

	useEffect(()=>{


		getPeople()
		.then(res => setList(res.data));

	}, [values])

	const deletePeople = async (_id)=>{

	 	const data= await deletePeopleApi(token, _id)
		let afterDelete = list.filter((s)=> s._id !== data.data._id);
		setList(afterDelete);
	
	}

	const editPeople = (_id) =>{

		console.log(_id);
	
	}


	const getList = list.map((l)=>{
		return (

			<div className='col-6 m-3' key={l._id} >
				<button className='btn btn-outline-primary m-3'>{l.people}</button>
				<button className='btn btn-outline-primary m-3' onClick={(e)=>editPeople(l._id)}>edit</button>
				<button className='btn btn-outline-primary m-3' onClick={(e)=>deletePeople(l._id)}>delete</button>
	
			</div>
		)
	}
	)

	const { people } = values;

	
	const handleChange = (e) => {
		setValues({

			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
			e.preventDefault();
			setValues(values);
			addPeople(token, values);
			setValues({ people: ""});
	};






	return (
		<div>

			<div className='container'>
				<div className='row'>
					<div className='col-12'>
						<br />
						<h4>Welcome to home</h4>
					</div>

					<div className='col-4'>
						<br />
						<form onSubmit={handleSubmit}>
							<div className="form-group">
								<label className="text-muted">Add People</label>
								<input
									name="people"
									type="text"
									onChange={handleChange}
									value={people}
									autoFocus
									required
									className="form-control"
								/>

							</div>

							<div className="col-4">
						<br />
						<br />
						<button type="submit" className="btn btn-outline-primary">
							add people
						</button>
					</div>

						</form>
					</div>

					
				</div>

				<br />
				<br />

				<div className='row'>
					{getList}
				</div>
			</div>
		</div>
	);
};

export default connect(mapStateToProps)(Home);


