<?php

require_once("models/Model.php");

class APIManager extends Model  {

    public function getDBRooms() {
        $monthNumber = 2;
        $req="SELECT r.stay_date, r.room_nights, r.room_revenues FROM bdd_pi_modifieddates r WHERE MONTH(stay_date) = :monthNumber";
        $stmt = $this->getDB()->prepare($req);
        $stmt->bindValue(':monthNumber', $monthNumber, PDO::PARAM_INT);
        $stmt->execute();
        $rooms = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $stmt->closeCursor();
        // echo $rooms;
        return $rooms;
    }
}