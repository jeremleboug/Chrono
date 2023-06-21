<?php
$location = 'Magny-en-Vexin';

$queryString = http_build_query([
  'access_key' => '0385a0674b1e313e876bacaed2b0087a',
  'query' => $location,
]);

$ch = curl_init(sprintf('%s?%s', 'http://api.weatherstack.com/current?access_key=0385a0674b1e313e876bacaed2b0087a&query=Magny-en-Vexin', $queryString));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$json = curl_exec($ch);
curl_close($ch);

$api_result = json_decode($json, true);

echo "la temperature a $location est de : {$api_result['current']['temperature']}℃", PHP_EOL;
?>