<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Styled Form</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
        }

        header {
            margin-bottom: 20px;
        }

        header a {
            text-decoration: none;
            font-size: 18px;
            color: #333;
            padding: 10px 20px;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
            transition: 0.3s;
        }

        header a:hover {
            background-color: #ddd;
        }

        form {
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            width: 300px;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        input {
            padding: 10px;
            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        button {
            padding: 10px;
            background-color: #007bff;
            color: white;
            font-size: 16px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: 0.3s;
        }

        button:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>

<header>
    <a href="leads.php">Show leads</a>
</header>

<form action="send.php" id="form" method="post">
    <input name="firstName" id="firstName" placeholder="First Name" required>
    <input name="lastName" id="lastName" placeholder="Last Name" required>
    <input name="phone" id="phone" placeholder="Phone" required>
    <input name="email" id="email" placeholder="Email" type="email" required>
    <input type="hidden" id="countryCode" name="countryCode" value="GB">
    <input type="hidden" id="language" name="language" value="en">
    <button type="submit">Send</button>
</form>

<script src="formValidator.min.js"></script>
<script>
    document.addEventListener("DOMContentLoaded", function () {
        const validator = new FormValidator("form");
        validator.on("validationSuccess", function (form) {
            form.submit();
        });
    });
</script>

</body>
</html>
