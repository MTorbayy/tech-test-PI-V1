<?php

require_once("models/front/API.manager.php");
require_once("models/Model.php");

class APIController {

    private $apiManager;

    public function __construct() {
        $this->apiManager = new APIManager();
    }

    public function getRoomsByMonth($monthNumber) {
        $roomsByMonth = $this->apiManager->getDBRooms($monthNumber);

        Model::sendJSON($roomsByMonth);
    }
}