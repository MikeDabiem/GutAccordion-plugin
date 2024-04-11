import {RichText, useBlockProps} from '@wordpress/block-editor';
import {__} from "@wordpress/i18n";

export default function save( { attributes, setAttributes } ) {
	const { number, question, answer } = attributes;

	return (
		<div {...useBlockProps.save({
			className: `gutaccordion`
		})}>
			<p className="gutaccordion__num">{number}</p>
			<div className={'gutaccordion__head'}>
				<RichText.Content
					className="gutaccordion__title"
					tagName="h3"
					value={question}
				/>
				<button
					className={'gutaccordion__button'}
					aria-label={__('Show/Hide')}
				/>
			</div>
			<div className={'gutaccordion__body'}>
				<RichText.Content
					className="gutaccordion__content"
					tagName="p"
					value={answer}
				/>
			</div>
		</div>
	);
}
