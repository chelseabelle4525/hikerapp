<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package LM_Custom_Theme
 */

?><!doctype html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">
<link href="https://fonts.googleapis.com/css?family=Playfair+Display|Open+Sans" rel="stylesheet">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"> -->

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
	<!-- <a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'lm-custom-theme' ); ?></a> -->
	

	<div class="navbar-fixed">
		<nav class="z-depth-1" role="navigation">
			<div class="nav-wrapper container">
				<a id="logo-container" href="/gamut360" class="valign-wrapper brand-logo left">
					<img src="<?php echo get_site_url(); ?>/wp-content/uploads/2017/07/logo.png">
				</a>
				<a href="http://www.gamut360.com/" target="_blank" class="valign-wrapper left h-100">
					<img class="white-gamut-logo" src="<?php echo get_site_url(); ?>/wp-content/uploads/gamut360-logo.png">
				</a>
				<ul class="right hide-on-med-and-down">
					<!-- <li><a href="#">Navbar Link</a></li> -->
					<?php if ( has_nav_menu( 'primary' ) ) : ?>
					
						<?php
							wp_nav_menu( array(
								'theme_location' => 'primary'
								// 'menu_class'     => 'primary-menu',
							 ) );
						?>
					<?php endif; ?>
				</ul>
		
				<ul id="nav-mobile" class="side-nav">
					<li><a href="#">Navbar Link</a></li>
				</ul>
		
				<a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>
			</div>
		</nav>
	</div>


