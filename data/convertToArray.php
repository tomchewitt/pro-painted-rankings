<?php

/*
[
    [
        "name": "age-of-santa",
        "date": "123",
        "painters": 123
    ]
]

[
    [
        "name": "abc",
        "position": 1,
        "score": 123,
        "tournaments": [
            [
                "name": "age-of-santa",
                "position": "nomination",
            ]
        ]
    ]
]
*/


$csv = array_map('str_getcsv', file('Pro Painted Rankings - data entry.csv'));

// TOURNEYS

$tournaments = [];

foreach ($csv[0] as $key => $value) {
    if ($value === 'Event:') {
        continue;
    }

    $value = str_replace(' ', '-', strtolower($value));

    $dateObj = DateTime::createFromFormat('d/m/Y', $csv[1][$key]);
    $timestamp = strtotime($dateObj->format(Datetime::ATOM));

    $tournaments[] = [
        "name" => $value,
        "date" => $timestamp,
        "painters" => $csv[2][$key],
    ];
}


// PAINTERS

$painters = [];

foreach ($csv as $key => $painterCsvObj) {
    if ($key <= 3) {
        continue;
    }

    $newPainter = [];

    $newPainter['name'] = str_replace(' ', '-', strtolower($painterCsvObj[0]));

    foreach ($painterCsvObj as $index => $position) {
        if ($index === 0 || $position === '') {
            continue;
        }

        $tourneyName = str_replace(' ', '-', strtolower($csv[0][$index]));

        $newPainter['tournaments'][] = [
            "name" => $tourneyName,
            "position" => $position,
        ];
    }

    $painters[] = $newPainter;
}


// SCORES & POSITIONS

$csv2 = array_map('str_getcsv', file('Pro Painted Rankings - rankings.csv'));

foreach ($csv2 as $key => $value) {
    if ($key === 0) {
        continue;
    }

    $name = str_replace(' ', '-', strtolower($value[1]));

    $paintersIndex = array_search($name, array_column($painters, 'name'));

    $painters[$paintersIndex]['score'] = $value[2];
    $painters[$paintersIndex]['position'] = $value[0];
}


// SEND TO JSON

$masterJson = new stdClass();
$masterJson->painters = $painters;
$masterJson->tournaments = $tournaments;

file_put_contents('./json/data.json', json_encode($masterJson, JSON_PRETTY_PRINT));
file_put_contents('./json/data.min.json', json_encode($masterJson));

echo 'DONE' . PHP_EOL;
