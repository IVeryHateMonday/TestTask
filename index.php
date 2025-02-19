<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
    <form action="send.php" id="form" method="post">
        <input name="firstName" id="firstName" placeholder="firstName">
        <input name="lastName" id="lastName" placeholder="lastName">
        <input name="phone" id="phone" placeholder="phone">
        <input name="email" id="email" placeholder="email">
        <input type="hidden" id="countryCode" name="countryCode" value="GB">
        <input type="hidden" id="language" name="language" value="en">
        <button type="submit"> Send</button>
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