<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'holyword');

/** MySQL database username */
define('DB_USER', 'cloudmillAdmin');

/** MySQL database password */
define('DB_PASSWORD', 'Vort# 942!');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'nt`GJ@#g45+2rlhVuI=evB(vK3Pn.P0{I)8fYcm5j%u2?R_,er4j_?-E?Enj0FP?');
define('SECURE_AUTH_KEY',  '<`N&BN`_[F8mzzI,2%oi@GX_RDXMWD~6]_XL71T)lW#w`_^;1puq58M/^~DGHN2F');
define('LOGGED_IN_KEY',    '(`ZG-9[;YNB%Ci|madzkvnxO*l{G(Fr?1u9CtjLsinq,frL+=Mm0Xr?+WRK<,W(H');
define('NONCE_KEY',        'AwcAJw]5W2J3fj)Q*Vt[b1wVt}*d.LjL!)v!B(?i0$WlSdoA-d2zapu]?_`m`9DJ');
define('AUTH_SALT',        'M-X6>Rrw=#OIYZMQ%=.124xE_5zc>;#^{Ds/@Mq_|/GNd{;!8.=?I32Mg+Ak<^=2');
define('SECURE_AUTH_SALT', 'J s`lhn<%U&T`ZqoazgT/ mk: du:G|5 C=<#jhJj9~4{Uc(,9<SLV;b m%b6#Z@');
define('LOGGED_IN_SALT',   '5T8BA2$;,!8o=^#J@Uo#=[x),_w.qDII3j<AX;*>1h9{X&QtE}UFBsr`?`|G@CSg');
define('NONCE_SALT',       'P?bM*cna)#.}7EZ*6I5W@i%}:>F/0^}|t`IU5UD_IBhb1Iu!mVarEl/L6k7-dWxA');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'ha_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
