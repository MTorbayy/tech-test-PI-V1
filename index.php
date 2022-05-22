<?php
    define("URL", str_replace("index.php","",(isset($_SERVER['HTTPS']) ? "https" : "http").
    "://$_SERVER[HTTP_HOST]$_SERVER[PHP_SELF]"));

    require_once("controllers/front/API.controller.php");
    $apiController = new APIController();

    try {

        if(empty($_GET['page'])) {
            throw new Exception("La page n'existe pas");
        } else {
            $url = explode("/", filter_var($_GET['page'],FILTER_SANITIZE_URL)); //récupération des infos de l'url

            if(empty($url[0]) || empty($url[1])) {
                throw new Exception("La page n'existe pas");
            }

            switch($url[0]) {
                case "front" : 
                    switch($url[1]) { 
                        case "rooms" : 
                            if(empty($url[2])) throw new Exception("Aucun mois spécifié");
                            $apiController->getRoomsByMonth($url[2]);
                        break;
                        default : throw new Exception("La page n'existe pas");
                    }
                break;
                case "back" : echo "Page back-end demandée";
                break;
                default : throw new Exception("La page n'existe pas");
            }
        }

    } catch (Exception $e) {
        $msg = $e->getMessage();
        echo $msg;
    }
    
?>