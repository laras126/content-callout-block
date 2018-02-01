/**
 * BLOCK: Content Callout
 *
 * Block containing:
 * Image Upload (MediaUpload)
 * Heading (Editable)
 * Body Text (Editable)
 * Link Text (Editable)
 * URL (UrlInput)
 *
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const {
	registerBlockType,
	Editable,
	MediaUpload,
	UrlInput
} = wp.blocks; // Import registerBlockType() from wp.blocks

const {
	Button,
	IconButton,
	Dashicon
} = wp.components;


/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'ccfk/content-callout', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Content Callout', 'ccfk' ), // Block title.
	icon: 'palmtree', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'layout', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Callout' ),
		__( 'Highlight' ),
		__( 'create-guten-block' ),
	],
	attributes: {
		title: {
			type: 'array',
			source: 'children',
			selector: '.callout-text'
		},
		content: {
			type: 'array',
			source: 'children',
			selector: '.callout-title'
		},
		imgURL: {
			type: 'string',
			source: 'attribute',
			attribute: 'src',
			selector: 'img'
		},
		imgAlt: {
			type: 'string',
			source: 'attribute',
			attribute: 'alt',
			selector: 'img'
		},
		imgID: {
			type: 'number'
		},
		buttonText: {
			type: 'array',
			source: 'children',
			selector: '.callout-btn'
		},
		buttonURL: {
			type: 'string',
			source: 'attribute',
			attribute: 'href',
			selector: 'a'
		}
	},

	edit: function( props ) {
		const onSelectImage = img => {
			props.setAttributes( {
				imgID: img.id,
				imgURL: img.url
			} );
		};

		const onRemoveImage = img => {
			props.setAttributes( {
				imgID: null,
				imgURL: null,
				imgAlt: null
			} );
		};

		const onChangeContent = value => {
			props.setAttributes( { content: value } )
		};

		const onChangeTitle = value => {
			props.setAttributes( { title: value } )
		};

		const onChangeBtnText = value => {
			props.setAttributes( {
				buttonText: value
			} )
		};

		const onChangeBtnURL = value => {
			props.setAttributes( {
				buttonURL: value
			} )
		};

		return (
				<div className={ props.className }>
					<div class="callout-image">
						{ ! props.attributes.imgID ? (
							<MediaUpload
								onSelect={ onSelectImage }
								type="image"
								value={ props.attributes.imgID }
								render={ ( { open } ) => (
									<IconButton
										className="components-button button button-large"
										label={ __( 'Upload image' ) }
										icon="upload"
										onClick={ open }
									>
										{ __( 'Upload Image' ) }
									</IconButton>
								) }
							/>
						) : (
							<p class="image-wrapper">
								<img
									src={ props.attributes.imgURL }
									alt={ props.attributes.imgAlt }
								/>

								{ props.focus ? (
									<Button
										className="components-button button button-large"
										onClick={ onRemoveImage }>
										{ __( 'Remove Image' ) }
									</Button>
								) : null }

							</p>
						) }
				</div>
				<div class="callout-content">
					<Editable
						tagName="h2"
						placeholder={ __( 'Something headline' ) }
						onChange={ onChangeTitle }
						value={ props.attributes.title }
					/>
					<Editable
						tagName="p"
						placeholder={ __( 'Write something yummy' ) }
						onChange={ onChangeContent }
						value={ props.attributes.content }
					/>
					<div class="callout-btn">
						<Dashicon icon="admin-links" />
						<Editable
							tagName="span"
							placeholder={ __( 'Your link text' ) }
							onChange={ onChangeBtnText }
							value={ props.attributes.buttonText } />
						<UrlInput
							value={ props.attributes.buttonURL }
							onChange={ onChangeBtnURL }
						/>
					</div>
				</div>
			</div>
		);
	},

	save: function( props ) {
		return (
			<div className={ props.className }>
				<img src={ props.attributes.imgURL }
						 alt={ props.attributes.imgAlt } />
				<div class="callout-content">
					<h3 className="callout-title">{ props.attributes.title }</h3>
					<p className="callout-text">{ props.attributes.content }</p>
					<a className="callout-btn" href={ props.attributes.buttonURL }>
						{ props.attributes.buttonText }
					</a>
				</div>
			</div>
		);
	},
} );
