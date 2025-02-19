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
<body>

<form method="POST">
    <label for="date_from">From:</label>
    <input type="date" name="date_from" id="date_from" value="<?= date('Y-m-d', strtotime($date_from)) ?>">

    <label for="date_to">To:</label>
    <input type="date" name="date_to" id="date_to" value="<?= date('Y-m-d', strtotime($date_to)) ?>">

    <button type="submit">Filter</button>
</form>

    <h2>Список лідів</h2>
    <table border="1">
        <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Status</th>
            <th>FTD</th>
        </tr>
        <?php foreach ($data['data'] as $item): ?>
            <tr>
                <td><?= htmlspecialchars($item['id']) ?></td>
                <td><?= htmlspecialchars($item['email']) ?></td>
                <td><?= htmlspecialchars($item['status']) ?></td>
                <td><?= htmlspecialchars($item['ftd']) ?></td>
            </tr>
        <?php endforeach; ?>
    </table>

</body>
