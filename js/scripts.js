$(document).ready(function() {
  
  const cryptid=$("#cryptid").val();
  const time=$("#time").val();
  const monster=$("#monster").val();
  const smell=$("#smell").val();
  const food=$("#food").val();
  const pets=$("#pets").val();

  $(cryptid).val();
  $(time).val();
  $(monster).val();
  $(smell).val();
  $(food).val();
  $(pets).val();

  const cryptid = parseInt(cryptid);
  const time = parseInt(time);
  const monster = parseInt(monster);
  const smell = parseInt(smell);
  const food = parseInt(food);
  const pets = parseInt(pets);

  function add (cryptid, time, monster, smell, food, pets) {
    return cryptid + time + monster + smell + food + pets;
  }
  const result = (cryptid + time + monster + smell + food + pets);
  
  $("myBtn").click(function() {
    $(".result1").show();
  });
});