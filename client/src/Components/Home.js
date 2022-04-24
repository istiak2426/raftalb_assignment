import React, { useEffect } from 'react'
import { useState } from "react";
import { addPeople, getPeople, deletePeopleApi } from "./apiCalls"
import { connect } from 'react-redux';

const mapStateToProps = state => {
	return {
		token: state.token,
		userId: state.userId

	}
}

const Home = (props) => {
	const [values, setValues] = useState({
		people: '',
		relation: '',
		relationshipPerson: ''
	});

	const [list, setList] = useState([])

	const [start, setStart] = useState("")
	const [end, setEnd] = useState("")

	const [relationStr, setRelationstr] = useState("")
	const [relationStr2, setRelationstr2] = useState("")

	const token = props.token;

	const userId = props.userId;


	useEffect(() => {


		getPeople(token, userId)
			.then(res => setList(res.data));

	}, [values, token, userId])

	const deletePeople = async (_id) => {

		const data = await deletePeopleApi(token, _id)
		let afterDelete = list.filter((s) => s._id !== data.data._id);
		setList(afterDelete);

	}




	const getList = list.map((l) => {



		return (



			<div key={l._id}>
				<button className='btn btn-outline-primary m-3'
					onClick={() => handlestartClick(l.people)}
				>{l.people}</button>

				<button className='btn btn-outline-primary m-3'>{l.people} is a {l.relation} of {l.relationshipPerson}</button>

				<button className='btn btn-outline-primary m-3' onClick={() => handleendClick(l.relationshipPerson)}>{l.relationshipPerson}</button>
				<button className='btn btn-outline-primary m-3' onClick={(e) => deletePeople(l._id)}>delete</button>
			</div>



		)
	}
	)

	const { people, relation, relationshipPerson } = values;


	const handlestartClick = (name) => {
		setStart(name)

	}

	const handleendClick = (name2) => {
		setEnd(name2)
	

	}






	const handleChange = (e) => {
		setValues({
			...values,

			[e.target.name]: e.target.value,

		});




	};


	const handleSubmit = (e) => {
		e.preventDefault();
		setValues(values);
		addPeople(token, values, userId);
		setValues({
			people: '',
			relation: '',
			relationshipPerson: ''
		});
	};

	const handleRelation = (startName, endName) => {

		const listing = list.filter((f)=> f.people === startName)

	

		const listing2 = listing.map((i)=>{
			const newArr=  i.relationshipPerson;
			

			return newArr
			
		})



		const  newArr2 = listing2.map((o)=>{

			return o
		})

		const firstguy = newArr2[0];

	

		const secondguy= newArr2[1];

		
	

		const newArr3 = []


		const listing3 = list.filter((p)=>
			{

				if(p.people === firstguy){
					return p.people 
				}
				else{
					return
				}
				
			})

	

			const listing4 = list.filter((p)=>
			{
				if(p.people === secondguy){
					return p.people 
				}
				else{
					return
				}
			})

	

	




			const backtrack= list.filter((h)=>{
				return h.relationshipPerson === endName
			})

		

			const firstBacktrack = backtrack[0].people;
			const secondBacktrack = backtrack[1].people;

			const target = listing3[0].relationshipPerson;

			let result = null;
			if(target === endName)
			{
				result = (`${startName} > ${listing3[0].people} > ${endName}`)

			}

			setRelationstr(result);

			let target2 = listing4[0].relationshipPerson
			let result2  = null;
			if(target2 === secondBacktrack)

			{
				result2 = (`${startName} > ${secondguy} > ${secondBacktrack} > ${endName}`)

			}
			setRelationstr2(result2)
			
	}

	



	return (
		<div>

			<div className='container'>
				<div className='row'>
					<div className='col-12'>
						<br />
						<h4>Welcome to home</h4>
					</div>

					<div className='col-6'>
						<br />
						<form onSubmit={handleSubmit}>
							<div className="form-group">
								<label className="text-muted">Name</label>
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
							<div className="form-group">
								<label className="text-muted">relation</label>
								<input
									name="relation"

									onChange={handleChange}
									value={relation}

									className="form-control"
								/>
							</div>
							<div className="form-group">
								<label className="text-muted">Relationship Person</label>
								<input
									name="relationshipPerson"

									onChange={handleChange}
									value={relationshipPerson}

									className="form-control"
								/>
							</div>

							<button type="submit" className="btn btn-outline-primary">add people</button>
						</form>
					</div>
					<div className='col-4 text-center'>
						<br />
						<br />
						{start}

						<br />
						<br />

						{end}


			
			


						<br />
						<br />

						<button type="submit" className="btn btn-outline-primary" onClick={()=>handleRelation(start, end)}>get relation</button>

						<br />
						<br />

						{relationStr}

						
						<br />
						<br />

						{relationStr2}

						
					</div>




				</div>

				<br />
				<br />

				<div className='row'>
					<div className='col-8'>{getList}</div>


				</div>
			</div>
		</div>
	);
};

export default connect(mapStateToProps)(Home);


