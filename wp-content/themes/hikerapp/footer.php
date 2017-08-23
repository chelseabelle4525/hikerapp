<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package LM_Custom_Theme
 */

?>

	</div><!-- #content -->

	<footer class="page-footer white">
		<div class="container main-footer section">
			<div class="row section">
				<div class="col s12 l8 footer-left">
					<div class="footer-logos">
						<img src="<?php echo get_site_url(); ?>/wp-content/uploads/eastlake-gathering-logo.jpg">
						<img src="<?php echo get_site_url(); ?>/wp-content/uploads/gamut360-logo.jpg">
					</div>
					<p>Welcome to Eastlake. A quaint neighborhood defined by exceptional views all while having downtown at its doorstep. Eastlake Gathering townhomes offer you the opportunity to own a place for friends and family to gather and experience the best Seattle has to offer. </p>
					<div class="footer-nav">
						<a href="/gamut360">Home</a>
						<a href="./thebuildings">The Buildings</a>
						<a href="#">Neighborhood</a>
						<a href="./contact">Contact</a>
					</div>
				</div>
				<div class="col s12 l4 footer-right">
					<h5>Address:</h5>
					<p>2321 Franklin Ave E <br>Seattle, WA 98102</p>
					<h5>Contact:</h5>
					<a href="tel:4252122210"><p>425.212.2210</a>
					<br>
					<a href="mailto:contact@gamut360.com">contact@gamut360.com</a>
					</p>
				</div>
			</div>
		</div>
		<div class="footer-copyright valign-wrapper">
			<div class="container">
				<div class="row sub-footer valign-wrapper">
					<div class="col s12 left-align">
						Copyright &copy; 2017 / Gamut360 Holdings, LLC
					</div>
					<div class="col s12 right-align">
						Designed and developed by <a class="white-text" href="https://learnedmedia.com/" target="_blank">[L]earned Media</a>
					</div>
				</div>
			</div>
		</div>
	</footer>
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>