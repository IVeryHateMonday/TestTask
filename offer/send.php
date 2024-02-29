<?php

$curl = curl_init();


curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://sendmelead.com/api/v1/lead',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_HTTPHEADER => ["Authorization: Bearer 5c879d17-yjis-7560-ed2p-26c854ffe9ff"],
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS =>[
    "name"=> $_POST["name"] ,
    "phone"=> $_POST["phone"],
    "language"=> "ua",
    "country_code"=> "UA"
  ]
,
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
