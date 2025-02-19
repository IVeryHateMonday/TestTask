<?php

function read_leads_from_file($file_path) {
    $leads = [];
    $file = fopen($file_path, "r");

    if ($file) {
        while (($line = fgets($file)) !== false) {
            $json_start = strpos($line, '{');
            if ($json_start !== false) {
                $lead = json_decode(substr($line, $json_start), true);
                if ($lead && isset($lead['status'], $lead['id'], $lead['email'], $lead['autologin'])) {
                    $leads[] = $lead;
                } else {
                    echo "Некорректная строка: $line\n";
                }
            } else {
                echo "JSON-объект не найден в строке: $line\n";
            }
        }
        fclose($file);
    } else {
        echo "Не удалось открыть файл: $file_path";
    }

    return $leads;
}

function get_lead_statuses($leads) {
    $statuses = [];
    foreach ($leads as $lead) {
        $statuses[] = [
            'id' => $lead['id'],
            'status' => $lead['status'],
            'email' => $lead['email'],
            'autologin' => $lead['autologin']
        ];
    }
    return $statuses;
}

// Пример использования
$file_path = "leads_backup.log";
$leads = read_leads_from_file($file_path);

if (!empty($leads)) {
    $statuses = get_lead_statuses($leads);
    header('Content-Type: application/json');
    echo json_encode($statuses, JSON_PRETTY_PRINT);
} else {
    echo json_encode(["error" => "Файл лидов пуст или содержит некорректные данные."]);
}

?>
