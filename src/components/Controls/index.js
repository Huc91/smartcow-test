import React, { useState } from 'react';

import { actorList } from '../../data/actorList';
//style
import * as styles from './style.module.scss';

export const Controls = ({ onActorSelection }) => {
	const [selection, setSelection] = useState('actor');
	const options = [
		{
			text: 'Actor',
			value: 'actor'
		},
		{
			text: 'Voice',
			value: 'voice'
		},
		{
			text: 'Alignment',
			value: 'alignment'
		},
		{
			text: 'Background',
			value: 'background'
		},

	]
	return (
		<div className={styles.controls}>
			<nav className={styles.options}>
				<ul>
					{options.map((option) => <li key={option.value}><button onClick={() => setSelection(option.value)}>{option.text}</button></li>)}
				</ul>
			</nav>
			<div >
				{(selection === 'actor') &&
					<div className={styles.preview}>
						{actorList.map((actor) =>
							<div className={styles.minicard} onClick={ () => onActorSelection(actor)}>
							<img src={actor.src} alt={actor.name}></img>
							<span>{actor.name}</span>
						</div>)}
					</div>
				}
				{(selection === 'voice') && 'voice'}
				{(selection === 'alignment') && 'alignment'}
				{(selection === 'background') && 'background'}
			</div>
		</div>
	);
};
