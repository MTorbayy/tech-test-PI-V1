<?php

abstract class Model {

    private const HOST_NAME = "localhost";
    private const DB_NAME = "roomsinfo";
    private const USER_NAME = "root";
    private const PWD = "";

    private static $pdo;

    private static function setDB() {
        self::$pdo = new PDO('mysql:host='.self::HOST_NAME.';dbname='.self::DB_NAME,self::USER_NAME,self::PWD,array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
    }

    protected function getDB() {
        if(self::$pdo === null) {
            self::setDB();
        }
        return self::$pdo;
    }
} 