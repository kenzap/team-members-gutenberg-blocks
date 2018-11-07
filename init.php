<?php
/*
Plugin Name: Kenzap Team Members Gutenberg Blocks
Description: Easily create and customize team member blocks on your website
Author: Kenzap
Version: 1.0.0
Author URI: http://kenzap.com
License: GPL2+
License URI: http://www.gnu.org/licenses/gpl-2.0.txt
*/

/**
 * Exit if accessed directly
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

//Check plugin requirements
if (version_compare(PHP_VERSION, '5.6', '<')) {
    if (! function_exists('kenzap_team_members_disable_plugin')) {
        /**
         * Disable plugin
         *
         * @return void
         */
        function kenzap_team_members_disable_plugin()
        {
            if (current_user_can('activate_plugins') && is_plugin_active(plugin_basename(__FILE__))) {
                deactivate_plugins(__FILE__);
                unset($_GET['activate']);
            }
        }
    }

    if (! function_exists('kenzap_team_members_show_error')) {
        /**
         * Show error
         *
         * @return void
         */
        function kenzap_team_members_show_error()
        {
            echo '<div class="error"><p><strong>Kenzap Team Members Gutenberg Blocks</strong> need at least PHP 5.6 version, please update php before installing the plugin.</p></div>';
        }
    }

    //Add actions
    add_action('admin_init', 'kenzap_team_members_disable_plugin');
    add_action('admin_notices', 'kenzap_team_members_show_error');

    //Do not load anything more
    return;
}

/**
 * Initialize the blocks
 */
function kenzap_team_member_loader() {
	/**
	 * Load the blocks functionality
	 */
    require_once plugin_dir_path( __FILE__ ) . 'team-members-01/init.php';
}
add_action( 'plugins_loaded', 'kenzap_team_member_loader' );