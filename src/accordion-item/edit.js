import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps } from '@wordpress/block-editor';
import './editor.scss';
import {select} from "@wordpress/data";

export default function Edit( { attributes, setAttributes, clientId } ) {
	const { number, question, answer } = attributes;

	if (number === '0') {
		const index = select( 'core/block-editor' ).getBlockIndex( clientId );
		const num = index < 10 ? '0' + ( index + 1 ) : index + 1;
		setAttributes( { number: num } );
	}

	return (
		<div { ...useBlockProps({
			className: `gutaccordion`
		}) }>
			<p className="gutaccordion__num">{number}</p>
			<div className={'gutaccordion__head'}>
				<RichText
					className="gutaccordion__title"
					tagName="h3"
					placeholder={__('Question', 'gutaccordion')}
					value={ question }
					onChange={ (val) => setAttributes({question: val}) }
				/>
				<button
					className={'gutaccordion__button'}
				/>
			</div>
			<div className={'gutaccordion__body'}>
				<RichText
					className="gutaccordion__content"
					tagName="p"
					placeholder={ __( 'Answer', 'gutaccordion' ) }
					value={ answer }
					onChange={ ( val ) => setAttributes( { answer: val } ) }
				/>
			</div>
		</div>
	);
}
