import React, {useState} from 'react';
import Page from '../Page';

import { Button } from '../../components/Button';
import { BigCard } from '../../components/BigCard';
import { Controls } from '../../components/Controls';

import { actorList } from '../../data/actorList';

//style
import * as styles from './style.module.scss';


const HomePage = () => {

	const [actorSelected, setActorSelected] = useState(actorList[0]);

	console.log(actorSelected);
	return (
		<Page>
			<div className={styles.header}>
				<h1>Saying Hi to my customers</h1>
				<div>
					<Button cta="Save"></Button>
					<Button cta="Cancel"></Button>
				</div>
			</div>
			<hr></hr>
			<div className={styles.content}>
				<BigCard image={actorSelected.src}></BigCard>
				<Controls onActorSelection={(actor) => setActorSelected(actor)}></Controls>
			</div>
		</Page>
	);
};

export default HomePage;
