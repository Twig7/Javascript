$(document).ready(function() {
  $("#quiz").submit(function(event) {
    event.preventDefault();
    let cryptid= parseInt($("#cryptid").val());
    let time= parseInt($("#time").val());
    let monster=parseInt($("#monster").val());
    let smell=parseInt($("#smell").val());
    let food=parseInt($("#food").val());
    let pets=parseInt($("#pets").val()); 
    let result = (cryptid + time + monster + smell + food + pets);
    console.log(cryptid, time, monster, smell, food, pets, result);
  });
});
  function add (cryptid, time, monster, smell, food, pets) {
    return cryptid + time + monster + smell + food + pets;
  }
  if (result >= 15) {
    $('#result1').show();
  } else if (result <= 10); {
    $('#result2').show();
  } else {
    $('#result3').show();
  }
