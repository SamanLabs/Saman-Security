<?php
/**
 * Plugin Name: WP Security Pilot
 * Plugin URI:  https://github.com/jhd3197/WP-Security-Pilot
 * Description: A smart security plugin for WordPress.
 * Version: 0.0.1
 * Author:      Juan Denis
 * Author URI:  https://github.com/jhd3197
 * License: GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain: wp-security-pilot
 * Domain Path: /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
    die;
}

define( 'WP_SECURITY_PILOT_VERSION', '1.0.0' );

require_once plugin_dir_path( __FILE__ ) . 'includes/class-admin-loader.php';

function run_wp_security_pilot() {
    $plugin = new WP_Security_Pilot_Admin_Loader();
    $plugin->run();
}
run_wp_security_pilot();
