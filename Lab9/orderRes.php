<?php
      $product = $_POST["product"];
      $material = $_POST["material"];
      $quantity = $_POST["quantity"];

      echo "<h2>Ваше замовлення прийнято!</h2>";
      echo "<p><b>Замовлено виріб:</b> $product</p>";
      echo "<p><b>Матеріал:</b> $material</p>";
      echo "<p><b>Кількість:</b> $quantity</p>";
    ?></p>