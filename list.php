<?php

if ( isset( $_GET['token_id']{1} ) ) $nft_id = (int) $_GET['token_id'];
$nft_current_page  = get_permalink( get_the_ID() );

if (!isset($nft_id)) {
	$args = array(
        'post_type' => 'nft',
        'posts_per_page' => -1
    );
	$query = new WP_Query($args);
	if ($query->have_posts() ) : 
		
		while ( $query->have_posts() ) : $query->the_post();
			$nft_link_id = add_query_arg( 'token_id', get_the_id() , $nft_current_page ) ;
			$nft_link = get_the_title();
			?>
			<div class='nft_item'>
                <a class="nftitem" href='<? echo $nft_link_id ?>'>
                    <div class='nftitem_container'>
                        <img class='nft_img' src="<? echo get_the_content() ?>">
                    </div>
			        <div class='nft_title'><? echo get_the_title() ?></div>
			     </a>
			</div>
			<?php
			echo '';
		endwhile;
		
		wp_reset_postdata();
	endif;
} else {
	
	$args = array(
        'p' => $nft_id,
		'post_type'=> 'nft'
    );
	$query = new WP_Query($args);
	
	if ($query->have_posts() ) { $query->the_post();
	?>
	<div id="root"></div>
	<script>
	window.nftConfig = { networkType: '<?php esc_html_e(get_option("nft_networkName"),"nft"); ?>', page: 'view', tokenId: <?php echo $nft_id; ?>, title: "<?php echo get_the_title(); ?>" }
	</script><?
	} else {
	 esc_html_e("Not found","nft");
	}
}

?>
