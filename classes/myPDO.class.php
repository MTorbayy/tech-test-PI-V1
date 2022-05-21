<?php 

    abstract class myPDO {
        private const HOST_NAME = "localhost";
        private const DB_NAME = "roomsinfo";
        private const USER_NAME = "root";
        private const PWD = "";

        private static $myPDOInstance = null; //Instance de PDO - static variable

        public static function getPDO(){ //Pour récupérer l'instance PDO ou la créer si elle n'existe pas
            if(is_null(self::$myPDOInstance)) { //self car variable static

                try {
                    $connexion = 'mysql:host='.self::HOST_NAME.';dbname='.self::DB_NAME;
                    self::$myPDOInstance = new PDO($connexion, self::USER_NAME, self::PWD, array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
                } catch(PDOException $e) {
                    $message = "erreur de connexion à la DB - ". $e->getMessage();
                    die($message);
                }
            }

            return self::$myPDOInstance;
            


        } 
    }

    

    

    // if($myPDO) {
    //     $monthNumber = 2;
    //     $req = "SELECT * FROM bdd_pi_modifieddates WHERE MONTH(stay_date) = :monthNumber AND DAY(stay_date) = 1";
    //     $stmt = $myPDO->prepare($req); //Préparation de la requête
    //     $stmt->bindValue(':monthNumber', $monthNumber, PDO::PARAM_INT);
    //     $stmt->execute(); //Execution de la requête
    //     $res1 = $stmt->fetchAll();
    //     echo "<pre>";
    //     print_r($res1);
    // }
    


?>