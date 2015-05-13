<!DOCTYPE html>
<html lang="en" class="tr-coretext tr-aa-subpixel">
<?php include('inc/sig.php');?>
  <head>
    <title>YASIN</title>
    <?php include('inc/load_top.php');?>
  </head>
  <body>

    <?php include('inc/header.php');?>

    <div id="wrap">
    	<section class="container">
    		<div class="text-center">
    			<h1>بسم الله الرحمن الرحيم</h1>
    		</div>
	    	<ol class="surat arabic">
				<?php for($i=1; $i<84; $i++){ ?>
				<li><img src="assets/img/yasin/surat_<?php echo $i;?>.png"></li>
				<?php } ?>
			</ol>
	    </section>
    </div>

    <?php include('inc/footer.php');?>

    <?php include('inc/load_bottom.php');?>

  </body>
</html>