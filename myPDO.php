<?php
    require_once("classes/myPDO.class.php");
    include("common/header.php");
?>

<?php 
    $pdo = myPDO::getPDO(); //récupération de la méthode de classe
    $monthNumber = 2;
    $stmt = $pdo->prepare("SELECT r.stay_date, r.room_nights, r.room_revenues FROM bdd_pi_modifieddates r WHERE MONTH(stay_date) = :monthNumber");
    $stmt->bindValue(':monthNumber', $monthNumber, PDO::PARAM_INT);
    $stmt->execute(); //Execution de la requête
    $result = $stmt->fetchAll();
    
    print_r($result);

?>

<?php   
    include("common/footer.php");
?>