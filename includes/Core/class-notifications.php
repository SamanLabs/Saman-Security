<?php

class Saman_Security_Notifications {
    public static function send_alert( $type, $message, $context = array() ) {
        $settings = Saman_Security_Settings::get_settings();
        $alerts = isset( $settings['notifications']['alerts'] ) ? $settings['notifications']['alerts'] : array();

        $mapping = array(
            'firewall_block'     => 'on_firewall_block',
            'malware_found'      => 'on_malware_found',
            'core_file_modified' => 'on_core_file_modified',
            'admin_login'        => 'on_admin_login',
        );

        if ( isset( $mapping[ $type ] ) ) {
            $key = $mapping[ $type ];
            if ( empty( $alerts[ $key ] ) ) {
                return;
            }
        }

        $recipient = $settings['notifications']['recipient_email'];
        if ( empty( $recipient ) ) {
            $recipient = get_option( 'admin_email' );
        }

        $subject = sprintf( '[Saman Security] %s', ucwords( str_replace( '_', ' ', $type ) ) );
        $body = $message;

        if ( ! empty( $context ) ) {
            if ( isset( $context['ip'] ) ) {
                $context['ip'] = Saman_Security_Settings::anonymize_ip( $context['ip'] );
            }
            $body .= "\n\n" . wp_json_encode( $context, JSON_PRETTY_PRINT );
        }

        wp_mail( $recipient, $subject, $body );

        $webhook = $settings['integrations']['slack']['webhook_url'];
        if ( ! empty( $webhook ) ) {
            wp_remote_post(
                $webhook,
                array(
                    'headers' => array( 'Content-Type' => 'application/json' ),
                    'body'    => wp_json_encode(
                        array(
                            'text' => $subject . "\n" . $message,
                        )
                    ),
                    'timeout' => 5,
                )
            );
        }
    }
}
