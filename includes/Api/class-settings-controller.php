<?php

class WP_Security_Pilot_Settings_Controller extends WP_REST_Controller {

    public function __construct() {
        $this->namespace = 'wp-security-pilot/v1';
        $this->rest_base = 'settings';
    }

    public function register_routes() {
        register_rest_route(
            $this->namespace,
            '/' . $this->rest_base,
            array(
                array(
                    'methods'             => WP_REST_Server::READABLE,
                    'callback'            => array( $this, 'get_items' ),
                    'permission_callback' => array( $this, 'get_items_permissions_check' ),
                ),
                array(
                    'methods'             => WP_REST_Server::CREATABLE,
                    'callback'            => array( $this, 'create_item' ),
                    'permission_callback' => array( $this, 'create_item_permissions_check' ),
                ),
            )
        );
    }

    public function get_items( $request ) {
        $options = get_option( 'wp_security_pilot_settings', array() );
        return rest_ensure_response( $options );
    }

    public function create_item( $request ) {
        $params = $request->get_json_params();
        update_option( 'wp_security_pilot_settings', $params );
        return rest_ensure_response( array( 'success' => true ) );
    }

    public function get_items_permissions_check( $request ) {
        return current_user_can( 'manage_options' );
    }

    public function create_item_permissions_check( $request ) {
        return current_user_can( 'manage_options' );
    }
}
