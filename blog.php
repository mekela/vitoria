<?php
/*
Template Name Posts: Blog
*/
?>

<?php get_header(); ?>
<!--main-->
<div id="main"  class="main_nospacing flex_menu">
	
			<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
				<div class="blog_title" style="background: url(<?php the_field('blog_img'); ?>) repeat-x center top">
					<div class="inner">
						<h2><?php the_title()?></h2>
						<div class="blog_title_all_info"><span><img src="<?php bloginfo('template_url') ?>/img/user_icon.png" alt=""/>Author: <?php the_author(); ?></span>  
							<span><img src="<?php bloginfo('template_url') ?>/img/date_icon.png" alt=""/><?php the_date(); ?></span>
							
						</div>
					</div>
				</div>
				
				<article class="inner content_text">	
					<br/><?php the_content()?>
					<nav class="socials socials_blog">
						<?php social_likes( $post_id ) ?>
					</nav>
				</article>
				
				
				
		
		
		
		
		<?php comments_template(); ?>
		
		
		<div class="blog_go"><a href="/blog">GO TO THE BLOG</a></div>
		<?php 
		$post_id = $post->ID; // current post id
		 $cat = get_the_category(); 
		 $current_cat_id = 3; // current category Id 

		 $args = array('category'=>$current_cat_id,'orderby'=>'post_date','order'=> 'DESC');
		 $posts = get_posts($args);
		 // get ids of posts retrieved from get_posts
		 $ids = array();
		 foreach ($posts as $thepost) {
		  $ids[] = $thepost->ID;
		 }
		 // get and echo previous and next post in the same category
		 $thisindex = array_search($post->ID, $ids);
		 $previd = $ids[$thisindex-1];
		 $nextid = $ids[$thisindex+1];
		 $img_atts = wp_get_attachment_image_src( $attachment_id, $default );
		 $img_src = $img_atts[0];
		
		if($previd==''){echo '';}
		if($nextid==''){echo '';}
		
		 ?>
		<div class="next_prev_blog">
			<div>
				<?php echo get_the_post_thumbnail($previd) ?>
				<span>
					<strong><?php echo get_the_title($previd) ?></strong>
					<a href="<?php echo get_permalink($previd) ?>" class="prev_blog">Prev. article</a>
				</span>
			</div>
			<div>
				<?php echo get_the_post_thumbnail($nextid) ?>
				<span>
					<strong><?php echo get_the_title($nextid) ?></strong>
					<a href="<?php echo get_permalink($nextid) ?>" class="next_blog">Next article</a>
				</span>
			</div>
		</div>
		
		
			<?php endwhile; ?>

			<?php endif; ?>
			
</div>
<!--footer-->
<?php get_footer(); ?>
