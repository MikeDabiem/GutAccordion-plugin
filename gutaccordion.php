<?php
/**
 * Plugin Name:       GutAccordion
 * Description:       Accordion Gutenberg Block.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Viktor Hvozdakov
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       gutaccordion
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function create_block_gutaccordion_block_init() {
	register_block_type( __DIR__ . '/build/accordion' );
	register_block_type( __DIR__ . '/build/accordion-item' );
}
add_action( 'init', 'create_block_gutaccordion_block_init' );
