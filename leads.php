<?php
// Зчитування лог-файлу
$logFile = 'leads_backup.log';
$leads = [];

if (file_exists($logFile)) {
    $lines = file($logFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        preg_match('/^(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}) - ({.*})$/', $line, $matches);
        if ($matches) {
            $date = $matches[1];
            $json = json_decode($matches[2], true);
            if ($json) {
                $json['date'] = $date;
                $leads[] = $json;
            }
        }
    }
}

// Фільтрація за датою
$filterDate = $_GET['date'] ?? '';
if ($filterDate) {
    $leads = array_filter($leads, function ($lead) use ($filterDate) {
        return strpos($lead['date'], $filterDate) === 0;
    });
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Leads</title>
</head>
<body>
<h2>Leads</h2>
<form method="get">
    <label for="date">Фільтр за датою:</label>
    <input type="date" name="date" id="date" value="<?php echo htmlspecialchars($filterDate); ?>">
    <button type="submit">Фільтрувати</button>
</form>
<table border="1">
    <tr>
        <th>ID</th>
        <th>Email</th>
        <th>Status</th>
        <th>FTD</th>
        <th>Дата</th>
    </tr>
    <?php foreach ($leads as $lead): ?>
        <tr>
            <td><?php echo htmlspecialchars($lead['id'] ?? 'N/A'); ?></td>
            <td><?php echo htmlspecialchars($lead['email'] ?? 'N/A'); ?></td>
            <td><?php echo htmlspecialchars($lead['status'] ?? 'N/A'); ?></td>
            <td><?php echo htmlspecialchars($lead['autologin'] ?? 'N/A'); ?></td>
            <td><?php echo htmlspecialchars($lead['date']); ?></td>
        </tr>
    <?php endforeach; ?>
</table>
</body>
</html>
