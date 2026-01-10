<?php
class WP_Security_Pilot_Admin_Loader {

    public function __construct() {
        require_once plugin_dir_path( __FILE__ ) . 'Api/class-settings-controller.php';
    }

    public function run() {
        add_action( 'admin_menu', array( $this, 'add_plugin_admin_menu' ) );
        add_action( 'rest_api_init', array( $this, 'register_api_routes' ) );
        add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_scripts' ) );
    }

    public function register_api_routes() {
        $settings_controller = new WP_Security_Pilot_Settings_Controller();
        $settings_controller->register_routes();
    }


    public function add_plugin_admin_menu() {
        add_menu_page(
            'WP Security Pilot',
            'Security Pilot',
            'manage_options',
            'wp-security-pilot',
            array( $this, 'display_plugin_admin_page' ),
            'dashicons-shield-alt',
            100
        );
    }

    public function display_plugin_admin_page() {
        ?>
        <div id="wp-security-pilot-root"></div>
        <?php
    }

    public function enqueue_scripts( $hook ) {
        if ( 'toplevel_page_wp-security-pilot' !== $hook ) {
            return;
        }

        wp_enqueue_script(
            'wp-security-pilot-admin-app',
            plugin_dir_url( __FILE__ ) . '../assets/js/index.js',
            array( 'wp-api-fetch', 'wp-element' ),
            WP_SECURITY_PILOT_VERSION,
            true
        );

        wp_enqueue_style(
            'wp-security-pilot-admin-style',
            plugin_dir_url( __FILE__ ) . '../assets/css/index.css',
            array(),
            WP_SECURITY_PILOT_VERSION
        );
    }
}
