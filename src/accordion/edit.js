import {InnerBlocks, useBlockProps} from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	return (
		<div { ...useBlockProps() }>
			<InnerBlocks allowedBlocks={ [ 'create-block/accordion-item' ] } />
		</div>
	);
}
