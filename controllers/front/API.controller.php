<?php

require_once("models/front/API.manager.php");

class APIController {

    private $apiManager;

    public function __construct() {
        $this->apiManager = new APIManager();
    }

    public function getRoomsByMonth($monthNumber) {
        $rooms = $this->apiManager->getDBRooms();
        echo "Envoi des infos sur les rooms pour le mois spécifié : ".$monthNumber;

        print_r($rooms);
    }
}