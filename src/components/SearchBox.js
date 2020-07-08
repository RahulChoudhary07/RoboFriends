import React from 'react';

const SearchBox=({searchChange})=>{
	return(
		<div className='pa2'>
			<input
			className='pa3 bg-lightest-blue b--green ' 
			type="searchbox" 
			placeholder="Search Robots"
			onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;