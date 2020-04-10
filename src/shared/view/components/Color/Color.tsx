import React from 'react';
import block from 'bem-cn';

import { ColorType } from 'shared/types/models';

import './Color.scss';

const b = block('color');

function Color ({ hex, name, opacity }: ColorType) {
	return (
		<div className={b()}>
			<div className={b('preview')} style={{ opacity, backgroundColor: hex, }}></div>
			<div className={b('description')}>
				<div className={b('name')}>{name}</div>
				<div className={b('hex')}>{hex}</div> 
			</div>
		</div>
	);
}
  
export { Color };