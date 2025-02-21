<?php
$date_from = isset($_POST['date_from']) ? $_POST['date_from'] . " 00:00:00" : date('Y-m-d 00:00:00', strtotime('-1 day'));
$date_to = isset($_POST['date_to']) ? $_POST['date_to'] . " 23:59:59" : date('Y-m-d 23:59:59');

$url = "https://crm.belmar.pro/api/v1/getstatuses";
$token = "ba67df6a-a17c-476f-8e95-bcdb75ed3958";

$post_fields = json_encode([
    "date_from" => $date_from,
    "date_to" => $date_to,
]);

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $post_fields);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "token: $token",
    "Content-Type: application/json"
]);

$response = curl_exec($ch);
curl_close($ch);

$data = json_decode($response, true);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lead List</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 20px;
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
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            display: flex;
            gap: 10px;
            align-items: center;
        }

        label {
            font-size: 16px;
            font-weight: bold;
        }

        input {
            padding: 8px;
            font-size: 14px;
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

        h2 {
            margin-top: 20px;
            color: #333;
        }

        table {
            width: 80%;
            border-collapse: collapse;
            margin-top: 15px;
            background: white;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            border-radius: 8px;
            overflow: hidden;
        }

        th, td {
            padding: 12px;
            border: 1px solid #ddd;
            text-align: left;
        }

        th {
            background-color: #007bff;
            color: white;
        }

        tr:nth-child(even) {
            background-color: #f9f9f9;
        }
    </style>
</head>
<body>

<header>
    <a href="index.php">Show form</a>
</header>

<form method="POST">
    <label for="date_from">From:</label>
    <input type="date" name="date_from" id="date_from" value="<?= date('Y-m-d', strtotime($date_from)) ?>">

    <label for="date_to">To:</label>
    <input type="date" name="date_to" id="date_to" value="<?= date('Y-m-d', strtotime($date_to)) ?>">

    <button type="submit">Filter</button>
</form>

<h2>Список лідів</h2>

<table>
    <tr>
        <th>ID</th>
        <th>Email</th>
        <th>Status</th>
        <th>FTD</th>
    </tr>
    <?php if (!empty($data['data'])): ?>
        <?php foreach ($data['data'] as $item): ?>
            <tr>
                <td><?= htmlspecialchars($item['id']) ?></td>
                <td><?= htmlspecialchars($item['email']) ?></td>
                <td><?= htmlspecialchars($item['status']) ?></td>
                <td><?= htmlspecialchars($item['ftd']) ?></td>
            </tr>
        <?php endforeach; ?>
    <?php else: ?>
        <tr>
            <td colspan="4" style="text-align:center;">No data available</td>
        </tr>
    <?php endif; ?>
</table>

</body>
</html>
