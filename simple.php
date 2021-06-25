<?php
require_Once('config.php');

if (! empty( $_POST ) ) {print_r($_POST); exit;
$mysql = new mysqli( DB_HOST, DB_USER, DB_PASS. DB_NAME );
$data = array_map( array( $mysql, 'real_escape_string' ), $_POST );

extract( $data );

$query = "INSERT INTO users (name, email) VALUES ('$name', '$email')";
$insert = $mysql->query( $query );
};


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>form php sql</title>
</head>
<body>
    <?php if ( isset( $insert ) ) : ?>
        <div class="message">
            <?php if ( $insert == true ) : ?>
                <p class="success"> Data was inserted successfully</p>
                <?php else : ?>
                    <p class="error"> THere was an error with the submission</p>
                <?php endif; ?>
                </div>
            <?php endif; ?>
            <form action="" method="post">
                <div class="form-field">
                    <input type="text" class="text" name="name" placeholder="Enter Your Name" required/>
                </div>
                <div class="form-field">
                    <input type="email" class="email" name="emaik" placeholder="Enter Your Email" required/>
                </div>
                <div class="form-field">
                    <button type="submit" class="button">Submit</button>

            </div>
            </form>


    
</body>
</html>