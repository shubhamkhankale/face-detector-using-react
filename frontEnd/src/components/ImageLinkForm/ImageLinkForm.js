import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange,onButtonSubmit}) => {
	return(
		<div>
			<div>
				<p className='f4'>
					{'This Magic Brain Will Detect the Faces in Your Picture. Give it a Try !'}
				</p>
			</div>
			<div className='center'>
				<div className='pa3 shadow-5 br3 from center form'>
					<input className='w-70 pa2 f4 center' type='text' onChange={onInputChange}/>
					<button className='grow f4 ph3 link w-30 pv2 dib white bg-light-purple center'
					onClick={onButtonSubmit}>Detect</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;