//style
import * as styles from './style.module.scss';

export const Button = ({ cta, onClick, disabled, color = 'primary' }) => {
	return (
		<button
			className={`${styles.container}
            ${disabled && styles['container--disabled']}
			${styles[`container--${color}`]}
            `}
			onClick={() => onClick && onClick()}
		>
			{cta}
		</button>
	);
};
