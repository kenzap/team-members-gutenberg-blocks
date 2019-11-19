<?php
/*
Block Name: Kenzap Team Members #1
Description: Team Member Blocks
Author: Kenzap
Version: 1.0.1
Author URI: http://kenzap.com
License: GPL2+
License URI: http://www.gnu.org/licenses/gpl-2.0.txt
*/

function kenzap_team_members_01() {

	wp_register_style(
        'kenzap-team-members-01-frontend',
        plugins_url( 'style.css', __FILE__ ),
        array( 'font-awesome'),
        filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
	);
	
    wp_register_style(
        'kenzap-team-members-01-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks', 'font-awesome' ),
        filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' )
    );

    wp_register_script(
        'kenzap-team-members-01-editor',
        plugins_url( 'block.js', __FILE__ ),
        array( 'wp-blocks', 'wp-editor', 'wp-i18n', 'wp-element', 'wp-components' )
    );
    
    register_block_type( 'kenzap-team-members/block-01', array(
        'editor_script' => 'kenzap-team-members-01-editor',
		'editor_style'  => 'kenzap-team-members-01-editor',
        'style'         => 'kenzap-team-members-01-frontend',
    ) );
}
add_action( 'init', 'kenzap_team_members_01' );

/* Setup dependencies */
function kenzap_team_members_01_scripts() {

    wp_enqueue_style( 'font-awesome', 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', array() );
}
//add_action( 'wp_enqueue_scripts', 'kenzap_team_members_01_scripts' );
add_action( 'admin_enqueue_scripts', 'kenzap_team_members_01_scripts' );


function kenzap_team_add_specific_features( $post_object ) {
    if(!function_exists('has_blocks') || !function_exists('parse_blocks'))
        return;

    if ( has_blocks( $post_object ) ) {
        //$pathToPlugin = plugins_url( 'dist/', dirname( __FILE__ ) );
        $blocks = parse_blocks( $post_object ->post_content );
        foreach ($blocks as $block) {

            if ($block['blockName'] == 'kenzap-team-members/block-01') {

                wp_enqueue_style( 'font-awesome', 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', array() );
            }
        }
    }
}
add_action( 'the_post', 'kenzap_team_add_specific_features' );
