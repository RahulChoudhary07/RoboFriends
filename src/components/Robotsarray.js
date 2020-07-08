import React from 'react';
import Robo from './Robo';

const Robotsarray =({robots})=>{
	const roboarray=robots.map((user)=>{
		return <Robo key={user.id} id={user.id} name={user.name} email={user.email} username={user.username} />
	});
	return (
		<div>
			{roboarray}
		</div>
	);
}

export default Robotsarray;