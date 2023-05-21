<?php 
    session_start();

    if (!isset($_SESSION['username'])) {
        $_SESSION['msg'] = "You must log in first";
        header('location: login.php');
    }

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
    <link rel="stylesheet" href="stylecart.css">
    <link href="/dist/output.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/brands.min.css"
        integrity="sha512-9YHSK59/rjvhtDcY/b+4rdnl0V4LPDWdkKceBl8ZLF5TB6745ml1AfluEU6dFWqwDw9lPvnauxFgpKvJqp7jiQ=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <script src="https://code.jquery.com/jquery-3.7.0.js"
        integrity="sha256-JlqSTELeR4TLqP0OG9dxM7yDPqX1ox/HfgiSLBj8+kM=" crossorigin="anonymous"></script>
</head>

<body class=" bg-gray-900">

    <header class="bg-white px-6 py-6 w-full h-24 sticky  rounded-b-3xl z-20 top-0">
        <div class="w-[1000px] m-auto container">
            <nav class=" justify-between flex items-center">
                <h1 class="text-4xl">GPU SHOP</h1>
                <ul class="justify-between flex gap-6">

                    <li class="mt-3">
                        <a>
                            <i class="fa-solid fa-user " style="color: #494949;"></i>
                            <div class="homecontent">
                                <?php if (isset($_SESSION['username'])) : ?>
                                    <p><strong><?php echo $_SESSION['username']; ?></strong></p>
                                <?php endif ?>
                            </div>
                            ?>
                        </a>
                    </li>


                    <li class="mt-3"><a href="login.php"
                            class="border px-2 py-1 rounded-full bg-slate-700 text-white  hover:bg-opacity-60">LOGOUT</a>
                    </li>
                    <div class="shopping">
                        <img src="image/shopping.svg" class="">
                        <span class="quantity">0</span>
                    </div>
                </ul>


            </nav>


    </header>

    <div class="list  flex-col container">

    </div>
    </div>
    <div class="card z-40">
        <h1>Cart</h1>
        <ul class="listCard ">
        </ul>
        <div class="checkOut">
            <div class="total">0</div>
            <div class="closeShopping">Close</div>
        </div>
    </div>

    <script src="app.js"></script>
</body>

</html>